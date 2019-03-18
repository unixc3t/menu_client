import {fetchRecentRecipes} from './index';
import nock from 'nock';
import SagaTester from 'redux-saga-tester';
import rootReducer from '../reducers';
import {getRecentRecipes} from '../services/api';
import {put, call} from 'redux-saga/effects';
import {RECENT_RECIPES_REQUESTED, RECENT_RECIPES_REQUESTED_ASYNC} from "../actions/actionType";
import {app} from '../store';


describe('test fetchrecentRecipes saga actions', function () {
  const gen = fetchRecentRecipes(app);
  it('call(getRecentRecipes, feathersApp)', () => {
    expect(gen.next().value).toEqual(call(getRecentRecipes, app));
  });

  it('test put', function () {
    expect(gen.next().value).toEqual(put({type: RECENT_RECIPES_REQUESTED, payload: {}}));
  });

  it('gen done', () => {
    expect(gen.next()).toEqual({done: true, value: undefined});
  });

  it('just work', async () => {


    const data = [
      {
        "name": "NNest",
        "ingredients": ["Brocoli", "Olive oil"],
        "directions": "Cook for 10 minuties",
        "createdAt": 1552199494749,
        "_id": "61cj0M9OuIIKAo8f"
      }
    ];
    nock('http://localhost:3030')
      .get('/recipes?%24sort%5BcreatedAt%5D=-1')
      .reply(200, {data});


    const initialState = {
      recipes: []
    };

    const sagaTester = new SagaTester({
      initialState,
      reducers: rootReducer
    });
    try {
      sagaTester.start(fetchRecentRecipes, app);
    } catch (e) {

    }


    sagaTester.dispatch({type: RECENT_RECIPES_REQUESTED_ASYNC});
    await sagaTester.waitFor(RECENT_RECIPES_REQUESTED);
    expect(sagaTester.getLatestCalledAction()).toEqual({
      type: RECENT_RECIPES_REQUESTED,
      payload: {
        recipes: data
      }
    });
  });
});

