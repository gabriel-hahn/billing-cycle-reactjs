import { CreditType, DebitType } from '../enums/transactions';

export interface TransactionsRangeDateInterface {
  startDate: string;
  endDate: string;
}

export interface CashFlowInterface {
  [key: number]: number;
}

export interface TransactionsActionsInterface {
  type: string,
  payload: {
    category?: TransactionType,
    transactions: TransactionInterface[],
    transaction?: TransactionInterface,
    dateRange?: TransactionsRangeDateInterface,
    range?: TransactionsRangeDateInterface,
    total?: number,
    error?: string,
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
  date: string;
  type: CreditType | DebitType;
  category?: TransactionType;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TransactionLoading {
  allLoading: boolean,
  addLoading: boolean,
  editLoading: boolean,
  deleteLoading: boolean,
}

export interface TransactionStateInterface {
  transactionSelected?: TransactionInterface | null,
  currentDateRange?: TransactionsRangeDateInterface | null,
  totalAllTransactions: number | null,
  data: TransactionInterface[];
  loading: TransactionLoading;
  modalOpen: boolean;
  error: string | null;
}
