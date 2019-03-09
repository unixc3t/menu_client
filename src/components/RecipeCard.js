import React from 'react';
import {Card} from 'semantic-ui-react'
function RecipeCard(props) {
    const {recipe} = props;
    return (
      <Card
        centered={true}
        header={recipe.name}
        meta='Description'
      />
    )
}

export default RecipeCard;

