import {
  RECENT_RECIPES_REQUESTED_ASYNC,
  ADD_RECIPE_ASYNC,
  RECIPE_FETCH_REQUESTED_ASYNC
} from "./actionType";

export function recentRecipes(){
  return{
    type:RECENT_RECIPES_REQUESTED_ASYNC
  }
}

export function addRecipe(name, description, ingredients, imageURL){
  return{
    type:ADD_RECIPE_ASYNC,
    name,
    description,
    ingredients ,
    imageURL
  }
}

export function fetchRecipe(id){
  return{
    type:RECIPE_FETCH_REQUESTED_ASYNC,
    id
  }
}