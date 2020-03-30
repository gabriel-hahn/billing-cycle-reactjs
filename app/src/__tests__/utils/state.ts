import { StoreInterface } from '../../interfaces/store';
import { TransactionType } from '../../interfaces/transaction';
import { CreditType, DebitType } from '../../enums/transactions';

export const INITIAL_STATE: StoreInterface = {
  users: {
    data: null,
    error: null,
    loading: false,
  },
  transactions: {
    data: [],
    modalOpen: false,
    error: null,
    loading: {
      addLoading: false,
      allLoading: false,
      deleteLoading: false,
      editLoading: false,
    },
  },
};

export const INITIAL_STATE_FILLED: StoreInterface = {
  users: {
    data: {
      id: 5,
      email: 'gabriel_hahn@hotmail',
    },
    error: null,
    loading: false,
  },
  transactions: {
    data: [
      {
        date: new Date().toString(),
        quantity: 1,
        repeat: false,
        type: DebitType.Educations,
        category: TransactionType.DEBIT,
        value: 100.00,
      },
      {
        date: new Date().toString(),
        quantity: 5,
        repeat: true,
        date_repeat: new Date().toString(),
        category: TransactionType.CREDIT,
        type: CreditType.Income,
        value: 150.00,
      },
    ],
    modalOpen: false,
    error: null,
    loading: {
      addLoading: false,
      allLoading: false,
      deleteLoading: false,
      editLoading: false,
    },
  },
};
