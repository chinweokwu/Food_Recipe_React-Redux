/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import findByTestAtrr from '../../../Utils/index';
import Header from './index';

const setUp = () => {
  const comps = shallow(<Header />);
  // console.log(comps.debug());
  return comps;
};

describe('Header Component', () => {
  let components;
  beforeEach(() => {
    components = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAtrr(components, 'appHeader');
    expect(wrapper.length).toEqual(1);
  });

  it('should render a title', () => {
    const title = findByTestAtrr(components, 'appTitle');
    expect(title.length).toEqual(1);
  });
});
