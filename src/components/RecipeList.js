import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import RecipeCard from './RecipeCard';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.props.recentRecipes();
  }

  render() {
    return (
      <div>recipeList
      <Card.Group itemsPerRow={5}>
        {this.props.recipes.map((recipe, index) => <RecipeCard {...this.props} key={index} recipe={recipe}/>)}
        {/*this.props.recipes.map((recipe, index) => <RecipeCard {...this.props} key={index} recipe={recipe}/>)*/}
      </Card.Group>
      </div>
    )
  }
}

export default  RecipeList;