import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';
import createStore from 'redux-mock-store';

import { props } from '../utils/props';
import { INITIAL_STATE } from '../utils/state';
import ResetPassword from '../../pages/ResetPassword';

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper: ReactWrapper;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    token: 'token-test',
  }),
  useRouteMatch: () => ({ url: '/token-test' }),
}));

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <ResetPassword {...props} />,
    </Provider>,
  );
});

describe('ResetPassword Page', () => {
  describe('Smoke tests', () => {
    it('Should render the reset page page correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render 1 form', () => {
      expect(wrapper.find('form').length).toEqual(1);
    });

    it('Should render 1 LoginButton', () => {
      expect(wrapper.find('LoginButton').length).toEqual(1);
    });

    it('Should render 3 inputs to reset password', () => {
      expect(wrapper.find('Input').length).toEqual(3);
    });

    it('Should render 1 AnimationContainer', () => {
      expect(wrapper.find('AnimationContainer').length).toEqual(1);
    });
  });
});
