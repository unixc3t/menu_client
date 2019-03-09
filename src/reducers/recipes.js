import {RECENT_RECIPES_REQUESTED} from "../actions/actionType";

const initialState = {
  recipes:[]
};
function recipes(state=initialState,action){
  switch(action.type){
    case RECENT_RECIPES_REQUESTED:
      return   {...state,...action.payload};

    default:
      return state;
  }
}

export default recipes;
