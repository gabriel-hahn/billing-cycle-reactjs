import incomesReducer, { Creators as IncomesActions, Types as IncomesTypes } from '../../store/ducks/incomes';
import {
  TransactionsActionsInterface,
  TransactionStateInterface,
} from '../../interfaces/transaction';

import { RANGE, TRANSACTIONS_CREDIT } from '../utils/transactions';

const INITIAL_STATE: TransactionStateInterface = {
  data: [],
  error: null,
  loading: false,
};

let action: TransactionsActionsInterface;

describe('Incomes Reducer', () => {
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

  it('Should be able to set a new incomes request', () => {
    action.type = IncomesTypes.INCOMES_REQUEST;
    action.payload.transactions = null;

    const state = incomesReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toBeTruthy();
    expect(state.data).toEqual([]);
  });

  it('Should return correct action to request incomes creator', () => {
    const creator = IncomesActions.incomesRequest(RANGE.startDate, RANGE.endDate);

    expect(creator.payload.range).toEqual(RANGE);
    expect(creator.type).toEqual(IncomesTypes.INCOMES_REQUEST);
  });

  it('Should be able to set a new incomes success', () => {
    action.type = IncomesTypes.INCOMES_SUCCESS;
    action.payload.transactions = TRANSACTIONS_CREDIT;

    const state = incomesReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toBeFalsy();
    expect(state.data).toEqual(TRANSACTIONS_CREDIT);
  });

  it('Should return correct action to success incomes creator', () => {
    const creator = IncomesActions.incomesSuccess(TRANSACTIONS_CREDIT);

    expect(creator.payload.transactions).toEqual(TRANSACTIONS_CREDIT);
    expect(creator.type).toEqual(IncomesTypes.INCOMES_SUCCESS);
  });

  it('Should return correct action to error incomes creator', () => {
    INITIAL_STATE.data = null;

    action.type = IncomesTypes.INCOMES_ERROR;
    action.payload.transactions = null;
    action.payload.error = 'Error test message incomes reducer';

    const state = incomesReducer(INITIAL_STATE, action);

    expect(state.error).toEqual('Error test message incomes reducer');
    expect(state.loading).toBeFalsy();
    expect(state.data).toBeNull();
  });

  it('Should return correct action to incomes error creator', () => {
    const creator = IncomesActions.incomesError('Error test message');

    expect(creator.type).toEqual(IncomesTypes.INCOMES_ERROR);
  });
});
