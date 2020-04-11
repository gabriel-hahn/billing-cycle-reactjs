import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { Private, Public, RoutePropsInterface } from '../../components/Access';
import { INITIAL_STATE } from '../utils/state';
import { StoreInterface } from '../../interfaces/store';

const state: StoreInterface = {
  ...INITIAL_STATE,
  users: {
    data: {
      token: 'hash_test',
      email: 'gabriel_hahn@hotmail.com',
    },
    loading: false,
    error: null,
  },
};

const mockStore = createStore();
const store = mockStore(state);
const emptyStore = mockStore(INITIAL_STATE);

export const DefaultComponent = () => <h1>Component Default</h1>;

const props: RoutePropsInterface = {
  component: DefaultComponent,
  path: '/',
};

let wrapperPrivate: ReactWrapper;
let wrapperPublic: ReactWrapper;
let wrapperPrivateEmptyStore: ReactWrapper;
let wrapperPublicEmptyStore: ReactWrapper;

beforeEach(() => {
  wrapperPrivate = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Private {...props} />
      </BrowserRouter>
    </Provider>,
  );

  wrapperPrivateEmptyStore = mount(
    <Provider store={emptyStore}>
      <BrowserRouter>
        <Private {...props} />
      </BrowserRouter>
    </Provider>,
  );

  wrapperPublic = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Public {...props} />
      </BrowserRouter>
    </Provider>,
  );

  wrapperPublicEmptyStore = mount(
    <Provider store={emptyStore}>
      <BrowserRouter>
        <Public {...props} />
      </BrowserRouter>
    </Provider>,
  );
});

afterEach(() => {
  wrapperPrivate.unmount();
  wrapperPrivateEmptyStore.unmount();
  wrapperPublic.unmount();
  wrapperPublicEmptyStore.unmount();
});

describe('Access Private Component', () => {
  describe('Smoke tests', () => {
    it('Should render the private component correctly', () => {
      expect(wrapperPrivate.exists());
    });
  });

  describe('Render private component by user state', () => {
    it('Should render the component when have state with token', () => {
      expect(wrapperPrivate.find('DefaultComponent').length).toEqual(1);
      expect(wrapperPrivate.find('Redirect').length).toEqual(0);
    });

    it('Should redirect to root route when user state does not exist', () => {
      expect(wrapperPrivateEmptyStore.find('DefaultComponent').length).toEqual(0);
      expect(wrapperPrivateEmptyStore.find('Redirect').length).toEqual(1);
    });
  });
});

describe('Access Public Component', () => {
  describe('Smoke tests', () => {
    it('Should render the public component correctly', () => {
      expect(wrapperPublic.exists());
    });
  });

  describe('Render public component by user state', () => {
    it('Should render the public component when the state does not exist', () => {
      expect(wrapperPublic.find('DefaultComponent').length).toEqual(0);
      expect(wrapperPublic.find('Redirect').length).toEqual(1);
    });

    it('Should redirect to overview route when user state exists', () => {
      expect(wrapperPublicEmptyStore.find('DefaultComponent').length).toEqual(1);
      expect(wrapperPublicEmptyStore.find('Redirect').length).toEqual(0);
    });
  });
});
