import { combineReducers } from 'redux';

import { reducer as toastr } from 'react-redux-toastr';
import users from './users';
import transactions from './transactions';

const reducers = combineReducers({
  toastr,
  users,
  transactions,
});

export default reducers;
