import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';
import createStore from 'redux-mock-store';

import { INITIAL_STATE } from '../mocks/state';
import Overview from '../../pages/Dashboard/Overview';
import Amount from '../../components/Amount';
import TransactionTable from '../../components/TransactionTable';

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper: ReactWrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Overview />
    </Provider>,
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('Overview Page', () => {
  describe('Smoke tests', () => {
    it('Should render the Overview page correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render 4 Amounts', () => {
      expect(wrapper.find(Amount).length).toEqual(4);
    });

    it('Should render 1 TransactionTable', () => {
      expect(wrapper.find(TransactionTable).length).toEqual(1);
    });
  });
});
