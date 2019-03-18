import {put, all, takeEvery, call} from 'redux-saga/effects';
import {getRecentRecipes,
        createRecipe
} from '../services/api';
import {createBrowserHistory} from 'history';
//import {recentRecipes} from "../actions/actionCreator";
import {
  RECENT_RECIPES_REQUESTED, RECENT_RECIPES_REQUESTED_ASYNC,
  ADD_RECIPE, ADD_RECIPE_ASYNC
} from "../actions/actionType";

const browserHistory = createBrowserHistory();

/*export function* helloSaga() {
  console.log('Hello Sagas!');
}*/


export function* fetchRecentRecipes(feathersApp) {
  const recipes = yield call(getRecentRecipes, feathersApp);
  yield put({type: RECENT_RECIPES_REQUESTED, payload: {recipes}});
}

export function* recentRecipesSaga(feathersApp) {
  yield takeEvery(RECENT_RECIPES_REQUESTED_ASYNC, fetchRecentRecipes, feathersApp)
}

export function* addRecipe(feathersApp, action) {
  //console.log(action);
  const recipe = yield call(createRecipe, feathersApp
    ,action.name, action.description, action.ingredients,action.imageURL);
  //console.log(recipe);
  yield browserHistory.push('/');
  //yield put({type: ADD_RECIPE, payload: {recipe}});
}

export function* addRecipeSaga(feathersApp) {
  yield takeEvery(ADD_RECIPE_ASYNC, addRecipe, feathersApp)
}

export default function* root(feathersApp) {
  yield all([
    //call(helloSaga),
    call(recentRecipesSaga, feathersApp),
    call(addRecipeSaga, feathersApp),
  ])
}