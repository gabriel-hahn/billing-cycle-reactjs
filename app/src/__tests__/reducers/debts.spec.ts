import debtsReducer, { Creators as DebtsActions, Types as DebtsTypes } from '../../store/ducks/debts';
import {
  TransactionsActionsInterface,
  TransactionStateInterface,
} from '../../interfaces/transaction';

import { RANGE, TRANSACTIONS_DEBIT } from '../utils/transactions';

const INITIAL_STATE: TransactionStateInterface = {
  data: [],
  error: null,
  loading: false,
};

let action: TransactionsActionsInterface;

describe('Debts Reducer', () => {
  beforeEach(() => {
    action = {
      type: null,
      payload: {
        transactions: [],
        range: null,
        error: null,
      },
    };
  });

  it('Should be able to set a new debts request', () => {
    action.type = DebtsTypes.DEBTS_REQUEST;
    action.payload.transactions = null;

    const state = debtsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toBeTruthy();
    expect(state.data).toEqual([]);
  });

  it('Should return correct action to request debts creator', () => {
    const creator = DebtsActions.debtsRequest(RANGE.startDate, RANGE.endDate);

    expect(creator.payload.range).toEqual(RANGE);
    expect(creator.type).toEqual(DebtsTypes.DEBTS_REQUEST);
  });

  it('Should be able to set a new debts success', () => {
    action.type = DebtsTypes.DEBTS_SUCCESS;
    action.payload.transactions = TRANSACTIONS_DEBIT;

    const state = debtsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toBeFalsy();
    expect(state.data).toEqual(TRANSACTIONS_DEBIT);
  });

  it('Should return correct action to success debts creator', () => {
    const creator = DebtsActions.debtsSuccess(TRANSACTIONS_DEBIT);

    expect(creator.payload.transactions).toEqual(TRANSACTIONS_DEBIT);
    expect(creator.type).toEqual(DebtsTypes.DEBTS_SUCCESS);
  });

  it('Should return correct action to error debts creator', () => {
    INITIAL_STATE.data = null;

    action.type = DebtsTypes.DEBTS_ERROR;
    action.payload.transactions = null;
    action.payload.error = 'Error test message debts reducer';

    const state = debtsReducer(INITIAL_STATE, action);

    expect(state.error).toEqual('Error test message debts reducer');
    expect(state.loading).toBeFalsy();
    expect(state.data).toBeNull();
  });

  it('Should return correct action to debts error creator', () => {
    const creator = DebtsActions.debtsError('Error test message');

    expect(creator.type).toEqual(DebtsTypes.DEBTS_ERROR);
  });
});
