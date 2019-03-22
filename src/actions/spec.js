import * as actions from './actionCreator';
import * as types from './actionType';

describe('ActionCreator', function () {
  it('should create an action for addRepice', function () {
    const params = {
      name: 'rudy',
      description: 'coder monkey',
      ingredients: ['java', 'ruby'],
      imageURL: 'http://www.example.com/1.png'
    };

    const expectedAction = Object.assign({}, {type: types.ADD_RECIPE_ASYNC}, {...params});
    expect(actions.addRecipe(params.name
      , params.description
      , params.ingredients
      , params.imageURL)).toEqual(expectedAction);
  });

  it('should create an action for review recipe', function () {
    const expectedAction = Object.assign({},{type:types.RECIPE_FETCH_REQUESTED_ASYNC},{id:"testid"});
    expect(actions.fetchRecipe("testid")).toEqual(expectedAction);
  });

  it('should create an action for signup ', function () {
    const expectedAction = Object.assign({},{type:types.SIGNUP_ASYNC},{username:'test',password:'1234'})
    expect(actions.signup("test",'1234')).toEqual(expectedAction);
  });
});

