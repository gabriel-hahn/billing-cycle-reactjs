import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mount, ReactWrapper } from 'enzyme';
import createStore from 'redux-mock-store';

import { INITIAL_STATE } from '../utils/state';
import Navbar, { NavbarPropsInterface } from '../../components/Navbar';

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);
const props: NavbarPropsInterface = {
  onLogout: () => {},
};

let wrapper: ReactWrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar {...props} />
      </BrowserRouter>
    </Provider>,
  );
});

describe('Navbar component', () => {
  describe('Smoke tests', () => {
    it('Should render the navbar component correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render 1 PagesList', () => {
      expect(wrapper.find('PagesList').length).toEqual(1);
    });

    it('Should render 1 Logout', () => {
      expect(wrapper.find('Logout').length).toEqual(1);
    });
  });
});
