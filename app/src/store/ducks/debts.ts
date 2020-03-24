import {
  TransactionInterface,
  TransactionStateInterface,
  TransactionsActionsInterface,
} from '../../interfaces/transaction';

export const Types = {
  LOAD_DEBTS_REQUEST: '@debts/LOAD_DEBTS_REQUEST',
  LOAD_DEBTS_SUCCESS: '@debts/LOAD_DEBTS_SUCCESS',
  LOAD_DEBTS_ERROR: '@debts/LOAD_DEBTS_ERROR',
};

const INITIAL_STATE: TransactionStateInterface = {
  data: [],
  error: null,
  loading: false,
};

export default function Debts(state = INITIAL_STATE, action: TransactionsActionsInterface) {
  switch (action.type) {
    case Types.LOAD_DEBTS_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.LOAD_DEBTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.transactions,
      };
    case Types.LOAD_DEBTS_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  debtsRequest: (startDate: string, endDate: string): TransactionsActionsInterface => ({
    type: Types.LOAD_DEBTS_REQUEST,
    payload: { range: { startDate, endDate }, transactions: [] },
  }),
  debtsSuccess: (transactions: TransactionInterface[]) => ({
    type: Types.LOAD_DEBTS_SUCCESS,
    payload: { transactions },
  }),
  debtsError: (error: string) => ({
    type: Types.LOAD_DEBTS_ERROR,
    payload: { error },
  }),
};
