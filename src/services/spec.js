import nock from 'nock';
import {app} from '../store';
import {fetchRecipe} from "./api";

describe('Api Server', function () {

  it('should fetch recipe', async function () {
    const data =
      {
        "name": "NNest",
        "ingredients": ["Brocoli", "Olive oil"],
        "directions": "Cook for 10 minuties",
        "createdAt": 1552199494749,
        "_id": "61cj0M9OuIIKAo8f"
      };

    let url = '/recipes?%24limit=1&_id=61cj0M9OuIIKAo8f';
    nock('http://localhost:3030')
      .get(url)
      .reply(200, {data});

    const recipe = await fetchRecipe(app, '61cj0M9OuIIKAo8f');
    expect(recipe).toEqual(data);
  });
});