export interface TransactionsRangeDateInterface {
  startDate: string;
  endDate: string;
}

export interface TransactionsActionsInterface {
  type: string,
  payload: {
    transactions: TransactionInterface[],
    transaction?: TransactionInterface,
    error?: string,
    range?: TransactionsRangeDateInterface,
  },
}

export enum TransactionType {
  DEBT = 'Debt',
  CREDIT = 'Credit',
}

export interface TransactionInterface {
  id?: number;
  user_id?: number;
  value: number;
  quantity: number;
  date: Date;
  date_repeat?: Date;
  type?: TransactionType;
  repeat: boolean;
  description?: string;
}

export interface TransactionStateInterface {
  data: TransactionInterface[];
  error: string | null;
  loading: boolean;
}
