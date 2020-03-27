import {
  TransactionInterface,
  TransactionStateInterface,
  TransactionsActionsInterface,
  TransactionType,
  TransactionLoading,
} from '../../interfaces/transaction';

export const Types = {
  GET_TRANSACTIONS_REQUEST: '@transaction/GET_TRANSACTIONS_REQUEST',
  GET_TRANSACTIONS_SUCCESS: '@transaction/GET_TRANSACTIONS_SUCCESS',
  ADD_TRANSACTION_REQUEST: '@transaction/ADD_TRANSACTION_REQUEST',
  ADD_TRANSACTION_SUCCESS: '@transaction/ADD_TRANSACTION_SUCCESS',
  DELETE_TRANSACTION_REQUEST: '@transaction/DELETE_TRANSACTION_REQUEST',
  DELETE_TRANSACTION_SUCCESS: '@transaction/DELETE_TRANSACTION_SUCCESS',
  TRANSACTIONS_ERROR: '@transaction/TRANSACTIONS_ERROR',
};

export const LOADING_DEFAULT: TransactionLoading = {
  addLoading: false,
  allLoading: false,
  deleteLoading: false,
  editLoading: false,
};

const INITIAL_STATE: TransactionStateInterface = {
  data: [],
  error: null,
  loading: LOADING_DEFAULT,
};

export default function Transactions(state = INITIAL_STATE, action: TransactionsActionsInterface) {
  switch (action.type) {
    case Types.GET_TRANSACTIONS_REQUEST:
      return { ...state, loading: { ...state.loading, allLoading: true }, error: null };
    case Types.ADD_TRANSACTION_REQUEST:
      return { ...state, loading: { ...state.loading, addLoading: true }, error: null };
    case Types.DELETE_TRANSACTION_REQUEST:
      return { ...state, loading: { ...state.loading, deleteLoading: true }, error: null };
    case Types.GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: { ...state.loading, allLoading: false },
        data: action.payload.transactions,
      };
    case Types.ADD_TRANSACTION_SUCCESS:
      return {
        ...state,
        error: null,
        loading: { ...state.loading, addLoading: false },
        data: [...state.data, action.payload.transaction],
      };
    case Types.DELETE_TRANSACTION_SUCCESS:
      const { transaction } = action.payload;

      return transaction ? {
        ...state,
        loading: { ...state.loading, deleteLoading: false },
        data: state.data.filter(item => item.id !== transaction.id),
      } : state;
    case Types.TRANSACTIONS_ERROR:
      return { ...state, loading: LOADING_DEFAULT, error: action.payload.error };
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
  deleteTransactionRequest: (transaction: TransactionInterface): TransactionsActionsInterface => ({
    type: Types.DELETE_TRANSACTION_REQUEST,
    payload: { transaction, transactions: [] },
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
  deleteTransactionSuccess: (transaction: TransactionInterface) => ({
    type: Types.DELETE_TRANSACTION_SUCCESS,
    payload: { transaction },
  }),
  transactionsError: (error: string) => ({
    type: Types.TRANSACTIONS_ERROR,
    payload: { error },
  }),
};
