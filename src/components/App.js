import Home from './Home';
import {Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';

import { Link } from "react-router-dom";
import {Header, Container} from 'semantic-ui-react';



class App extends Component{
  render(){
    return(
      <Container>
        <Header as="h1" textAlign="center">
          <Link to="/">Menu Monkey</Link>
        </Header>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Container>
    )
  }
};



export default App;