import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';
import { runSagaTest, runSagaTestState } from '../utils/sagas';
import { Types as TransactionsTypes } from '../../store/ducks/transactions';
import { TransactionsActionsInterface, TransactionType } from '../../interfaces/transaction';
import {
  loadAllByDate,
  addTransaction,
  deleteTransaction,
  updateTransaction,
} from '../../store/sagas/transactions';

import { INITIAL_STATE_FILLED } from '../utils/state';
import {
  TRANSACTIONS,
  TRANSACTIONS_CREDIT,
  TRANSACTIONS_DEBIT,
  RANGE,
} from '../utils/transactions';

const apiMock = new MockAdapter(api);

let dispatched;

beforeEach(() => {
  dispatched = [];
});

afterEach(() => {
  apiMock.reset();
});

describe('Transactions Saga', () => {
  describe('Load all transactions', () => {
    it('Should be able to load all transactions', async () => {
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transactions: TRANSACTIONS, error: null, range: RANGE },
      };

      apiMock.onGet('/credits').reply(200, TRANSACTIONS_CREDIT);
      apiMock.onGet('/debits').reply(200, TRANSACTIONS_DEBIT);

      await runSagaTest(loadAllByDate, param, dispatched);

      expect(dispatched[0].type).toEqual(TransactionsTypes.GET_TRANSACTIONS_SUCCESS);
      expect(dispatched[0].payload.transactions).toEqual(
        [...TRANSACTIONS_DEBIT, ...TRANSACTIONS_CREDIT],
      );
    });

    it('Should be able to load specific type of transactions', async () => {
      const param: TransactionsActionsInterface = {
        type: null,
        payload: {
          transactions: TRANSACTIONS,
          error: null,
          range: RANGE,
          category: TransactionType.DEBIT,
        },
      };

      apiMock.onGet('/debits').reply(200, TRANSACTIONS_DEBIT);

      await runSagaTest(loadAllByDate, param, dispatched);

      expect(dispatched[0].type).toEqual(TransactionsTypes.GET_TRANSACTIONS_SUCCESS);
      expect(dispatched[0].payload.transactions).toEqual(TRANSACTIONS_DEBIT);
    });

    it('Should return a error', async () => {
      const apiResponse = {
        message: 'Request error',
      };
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transactions: TRANSACTIONS, error: null, range: RANGE },
      };

      apiMock.onGet('/debits').reply(401, apiResponse);
      await runSagaTest(loadAllByDate, param, dispatched);

      expect(dispatched[0].type).toEqual(TransactionsTypes.TRANSACTIONS_ERROR);
      expect(dispatched[0].payload.error).toEqual('Request error');

      expect(dispatched[1].type).toEqual('@ReduxToastr/toastr/ADD');
      expect(dispatched[1].payload.type).toEqual('error');
      expect(dispatched[1].payload.title).toEqual('Error on retrieve transactions');
      expect(dispatched[1].payload.message).toEqual('Request error');
    });
  });

  describe('Add new transaction', () => {
    it('Should be able to add new a transaction', async () => {
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transaction: TRANSACTIONS_CREDIT[0], transactions: [] },
      };

      apiMock.onPost('/credit').reply(200, TRANSACTIONS_CREDIT[0]);

      await runSagaTestState(addTransaction, param, dispatched, INITIAL_STATE_FILLED);

      expect(dispatched[0].type).toEqual(TransactionsTypes.ADD_TRANSACTION_SUCCESS);
    });

    it('Should return a error', async () => {
      const apiResponse = {
        message: 'Request error',
      };
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transaction: TRANSACTIONS_CREDIT[0], transactions: [] },
      };

      apiMock.onPost('/credit').reply(401, apiResponse);
      await runSagaTestState(addTransaction, param, dispatched, INITIAL_STATE_FILLED);

      expect(dispatched[0].type).toEqual(TransactionsTypes.TRANSACTIONS_ERROR);
      expect(dispatched[0].payload.error).toEqual('Request error');

      expect(dispatched[1].type).toEqual('@ReduxToastr/toastr/ADD');
      expect(dispatched[1].payload.type).toEqual('error');
      expect(dispatched[1].payload.title).toEqual('Error on add new transaction');
      expect(dispatched[1].payload.message).toEqual('Request error');
    });
  });

  describe('Delete a transaction', () => {
    it('Should be able to delete a transaction', async () => {
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transaction: TRANSACTIONS_CREDIT[0], transactions: [] },
      };

      apiMock.onDelete('/credit/1').reply(200, TRANSACTIONS_CREDIT[0]);

      await runSagaTestState(deleteTransaction, param, dispatched, INITIAL_STATE_FILLED);

      expect(dispatched[0].type).toEqual(TransactionsTypes.DELETE_TRANSACTION_SUCCESS);
    });

    it('Should return a error', async () => {
      const apiResponse = {
        message: 'Request error',
      };
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transaction: TRANSACTIONS_CREDIT[0], transactions: [] },
      };

      apiMock.onDelete('/credit/1').reply(401, apiResponse);
      await runSagaTestState(deleteTransaction, param, dispatched, INITIAL_STATE_FILLED);

      expect(dispatched[0].type).toEqual(TransactionsTypes.TRANSACTIONS_ERROR);
      expect(dispatched[0].payload.error).toEqual('Delete transaction error');

      expect(dispatched[1].type).toEqual('@ReduxToastr/toastr/ADD');
      expect(dispatched[1].payload.type).toEqual('error');
      expect(dispatched[1].payload.title).toEqual('Error on delete transaction');
      expect(dispatched[1].payload.message).toEqual('Request error');
    });
  });

  describe('Update a transaction', () => {
    it('Should be able to update a transaction', async () => {
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transaction: TRANSACTIONS_CREDIT[0], transactions: [] },
      };

      apiMock.onPut('/credit').reply(200, TRANSACTIONS_CREDIT[0]);

      await runSagaTestState(updateTransaction, param, dispatched, INITIAL_STATE_FILLED);

      expect(dispatched[0].type).toEqual(TransactionsTypes.UPDATE_TRANSACTION_SUCCESS);
    });

    it('Should return a error', async () => {
      const apiResponse = {
        message: 'Request error',
      };
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transaction: TRANSACTIONS_CREDIT[0], transactions: [] },
      };

      apiMock.onPut('/credit').reply(401, apiResponse);
      await runSagaTestState(updateTransaction, param, dispatched, INITIAL_STATE_FILLED);

      expect(dispatched[0].type).toEqual(TransactionsTypes.TRANSACTIONS_ERROR);
      expect(dispatched[0].payload.error).toEqual('Update transaction error');

      expect(dispatched[1].type).toEqual('@ReduxToastr/toastr/ADD');
      expect(dispatched[1].payload.type).toEqual('error');
      expect(dispatched[1].payload.title).toEqual('Error on update transaction');
      expect(dispatched[1].payload.message).toEqual('Request error');
    });
  });
});
