import { TransactionInterface, TransactionType, TransactionsRangeDateInterface } from '../../interfaces/transaction';
import { CreditType, DebitType } from '../../enums/transactions';

export const TRANSACTIONS: TransactionInterface[] = [
  {
    id: 1,
    user_id: 1,
    date: new Date().toString(),
    value: 1500,
    type: CreditType.Income,
    description: 'Cartão de Crédito',
  },
  {
    id: 2,
    user_id: 2,
    date: new Date().toString(),
    value: 1500,
    type: DebitType.Education,
    description: 'Vendas',
  },
];

export const TRANSACTIONS_CREDIT: TransactionInterface[] = TRANSACTIONS.map(
  (credit: TransactionInterface) => ({ ...credit, category: TransactionType.CREDIT }),
);

export const TRANSACTIONS_DEBIT: TransactionInterface[] = TRANSACTIONS.map(
  (debit: TransactionInterface) => ({ ...debit, category: TransactionType.DEBIT }),
);

export const RANGE: TransactionsRangeDateInterface = {
  startDate: '2020-02-02',
  endDate: '2020-03-02',
};
