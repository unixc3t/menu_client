import { createStore, applyMiddleware } from 'redux';
import {createBrowserHistory} from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import rootReducer from './reducers';
import superagent from 'superagent';
import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client'
import auth from '@feathersjs/authentication-client';
export const browserHistory = createBrowserHistory();
const defaultStore = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  defaultStore,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const host = 'http://localhost:3030';
const options={
  header: 'Authorization', // the default authorization header for REST
  prefix: '', // if set will add a prefix to the header value. for example if prefix was 'JWT' then the header would be 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOi...'
  path: '/authentication', // the server-side authentication service path
  jwtStrategy: 'jwt', // the name of the JWT authentication strategy
  entity: 'user', // the entity you are authenticating (ie. a users)
  service: 'users', // the service to look up the entity
  cookie: 'feathers-jwt', // the name of the cookie to parse the JWT from when cookies are enabled server side
  storageKey: 'feathers-jwt', // the key to store the accessToken in localstorage or AsyncStorage on React Native
  storage: window.localStorage // Passing a WebStorage-compatible object to enable automatic storage on the client.
};
export const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(auth(options));

sagaMiddleware.run(mySaga,app);


export const history = syncHistoryWithStore(browserHistory,store);
export default store;
