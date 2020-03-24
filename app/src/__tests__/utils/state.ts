import { StoreInterface } from '../../interfaces/store';

export const INITIAL_STATE: StoreInterface = {
  users: {
    data: null,
    error: null,
    loading: false,
  },
  debts: {
    data: [],
    error: null,
    loading: false,
  },
  incomes: {
    data: [],
    error: null,
    loading: false,
  },
};
