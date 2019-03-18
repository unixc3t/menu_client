import recipes from './recipes';
import * as types from '../actions/actionType';

describe('recipes List', () => {
  it('should return the initial state', () => {
    expect(recipes(undefined, {})).toEqual({
        recipes: []
      }
    )
  });

  it('should handle recipes list', function () {
    const data = {
      "name": "NNest",
      "ingredients": ["Brocoli", "Olive oil"],
      "directions": "Cook for 10 minuties",
      "createdAt": 1552199494749,
      "_id": "61cj0M9OuIIKAo8f"
    };

    expect(recipes({recipes: []},
      {type: types.RECENT_RECIPES_REQUESTED,
        payload: {recipes: [{...data}]}}))
      .toEqual({
      recipes: [{...data}]
    })
  })
});