import * as actions from './actionCreator';
import * as types from './actionType';

describe('async actions', function () {
  it('should create an action to addRepice', function () {
    const params = {
      name: 'rudy',
      description: 'coder monkey',
      ingredients: ['java','ruby'],
      imageURL: 'http://www.example.com/1.png'
    };

    const expectedAction = Object.assign({}, {type: types.ADD_RECIPE_ASYNC}, {...params})
    expect(actions.addRecipe(params.name,params.description,params.ingredients,params.imageURL)).toEqual(expectedAction);
  });
});

