// configure the store when the app starts up (entry function)
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// Be sure to ONLY add redux-immutable-state-invariant in development!
const middleware = process.env.NODE_ENV !== 'production' ?
  [reduxImmutableStateInvariant()] :
  [];

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
