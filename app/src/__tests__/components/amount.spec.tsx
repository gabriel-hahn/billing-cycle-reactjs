import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import { mount, ReactWrapper } from 'enzyme';

import { INITIAL_STATE } from '../utils/state';
import Amount, { AmountPropsInterface } from '../../components/Amount';

const props: AmountPropsInterface = {
  value: 123.50,
  color: '#333',
  description: 'Description for test',
  loading: false,
  showDate: true,
};

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper: ReactWrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Amount {...props} />
    </Provider>,
  );
});

afterEach(() => {
  wrapper.unmount();
});

fdescribe('Amount component', () => {
  describe('Smoke tests', () => {
    it('Should render the amount component correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render 1 description', () => {
      expect(wrapper.find('Description').length).toEqual(1);
    });

    it('Should render 1 Value', () => {
      expect(wrapper.find('Value').length).toEqual(1);
    });
  });
});
