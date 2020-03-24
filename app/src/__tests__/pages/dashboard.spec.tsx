import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { props } from '../utils/props';
import { wrapperUpdateFunction } from '../utils/geral';

import Dashboard from '../../pages/Dashboard';
import NavBar from '../../components/Navbar';
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

    it('Should not render TransactionModal as initial state', () => {
      expect(wrapper.find(TransactionModal).length).toEqual(0);
    });
  });

  describe('Event tests', () => {
    it('Should show TransactionModal when click on add transaction element', async () => {
      wrapper = shallow(<Dashboard {...props} />);

      const addTransactionDiv = wrapper.dive().find('AddTransactionContainer');
      await wrapperUpdateFunction(addTransactionDiv.props().onClick, wrapper);

      expect(wrapper.dive().find(TransactionModal).length).toEqual(1);
    });
  });
});
