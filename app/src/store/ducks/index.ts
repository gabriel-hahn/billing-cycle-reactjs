import { combineReducers } from 'redux';

import { reducer as toastr } from 'react-redux-toastr';
import users from './users';
import incomes from './incomes';
import debts from './debts';

const reducers = combineReducers({
  toastr,
  users,
  incomes,
  debts,
});

export default reducers;
