import SingleRecipe from './index';
import {setUp} from "../../../Utils";
import sinon from 'sinon';

describe('SimgleRecipe Component', function () {
  let component;
  let fetchRecipe;
  let props;
  beforeEach(() => {
    fetchRecipe= sinon.spy();
    props = {
      name: 'test component',
      imageURL: 'http://example.com/test.png',
      ingredients: ['ingredients', 'ingredients2'],
      description: `test1
      test2
      test3`
    };
    component = setUp(SingleRecipe, {
      currRecipe: {...props}, params: {recipeId: 'id'},
      fetchRecipe
    });
  });

  afterEach(()=>{
    sinon.restore();
  });
  it('should have Header ', function () {
    expect(component.find('Header').length).toEqual(1);
  });

  it('should have Image', function () {
    expect(component.find('Image').length).toEqual(1);
  });

  it('should have Segment', function () {
    expect(component.find('Segment').length).toEqual(2);
  });

  it('should have P Tag', function () {
    expect(component.find('p').length).toEqual(3);
  });

  it('should call fetchRecipe function in the constructor', function () {
    expect(fetchRecipe.callCount).toEqual(1);
    expect(fetchRecipe.calledWith('id')).toBe(true);
  });
});