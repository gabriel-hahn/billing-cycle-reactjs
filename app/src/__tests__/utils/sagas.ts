import { runSaga } from 'redux-saga';

export const runSagaTest = async (method, param, dispatched) => {
  await runSaga(
    {
      dispatch: action => dispatched.push(action),
    },
    () => method(param),
  ).toPromise();
};
