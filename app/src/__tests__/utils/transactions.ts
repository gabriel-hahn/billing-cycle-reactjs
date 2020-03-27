import { TransactionInterface, TransactionType, TransactionsRangeDateInterface } from '../../interfaces/transaction';

export const TRANSACTIONS: TransactionInterface[] = [
  {
    id: 1,
    user_id: 1,
    date: new Date().toString(),
    quantity: 1,
    repeat: false,
    value: 1500,
    type: TransactionType.CREDIT,
    description: 'Cartão de Crédito',
  },
  {
    id: 2,
    user_id: 2,
    date: new Date().toString(),
    quantity: 1,
    repeat: false,
    value: 1500,
    type: TransactionType.DEBIT,
    description: 'Vendas',
  },
];

export const TRANSACTIONS_CREDIT: TransactionInterface[] = TRANSACTIONS.map(
  (credit: TransactionInterface) => ({ ...credit, type: TransactionType.CREDIT }),
);

export const TRANSACTIONS_DEBIT: TransactionInterface[] = TRANSACTIONS.map(
  (debit: TransactionInterface) => ({ ...debit, type: TransactionType.DEBIT }),
);

export const RANGE: TransactionsRangeDateInterface = {
  startDate: '2020-02-02',
  endDate: '2020-03-02',
};
