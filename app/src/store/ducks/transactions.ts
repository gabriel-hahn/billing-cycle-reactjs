import {
  TransactionInterface,
  TransactionStateInterface,
  TransactionsActionsInterface,
  TransactionType,
} from '../../interfaces/transaction';

export const Types = {
  GET_TRANSACTIONS_REQUEST: '@transaction/GET_TRANSACTIONS_REQUEST',
  GET_TRANSACTIONS_SUCCESS: '@transaction/GET_TRANSACTIONS_SUCCESS',
  ADD_TRANSACTION_REQUEST: '@transaction/ADD_TRANSACTION_REQUEST',
  ADD_TRANSACTION_SUCCESS: '@transaction/ADD_TRANSACTION_SUCCESS',
  TRANSACTIONS_ERROR: '@transaction/TRANSACTIONS_ERROR',
};

const INITIAL_STATE: TransactionStateInterface = {
  data: [],
  error: null,
  loading: false,
};

export default function Incomes(state = INITIAL_STATE, action: TransactionsActionsInterface) {
  switch (action.type) {
    case Types.GET_TRANSACTIONS_REQUEST:
    case Types.ADD_TRANSACTION_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.transactions,
      };
    case Types.ADD_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.transaction],
      };
    case Types.TRANSACTIONS_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  getTransactionsRequest: (startDate: string, endDate: string, type?: TransactionType)
    : TransactionsActionsInterface => ({
      type: Types.GET_TRANSACTIONS_REQUEST,
      payload: { range: { startDate, endDate }, transactions: [], type },
  }),
  addTransactionRequest: (transaction: TransactionInterface): TransactionsActionsInterface => ({
    type: Types.ADD_TRANSACTION_REQUEST,
    payload: { transaction, transactions: [] },
  }),
  getTransactionsSuccess: (transactions: TransactionInterface[]) => ({
    type: Types.GET_TRANSACTIONS_SUCCESS,
    payload: { transactions },
  }),
  addTransactionSuccess: (transaction: TransactionInterface) => ({
    type: Types.ADD_TRANSACTION_SUCCESS,
    payload: { transaction },
  }),
  transactionsError: (error: string) => ({
    type: Types.TRANSACTIONS_ERROR,
    payload: { error },
  }),
};
