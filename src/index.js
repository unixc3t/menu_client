import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import AddRecipe from './components/addRecipe';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import {Router, Route, Switch, Link} from 'react-router-dom';
import store, { history } from './store';

import * as serviceWorker from './serviceWorker';
import {Container, Header} from "semantic-ui-react";

const router = (
   <Provider store={store}>
    <Router history={history}>

      <Container>
        <Header as="h1" textAlign="center">
          <Link to="/">Menu Monkey</Link>
        </Header>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recipes/add" component={AddRecipe}/>
      </Switch>
      </Container>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
 document.getElementById('root')
);

serviceWorker.register();
