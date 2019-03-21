import {RECIPE_FETCH_REQUESTED} from "../actions/actionType";

const initialState = {
  recipe: {}
};

export default function currRecipe(state = initialState, action) {
  switch (action.type) {
    case RECIPE_FETCH_REQUESTED:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

