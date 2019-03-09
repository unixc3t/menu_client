import {put,all, takeEvery,call} from 'redux-saga/effects';
import {getRecentRecipes} from '../services/api';
//import {createBrowserHistory} from 'history';
//import {recentRecipes} from "../actions/actionCreator";
import {RECENT_RECIPES_REQUESTED,RECENT_RECIPES_REQUESTED_ASYNC} from "../actions/actionType";

//const browserHistory = createBrowserHistory();

/*export function* helloSaga() {
  console.log('Hello Sagas!');
}*/


function* fetchRecentRecipes(feathersApp){
  const recipes = yield call(getRecentRecipes,feathersApp);
  yield put({type:RECENT_RECIPES_REQUESTED,payload:{recipes}});
}

export function* recentRecipesSaga(feathersApp){
  yield takeEvery(RECENT_RECIPES_REQUESTED_ASYNC, fetchRecentRecipes,feathersApp)
}

export default function* root(feathersApp){
  yield all([
    //call(helloSaga),
    call(recentRecipesSaga,feathersApp),
  ])
}