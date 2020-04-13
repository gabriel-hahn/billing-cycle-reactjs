import transactionsReducer, { Creators as TransactionsActions, Types as TransactionsTypes, LOADING_DEFAULT } from '../../store/ducks/transactions';
import {
  TransactionsActionsInterface,
  TransactionStateInterface,
} from '../../interfaces/transaction';

import { RANGE, TRANSACTIONS_CREDIT } from '../mocks/transactions';

const INITIAL_STATE: TransactionStateInterface = {
  data: [],
  error: null,
  modalOpen: false,
  loading: LOADING_DEFAULT,
};

let action: TransactionsActionsInterface;

describe('Transactions Reducer', () => {
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

  it('Should be able to set a new transaction loading request', () => {
    action.type = TransactionsTypes.GET_TRANSACTIONS_REQUEST;
    action.payload.transactions = null;

    const state = transactionsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toEqual({ ...LOADING_DEFAULT, allLoading: true });
    expect(state.data).toEqual([]);
  });

  it('Should return correct action to request transactions creator', () => {
    const creator = TransactionsActions.getTransactionsRequest(RANGE.startDate, RANGE.endDate);

    expect(creator.payload.range).toEqual(RANGE);
    expect(creator.type).toEqual(TransactionsTypes.GET_TRANSACTIONS_REQUEST);
  });

  it('Should be able to set a new transaction loading success', () => {
    action.type = TransactionsTypes.GET_TRANSACTIONS_SUCCESS;
    action.payload.transactions = TRANSACTIONS_CREDIT;

    const state = transactionsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toEqual({ ...LOADING_DEFAULT, allLoading: false });
    expect(state.data).toEqual(TRANSACTIONS_CREDIT);
  });

  it('Should return correct action to success transactions creator', () => {
    const creator = TransactionsActions.getTransactionsSuccess(TRANSACTIONS_CREDIT);

    expect(creator.payload.transactions).toEqual(TRANSACTIONS_CREDIT);
    expect(creator.type).toEqual(TransactionsTypes.GET_TRANSACTIONS_SUCCESS);
  });

  it('Should return correct action to error transactions creator', () => {
    INITIAL_STATE.data = [];

    action.type = TransactionsTypes.TRANSACTIONS_ERROR;
    action.payload.transactions = null;
    action.payload.error = 'Error test message transactions reducer';

    const state = transactionsReducer(INITIAL_STATE, action);

    expect(state.error).toEqual('Error test message transactions reducer');
    expect(state.loading).toEqual(LOADING_DEFAULT);
    expect(state.data).toEqual([]);
  });

  it('Should return correct action to transactions error creator', () => {
    const creator = TransactionsActions.transactionsError('Error test message');

    expect(creator.type).toEqual(TransactionsTypes.TRANSACTIONS_ERROR);
  });

  it('Should be able to set a new transaction request', () => {
    const [transaction] = TRANSACTIONS_CREDIT;

    INITIAL_STATE.data = [];

    action.type = TransactionsTypes.ADD_TRANSACTION_REQUEST;
    action.payload.transaction = transaction;

    const state = transactionsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toEqual({ ...LOADING_DEFAULT, addLoading: true });
    expect(state.data).toEqual([]);
  });

  it('Should return correct action to request transaction added creator', () => {
    const creator = TransactionsActions.addTransactionRequest(TRANSACTIONS_CREDIT[0]);

    expect(creator.payload.transaction).toEqual(TRANSACTIONS_CREDIT[0]);
    expect(creator.type).toEqual(TransactionsTypes.ADD_TRANSACTION_REQUEST);
  });

  it('Should be able to set a new transaction success', () => {
    const [transaction] = TRANSACTIONS_CREDIT;

    action.type = TransactionsTypes.ADD_TRANSACTION_SUCCESS;
    action.payload.transaction = transaction;

    const state = transactionsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toEqual({ ...LOADING_DEFAULT, allLoading: false });
    expect(state.data).toEqual([transaction]);
  });

  it('Should return correct action to success transaction added creator', () => {
    const creator = TransactionsActions.addTransactionSuccess(TRANSACTIONS_CREDIT[0]);

    expect(creator.payload.transaction).toEqual(TRANSACTIONS_CREDIT[0]);
    expect(creator.type).toEqual(TransactionsTypes.ADD_TRANSACTION_SUCCESS);
  });

  it('Should be able to set a delete transaction request', () => {
    const [transaction] = TRANSACTIONS_CREDIT;

    action.type = TransactionsTypes.DELETE_TRANSACTION_REQUEST;
    action.payload.transaction = transaction;

    const state = transactionsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toEqual({ ...LOADING_DEFAULT, deleteLoading: true });
  });

  it('Should return correct action to request transaction delete creator', () => {
    const creator = TransactionsActions.deleteTransactionRequest(TRANSACTIONS_CREDIT[0]);

    expect(creator.payload.transaction).toEqual(TRANSACTIONS_CREDIT[0]);
    expect(creator.type).toEqual(TransactionsTypes.DELETE_TRANSACTION_REQUEST);
  });

  it('Should be able to set a delete transaction success', () => {
    const [transaction] = TRANSACTIONS_CREDIT;

    action.type = TransactionsTypes.DELETE_TRANSACTION_SUCCESS;
    action.payload.transaction = transaction;

    const state = transactionsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toEqual({ ...LOADING_DEFAULT, deleteLoading: false });
  });

  it('Should return correct action to success transaction delete creator', () => {
    const creator = TransactionsActions.deleteTransactionSuccess(TRANSACTIONS_CREDIT[0]);

    expect(creator.payload.transaction).toEqual(TRANSACTIONS_CREDIT[0]);
    expect(creator.type).toEqual(TransactionsTypes.DELETE_TRANSACTION_SUCCESS);
  });

  it('Should be able to set a update transaction request', () => {
    const [transaction] = TRANSACTIONS_CREDIT;

    action.type = TransactionsTypes.UPDATE_TRANSACTION_REQUEST;
    action.payload.transaction = transaction;

    const state = transactionsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toEqual({ ...LOADING_DEFAULT, editLoading: true });
  });

  it('Should return correct action to request transaction update creator', () => {
    const creator = TransactionsActions.updateTransactionRequest(TRANSACTIONS_CREDIT[0]);

    expect(creator.payload.transaction).toEqual(TRANSACTIONS_CREDIT[0]);
    expect(creator.type).toEqual(TransactionsTypes.UPDATE_TRANSACTION_REQUEST);
  });

  it('Should be able to set a update transaction success', () => {
    const [transaction] = TRANSACTIONS_CREDIT;

    action.type = TransactionsTypes.UPDATE_TRANSACTION_SUCCESS;
    action.payload.transaction = transaction;

    const state = transactionsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toEqual({ ...LOADING_DEFAULT, editLoading: false });
  });

  it('Should return correct action to success transaction update creator', () => {
    const creator = TransactionsActions.updateTransactionSuccess(TRANSACTIONS_CREDIT[0]);

    expect(creator.payload.transaction).toEqual(TRANSACTIONS_CREDIT[0]);
    expect(creator.type).toEqual(TransactionsTypes.UPDATE_TRANSACTION_SUCCESS);
  });

  it('Should be able to set a toggle transaction', () => {
    const [transaction] = TRANSACTIONS_CREDIT;

    action.type = TransactionsTypes.TRANSACTION_MODAL_TOGGLE;
    action.payload.transaction = transaction;

    const state = transactionsReducer(INITIAL_STATE, action);

    expect(state.error).toBeNull();
    expect(state.loading).toEqual({ ...LOADING_DEFAULT });
    expect(state.transactionSelected).toEqual(transaction);
  });

  it('Should return correct action to toggle transaction modal creator', () => {
    const creator = TransactionsActions.transactionModalToggle(TRANSACTIONS_CREDIT[0]);

    expect(creator.payload.transaction).toEqual(TRANSACTIONS_CREDIT[0]);
    expect(creator.type).toEqual(TransactionsTypes.TRANSACTION_MODAL_TOGGLE);
  });
});
