import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';
import { runSagaTest } from '../utils/sagas';
import { loadAllByDate } from '../../store/sagas/incomes';
import { Types as IncomesTypes } from '../../store/ducks/incomes';
import { TransactionsActionsInterface } from '../../interfaces/transaction';

import { TRANSACTIONS, TRANSACTIONS_CREDIT, RANGE } from '../utils/transactions';

const apiMock = new MockAdapter(api);

let dispatched;

beforeEach(() => {
  dispatched = [];
});

describe('Incomes Saga', () => {
  describe('Load data', () => {
    it('Should be able to load all incomes', async () => {
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transactions: TRANSACTIONS, error: null, range: RANGE },
      };

      apiMock.onGet('/credits').reply(200, TRANSACTIONS);
      await runSagaTest(loadAllByDate, param, dispatched);

      expect(dispatched[0].type).toEqual(IncomesTypes.LOAD_INCOMES_SUCCESS);
      expect(dispatched[0].payload.transactions).toEqual(TRANSACTIONS_CREDIT);
    });

    it('Should return a error', async () => {
      const apiResponse = {
        message: 'Request error',
      };
      const param: TransactionsActionsInterface = {
        type: null,
        payload: { transactions: TRANSACTIONS, error: null, range: RANGE },
      };

      apiMock.onGet('/credits').reply(401, apiResponse);
      await runSagaTest(loadAllByDate, param, dispatched);

      expect(dispatched[0].type).toEqual(IncomesTypes.LOAD_INCOMES_ERROR);
      expect(dispatched[0].payload.error).toEqual('Request error');

      expect(dispatched[1].type).toEqual('@ReduxToastr/toastr/ADD');
      expect(dispatched[1].payload.type).toEqual('error');
      expect(dispatched[1].payload.title).toEqual('Error on retrieve incomes');
      expect(dispatched[1].payload.message).toEqual('Request error');
    });
  });
});
