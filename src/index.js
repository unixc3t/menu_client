import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import store, { history } from './store';

import * as serviceWorker from './serviceWorker';

const router = (
   <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
 document.getElementById('root')
);

serviceWorker.register();
