import { combineReducers } from 'redux';

import { reducer as toastr } from 'react-redux-toastr';
import users from './users';
import transactions from './transactions';
import settings from './settings';

const reducers = combineReducers({
  toastr,
  users,
  settings,
  transactions,
});

export default reducers;
