import { CreditType, DebitType } from '../enums/transactions';

export interface TransactionsRangeDateInterface {
  startDate: string;
  endDate: string;
}

export interface TransactionsActionsInterface {
  type: string,
  payload: {
    category?: TransactionType,
    transactions: TransactionInterface[],
    transaction?: TransactionInterface,
    error?: string,
    range?: TransactionsRangeDateInterface,
  },
}

export enum TransactionType {
  DEBIT = 'Debit',
  CREDIT = 'Credit',
}

export interface TransactionInterface {
  id?: number;
  user_id?: number | null;
  value?: number;
  quantity: number;
  date: string;
  date_repeat?: string;
  type: CreditType | DebitType;
  category?: TransactionType;
  repeat: boolean;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TransactionLoading {
  allLoading: false,
  addLoading: false,
  editLoading: false,
  deleteLoading: false,
}

export interface TransactionStateInterface {
  transactionSelected?: TransactionInterface | null,
  data: TransactionInterface[];
  loading: TransactionLoading;
  modalOpen: boolean;
  error: string | null;
}
