import React from 'react';
import {Card} from 'semantic-ui-react'
function RecipeCard(props) {
    const {recipe} = props;
    return (
      <Card
        data-test='recipeCardComponent'
        centered={true}
        image={recipe.imageURL}
        header={recipe.name}
        meta='Description'
        description={recipe.description || 'No description'}
      />
    )
}

export default RecipeCard;

