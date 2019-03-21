import React from 'react';
import {Card} from 'semantic-ui-react'
import {browserHistory} from "../../store";

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
        onClick={()=>browserHistory.push(`view/${recipe._id}`)}
      />
    )
}

export default RecipeCard;

