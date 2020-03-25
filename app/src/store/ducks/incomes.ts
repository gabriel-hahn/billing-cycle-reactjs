import {
  TransactionInterface,
  TransactionStateInterface,
  TransactionsActionsInterface,
} from '../../interfaces/transaction';

export const Types = {
  INCOMES_REQUEST: '@incomes/INCOMES_REQUEST',
  INCOMES_SUCCESS: '@incomes/INCOMES_SUCCESS',
  INCOMES_ERROR: '@incomes/INCOMES_ERROR',
};

const INITIAL_STATE: TransactionStateInterface = {
  data: [],
  error: null,
  loading: false,
};

export default function Incomes(state = INITIAL_STATE, action: TransactionsActionsInterface) {
  switch (action.type) {
    case Types.INCOMES_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.INCOMES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.transactions,
      };
    case Types.INCOMES_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  incomesRequest: (startDate: string, endDate: string): TransactionsActionsInterface => ({
    type: Types.INCOMES_REQUEST,
    payload: { range: { startDate, endDate }, transactions: [] },
  }),
  incomesSuccess: (transactions: TransactionInterface[]) => ({
    type: Types.INCOMES_SUCCESS,
    payload: { transactions },
  }),
  incomesError: (error: string) => ({
    type: Types.INCOMES_ERROR,
    payload: { error },
  }),
};
