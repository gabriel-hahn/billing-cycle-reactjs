import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createStore from 'redux-mock-store';

import { props } from '../utils/props';
import { wrapperUpdateFunction } from '../utils/geral';
import Login from '../../pages/Login';
import { StoreInterface } from '../../interfaces/store';

const INITIAL_STATE: StoreInterface = {
  users: {
    data: null,
    error: null,
    loading: false,
  },
};

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Login {...props} />
    </Provider>,
  );
});

describe('Login Page', () => {
  describe('Smoke tests', () => {
    it('Should render the login page correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render 1 form', () => {
      expect(wrapper.find('form').length).toEqual(1);
    });

    it('Should render 2 buttons - Login and Register', () => {
      expect(wrapper.find('button').length).toEqual(2);
    });

    it('Should not show name field when is login', () => {
      expect(wrapper.find('input[name="name"]').length).toEqual(0);
    });
  });

  describe('Event tests', () => {
    it('Should show name field when click on "Register" button', async () => {
      const registerButton = wrapper.find('button').last();
      await wrapperUpdateFunction(registerButton.props().onClick, wrapper);

      expect(wrapper.find('input[name="name"]').length).toEqual(1);
    });
  });
});
