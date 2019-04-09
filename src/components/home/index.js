import React, {Component} from 'react';
import RecipeList from '../recipeList';
import {Divider} from 'semantic-ui-react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreator';

class Home extends Component {
  constructor(props){
    super(props);
    console.log(this.props.user);
// Retrieve the token from wherever you've stored it.

  }
  render() {
    return <div>
      <Divider/>
      <RecipeList {...this.props}/>
    </div>;
  }
}


const mapStateToProps = state => (
  {
    recipes: state.recipes.recipes,
    user:state.checkLogin
  });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
