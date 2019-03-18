import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAtrr} from "../../../Utils";
import RecipeCard from './index';

describe('RecipeCard', function () {
  describe('Component Renders', function () {
    let wrapper;
    beforeEach(() => {
      const recipe={
        imageURL: 'http://www.example.com',
        name: 'headerName',
        description:'recipe description'
      };
      const props = {
        recipe
      };
      wrapper = shallow(<RecipeCard {...props} />);
    });

    it('Should renders without error', () => {
      const component = findByTestAtrr(wrapper, 'recipeCardComponent');
      const card = wrapper.find('Card');
      expect(component.length).toBe(1);
      expect(card.length).toBe(1);

    });

    it('Should render a desc', () => {
      const desc = wrapper.find("[description='recipe description']");
      expect(desc.length).toBe(1);
    });

  });
});
