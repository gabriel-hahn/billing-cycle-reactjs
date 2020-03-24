import { TransactionInterface, TransactionType, TransactionsRangeDateInterface } from '../../interfaces/transaction';

export const TRANSACTIONS: TransactionInterface[] = [
  {
    id: 1,
    user_id: 1,
    date: new Date(),
    quantity: 1,
    repeat: false,
    value: 1500,
    description: 'Cartão de Crédito',
  },
  {
    id: 2,
    user_id: 2,
    date: new Date(),
    quantity: 1,
    repeat: false,
    value: 1500,
    description: 'Viagens',
  },
];

export const TRANSACTIONS_CREDIT: TransactionInterface[] = TRANSACTIONS.map(
  (credit: TransactionInterface) => ({ ...credit, type: TransactionType.CREDIT }),
);

export const TRANSACTIONS_DEBIT: TransactionInterface[] = TRANSACTIONS.map(
  (debt: TransactionInterface) => ({ ...debt, type: TransactionType.DEBT }),
);

export const RANGE: TransactionsRangeDateInterface = {
  startDate: '2020-02-02',
  endDate: '2020-03-02',
};
