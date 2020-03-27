export interface TransactionsRangeDateInterface {
  startDate: string;
  endDate: string;
}

export interface TransactionsActionsInterface {
  type: string,
  payload: {
    type?: TransactionType,
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
  user_id?: number;
  value: number;
  quantity: number;
  date: Date;
  date_repeat?: Date;
  type: TransactionType;
  repeat: boolean;
  description?: string;
}

export interface TransactionLoading {
  allLoading: false,
  addLoading: false,
  editLoading: false,
  deleteLoading: false,
}

export interface TransactionStateInterface {
  data: TransactionInterface[];
  loading: TransactionLoading;
  error: string | null;
}
