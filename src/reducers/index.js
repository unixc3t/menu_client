import { combineReducers } from 'redux';
import {
  routerReducer
} from "react-router-redux";
import recipes from './recipes';
import currRecipe from './currRecipe';

const rootReducer = combineReducers({
  recipes,
  currRecipe,
  routing:routerReducer
});

export default rootReducer;