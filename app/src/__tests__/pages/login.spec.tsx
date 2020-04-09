import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';
import createStore from 'redux-mock-store';

import { props } from '../utils/props';
import { INITIAL_STATE } from '../utils/state';
import { wrapperUpdateFunction } from '../utils/geral';
import Login from '../../pages/Login';

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper: ReactWrapper;

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

    it('Should render 1 RegisterButton', () => {
      expect(wrapper.find('RegisterButton').length).toEqual(1);
    });

    it('Should not show name field when is login', () => {
      expect(wrapper.find('input[name="name"]').length).toEqual(0);
    });
  });

  describe('Event tests', () => {
    it('Should show name, email and password fields when click on "Register" button', async () => {
      const registerButton = wrapper.find('RegisterButton').last();
      await wrapperUpdateFunction(registerButton.props().onClick, wrapper);

      expect(wrapper.find('Input').length).toEqual(3);
      expect(wrapper.find('input[name="name"]').length).toEqual(1);
      expect(wrapper.find('input[name="email"]').length).toEqual(1);
      expect(wrapper.find('input[name="password"]').length).toEqual(1);
    });

    it('Should show only email field when click on "Forgot password" button', async () => {
      const forgotPasswordButton = wrapper.find('ForgotButton').last();
      await wrapperUpdateFunction(forgotPasswordButton.props().onClick, wrapper);

      expect(wrapper.find('Input').length).toEqual(1);
      expect(wrapper.find('input[name="email"]').length).toEqual(1);
      expect(wrapper.find('input[name="name"]').length).toEqual(0);
      expect(wrapper.find('input[name="password"]').length).toEqual(0);
    });

    it('Should show only name and email fields when click on "Login" button - Which in this case will be the register button itself', async () => {
      const forgotPasswordButton = wrapper.find('ForgotButton').last();
      await wrapperUpdateFunction(forgotPasswordButton.props().onClick, wrapper);

      const loginButton = wrapper.find('RegisterButton').last();
      await wrapperUpdateFunction(loginButton.props().onClick, wrapper);

      expect(wrapper.find('Input').length).toEqual(2);
      expect(wrapper.find('input[name="email"]').length).toEqual(1);
      expect(wrapper.find('input[name="password"]').length).toEqual(1);
      expect(wrapper.find('input[name="name"]').length).toEqual(0);
    });
  });
});
