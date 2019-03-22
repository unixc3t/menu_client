import { combineReducers } from 'redux';
import {
  routerReducer
} from "react-router-redux";
import recipes from './recipes';
import currRecipe from './currRecipe';
import checkLogin from './checkLogin';

const rootReducer = combineReducers({
  checkLogin,
  recipes,
  currRecipe,
  routing:routerReducer
});

export default rootReducer;