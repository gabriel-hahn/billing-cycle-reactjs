import { combineReducers } from 'redux';

import { reducer as toastr } from 'react-redux-toastr';
import users from './users';

const reducers = combineReducers({
  toastr,
  users,
});

export default reducers;
