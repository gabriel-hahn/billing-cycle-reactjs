import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { props } from '../utils/props';

import Dashboard from '../../pages/Dashboard';
import NavBar from '../../components/Navbar';
import AddTransaction from '../../components/AddTransaction';
import TransactionModal from '../../components/TransactionModal';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Dashboard {...props} />).dive();
});

describe('Login Page', () => {
  describe('Smoke tests', () => {
    it('Should render the dashboard page correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render 1 Navbar', () => {
      expect(wrapper.find(NavBar).length).toEqual(1);
    });

    it('Should render 1 AddTransaction', () => {
      expect(wrapper.find(AddTransaction).length).toEqual(1);
    });

    it('Should not render TransactionModal as initial state', () => {
      expect(wrapper.find(TransactionModal).length).toEqual(0);
    });
  });
});
