import {
  TransactionInterface,
  TransactionStateInterface,
  TransactionsActionsInterface,
} from '../../interfaces/transaction';

export const Types = {
  DEBTS_REQUEST: '@debts/DEBTS_REQUEST',
  DEBTS_SUCCESS: '@debts/DEBTS_SUCCESS',
  DEBTS_ERROR: '@debts/DEBTS_ERROR',
};

const INITIAL_STATE: TransactionStateInterface = {
  data: [],
  error: null,
  loading: false,
};

export default function Debts(state = INITIAL_STATE, action: TransactionsActionsInterface) {
  switch (action.type) {
    case Types.DEBTS_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.DEBTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.transactions,
      };
    case Types.DEBTS_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  debtsRequest: (startDate: string, endDate: string): TransactionsActionsInterface => ({
    type: Types.DEBTS_REQUEST,
    payload: { range: { startDate, endDate }, transactions: [] },
  }),
  debtsSuccess: (transactions: TransactionInterface[]) => ({
    type: Types.DEBTS_SUCCESS,
    payload: { transactions },
  }),
  debtsError: (error: string) => ({
    type: Types.DEBTS_ERROR,
    payload: { error },
  }),
};
