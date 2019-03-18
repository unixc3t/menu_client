import React from 'react';
import App from './index';
import {findByTestAtrr} from "../../../Utils";
import {shallow} from 'enzyme';

const setUp = (props = {}) => {
  return shallow(<App {...props} />);
};

describe('App component', function () {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should have home component', function () {
    const wrapper = findByTestAtrr(component, 'homeComponent');
    expect(wrapper.length).toBe(1);
  });
});