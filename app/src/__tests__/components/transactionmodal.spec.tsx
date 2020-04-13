import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import { mount, ReactWrapper } from 'enzyme';

import { wrapperUpdateFunction } from '../mocks/geral';
import { INITIAL_STATE } from '../mocks/state';
import TransactionModal, { TransactionModalPropsInterface } from '../../components/TransactionModal';

const props: TransactionModalPropsInterface = {
  onClose: jest.fn(),
};

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper: ReactWrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <TransactionModal {...props} />
    </Provider>,
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('Transaction modal component', () => {
  describe('Smoke tests', () => {
    it('Should render the transaction modal component correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render 1 InputValue', () => {
      expect(wrapper.find('InputValue').length).toEqual(1);
    });

    it('Should render 1 InputDescription', () => {
      expect(wrapper.find('InputDescription').length).toEqual(1);
    });

    it('Should render 1 SelectType', () => {
      expect(wrapper.find('SelectType').length).toEqual(1);
    });

    it('Should render 1 FormContainer', () => {
      expect(wrapper.find('FormContainer').length).toEqual(1);
    });

    it('Should render 1 ButtonsContainer', () => {
      expect(wrapper.find('ButtonsContainer').length).toEqual(1);
    });
  });

  describe('Events and state tests', () => {
    it('Should render one Debit (first option) button', () => {
      expect(wrapper.find('button').first().text()).toEqual('Debit');
    });

    it('Should Debit button be selected by default', () => {
      expect(wrapper.find('button').first().props().selected).toBeTruthy();
    });

    it('Should render one Credit (second option) button', () => {
      expect(wrapper.find('button').get(1).props.children).toEqual('Credit');
    });

    it('Should Credit button not selected by default', () => {
      expect(wrapper.find('button').get(1).props.selected).toBeFalsy();
    });

    it('Should change the button selection to Credit when it is clicked', async () => {
      const creditButton = wrapper.find('button').get(1);

      await wrapperUpdateFunction(creditButton.props.onClick, wrapper);

      expect(wrapper.find('button').first().props().selected).toBeFalsy();
      expect(wrapper.find('button').get(1).props.selected).toBeTruthy();
    });

    it('Should call "onClose" prop method when click on "Close" button', async () => {
      const closeButton = wrapper.find('button').last();

      await wrapperUpdateFunction(closeButton.props().onClick, wrapper);

      expect(props.onClose).toHaveBeenCalledTimes(1);
    });
  });
});
