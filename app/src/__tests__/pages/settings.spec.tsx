import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';
import createStore from 'redux-mock-store';

import { INITIAL_STATE } from '../mocks/state';
import Settings from '../../pages/Dashboard/Settings';

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper: ReactWrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Settings />
    </Provider>,
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('Settings Page', () => {
  describe('Smoke tests', () => {
    it('Should render the settings page correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render 2 SelectItem', () => {
      expect(wrapper.find('SelectItem').length).toEqual(2);
    });

    it('Should render 2 SelectTitle', () => {
      expect(wrapper.find('SelectTitle').length).toEqual(2);
    });

    it('Should render 2 Select', () => {
      expect(wrapper.find('Select').length).toEqual(2);
    });
  });
});
