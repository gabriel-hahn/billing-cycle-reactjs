import { StoreInterface } from '../../interfaces/store';
import { TransactionType } from '../../interfaces/transaction';

export const INITIAL_STATE: StoreInterface = {
  users: {
    data: null,
    error: null,
    loading: false,
  },
  transactions: {
    data: [],
    error: null,
    loading: false,
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
        date: new Date(),
        quantity: 1,
        repeat: false,
        type: TransactionType.DEBIT,
        value: 100.00,
      },
      {
        date: new Date(),
        quantity: 5,
        repeat: true,
        date_repeat: new Date(),
        type: TransactionType.CREDIT,
        value: 150.00,
      },
    ],
    error: null,
    loading: false,
  },
};
