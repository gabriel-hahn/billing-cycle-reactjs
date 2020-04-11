import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';
import createStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import { props } from '../utils/props';
import { INITIAL_STATE } from '../utils/state';

import Dashboard from '../../pages/Dashboard';
import NavBar from '../../components/Navbar';
import TransactionModal from '../../components/TransactionModal';

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper: ReactWrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard {...props} />
      </BrowserRouter>
    </Provider>,
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('Login Page', () => {
  describe('Smoke tests', () => {
    it('Should render the dashboard page correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render 1 Navbar', () => {
      expect(wrapper.find(NavBar).length).toEqual(1);
    });

    it('Should not render TransactionModal as initial state', () => {
      expect(wrapper.find(TransactionModal).length).toEqual(0);
    });
  });
});
