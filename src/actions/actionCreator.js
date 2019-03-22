import {
  RECENT_RECIPES_REQUESTED_ASYNC,
  ADD_RECIPE_ASYNC,
  RECIPE_FETCH_REQUESTED_ASYNC,
  SIGNUP_ASYNC,
  LOGIN_ASYNC
} from "./actionType";

export function recentRecipes() {
  return {
    type: RECENT_RECIPES_REQUESTED_ASYNC
  }
}

export function addRecipe(name, description, ingredients, imageURL) {
  return {
    type: ADD_RECIPE_ASYNC,
    name,
    description,
    ingredients,
    imageURL
  }
}

export function fetchRecipe(id) {
  return {
    type: RECIPE_FETCH_REQUESTED_ASYNC,
    id
  }
}

export function signup(email, password) {
  return ({
      type: SIGNUP_ASYNC,
      email,
      password
    }
  )
}

export function login(email,password){
  return({
    type:LOGIN_ASYNC,
    email,
    password
  })
}