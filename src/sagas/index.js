import {put, all, takeEvery, call, fork} from 'redux-saga/effects';
import {
  getRecentRecipes,
  createRecipe,
  fetchRecipe,
  signup
} from '../services/api';
//import {recentRecipes} from "../actions/actionCreator";
import {
  RECENT_RECIPES_REQUESTED, RECENT_RECIPES_REQUESTED_ASYNC,
  ADD_RECIPE_ASYNC, RECIPE_FETCH_REQUESTED_ASYNC, RECIPE_FETCH_REQUESTED,
  SIGNUP_ASYNC
} from "../actions/actionType";

import {browserHistory} from "../store";

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
  yield call(createRecipe, feathersApp
    , action.name, action.description, action.ingredients, action.imageURL);
  yield browserHistory.push('');
}

export function* addRecipeSaga(feathersApp) {
  yield takeEvery(ADD_RECIPE_ASYNC, addRecipe, feathersApp)
}

export function* callFetchRecipe(feathersApp, action){
  const recipe = yield call(fetchRecipe,feathersApp,action.id);

  yield put({type: RECIPE_FETCH_REQUESTED, payload: {recipe:recipe[0]}});

}
export function* fetchRecipeSaga(feathersApp){
  yield takeEvery(RECIPE_FETCH_REQUESTED_ASYNC, callFetchRecipe, feathersApp)
}


export function* callSignUp(feathersApp, action) {
  const success = yield call(signup, feathersApp,action.username,action.password);
  console.log(success);
  yield browserHistory.push('login');
}

export function* signupSaga(feathersApp){
  yield takeEvery(SIGNUP_ASYNC,callSignUp,feathersApp)
}

export default function* root(feathersApp) {
  yield all([
    //call(helloSaga),
    fork(recentRecipesSaga, feathersApp),
    fork(addRecipeSaga, feathersApp),
    fork(fetchRecipeSaga, feathersApp),
    fork(signupSaga,feathersApp)
  ])
}