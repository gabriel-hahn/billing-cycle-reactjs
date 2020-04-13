import { runSaga } from 'redux-saga';

export const runSagaTest = async (method, param, dispatched) => {
  await runSaga(
    {
      dispatch: action => dispatched.push(action),
    },
    () => method(param),
  ).toPromise();
};

export const runSagaTestState = async (method, param, dispatched, state) => {
  await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState: () => ({ ...state }),
    },
    () => method(param),
  ).toPromise();
};
