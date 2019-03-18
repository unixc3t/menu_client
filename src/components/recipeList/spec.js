import React from 'react';
import {shallow} from 'enzyme';
import RecipeList from './index';

describe('ReciperList Component', function () {
  let wrapper;

  beforeEach(() => {
    const recipes = [
      {
        imageURL: 'http://www.example.com',
        name: 'headerName',
        description: 'recipe description'
      },
      {
        imageURL: 'http://www.example.com',
        name: 'headerName',
        description: 'recipe description'
      },
      {
        imageURL: 'http://www.example.com',
        name: 'headerName',
        description: 'recipe description'
      }
    ];
    const props = {
      recipes,
      recentRecipes:()=>{}
    };
    wrapper = shallow(<RecipeList {...props}/>)
  });

  it('should have 3 Card Component', function () {
      const cards = wrapper.find("RecipeCard");
      expect(cards.length).toBe(3);
  });
});
