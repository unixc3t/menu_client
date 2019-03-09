import { createStore, applyMiddleware } from 'redux';
import {createBrowserHistory} from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/sagas';
import rootReducer from './reducers';
import superagent from 'superagent';
import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client'
import auth from '@feathersjs/authentication-client';
const browserHistory = createBrowserHistory();
const defaultStore = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  defaultStore,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const host = 'http://localhost:3030';
export const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(auth({store:window.localStorage}));

sagaMiddleware.run(mySaga,app);


export const history = syncHistoryWithStore(browserHistory,store);
export default store;
