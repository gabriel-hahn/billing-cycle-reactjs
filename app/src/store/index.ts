import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares: SagaMiddleware[] = [];
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middlewares));
const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
