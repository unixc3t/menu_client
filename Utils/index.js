//import PropTypes from 'prop-types';
import React from 'react';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';

export const findByTestAtrr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};

export const setUp = (Component, props={}) => {
  return shallow(<Component {...props} />);
};

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
};