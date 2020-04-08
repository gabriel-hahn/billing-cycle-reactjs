import { UserStateInterface } from './user';
import { TransactionStateInterface } from './transaction';
import { SettingStateInterface } from './settings';

export interface StoreInterface {
  users: UserStateInterface,
  transactions: TransactionStateInterface,
  settings: SettingStateInterface,
}
