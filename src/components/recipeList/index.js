import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import RecipeCard from '../recipeCard';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.props.recentRecipes();
  }

  render() {
    return (
      <div>
      <Card.Group itemsPerRow={5}>
        {this.props.recipes.map((recipe, index) => <RecipeCard {...this.props} key={index} recipe={recipe}/>)}
      </Card.Group>
      </div>
    )
  }
}

export default  RecipeList;