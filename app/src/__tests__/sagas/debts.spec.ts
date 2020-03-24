import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';
import { runSagaTest } from '../utils/sagas';
import { loadAllByDate } from '../../store/sagas/debts';
import { Types as DebtsTypes } from '../../store/ducks/debts';
import { TransactionsActionsInterface } from '../../interfaces/transaction';

import { TRANSACTIONS, TRANSACTIONS_DEBIT, RANGE } from '../utils/transactions';

const apiMock = new MockAdapter(api);

let dispatched;

beforeEach(() => {
  dispatched = [];
});

describe('Debts Saga', () => {
  describe('Load data', () => {
    it('Should be able to load all debts', async () => {
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transactions: TRANSACTIONS, error: null, range: RANGE },
      };

      apiMock.onGet('/debts').reply(200, TRANSACTIONS);
      await runSagaTest(loadAllByDate, param, dispatched);

      expect(dispatched[0].type).toEqual(DebtsTypes.LOAD_DEBTS_SUCCESS);
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

      apiMock.onGet('/debts').reply(401, apiResponse);
      await runSagaTest(loadAllByDate, param, dispatched);

      expect(dispatched[0].type).toEqual(DebtsTypes.LOAD_DEBTS_ERROR);
      expect(dispatched[0].payload.error).toEqual('Request error');

      expect(dispatched[1].type).toEqual('@ReduxToastr/toastr/ADD');
      expect(dispatched[1].payload.type).toEqual('error');
      expect(dispatched[1].payload.title).toEqual('Error on retrieve debts');
      expect(dispatched[1].payload.message).toEqual('Request error');
    });
  });
});
