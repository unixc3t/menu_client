import React, {Component} from 'react';
import {Header, Image, Segment, Container} from 'semantic-ui-react';
import {bindActionCreators} from "redux";
import * as actionCreators from '../../actions/actionCreator';
import {connect} from 'react-redux';
class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  render() {
    const recipe = this.props.currRecipe;
    if (!recipe.hasOwnProperty('name')) {
      return <p>Loading...</p>
    } else {
      return (
        <div>
          <Header as='h1' textAlign='center'>{recipe.name}</Header>
          <Image src={recipe.imageURL} size='medium' centered/>
          <Segment.Group>
            {recipe.ingredients.map((ing, i) => <Segment key={i}>{ing}</Segment>)}
          </Segment.Group>
          <Container text>
            {recipe.description.split('\n').map((d, i) => <p key={i}>{d}</p>)}
          </Container>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  currRecipe: state.currRecipe.recipe
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators,dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(SingleRecipe);
