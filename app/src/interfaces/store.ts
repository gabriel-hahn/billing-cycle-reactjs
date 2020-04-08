import { UserStateInterface } from './user';
import { TransactionStateInterface } from './transaction';

export interface StoreInterface {
  users: UserStateInterface,
  transactions: TransactionStateInterface,
}
