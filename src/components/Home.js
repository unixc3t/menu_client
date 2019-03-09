import React, {Component} from 'react';
import RecipeList from './RecipeList';
import {Divider} from 'semantic-ui-react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreator';

class Home extends Component {
  render() {
    return <div>
      <Divider/>
      <RecipeList {...this.props}/>
    </div>;
  }
}


const mapStateToProps = state => (
  {
    recipes: state.recipes.recipes
  });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
