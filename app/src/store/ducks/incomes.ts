import {
  TransactionInterface,
  TransactionStateInterface,
  TransactionsActionsInterface,
} from '../../interfaces/transaction';

export const Types = {
  LOAD_INCOMES_REQUEST: '@incomes/LOAD_INCOMES_REQUEST',
  LOAD_INCOMES_SUCCESS: '@incomes/LOAD_INCOMES_SUCCESS',
  LOAD_INCOMES_ERROR: '@incomes/LOAD_INCOMES_ERROR',
};

const INITIAL_STATE: TransactionStateInterface = {
  data: [],
  error: null,
  loading: false,
};

export default function Incomes(state = INITIAL_STATE, action: TransactionsActionsInterface) {
  switch (action.type) {
    case Types.LOAD_INCOMES_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.LOAD_INCOMES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.transactions,
      };
    case Types.LOAD_INCOMES_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  incomesRequest: (startDate: string, endDate: string): TransactionsActionsInterface => ({
    type: Types.LOAD_INCOMES_REQUEST,
    payload: { range: { startDate, endDate }, transactions: [] },
  }),
  incomesSuccess: (transactions: TransactionInterface[]) => ({
    type: Types.LOAD_INCOMES_SUCCESS,
    payload: { transactions },
  }),
  incomesError: (error: string) => ({
    type: Types.LOAD_INCOMES_ERROR,
    payload: { error },
  }),
};
