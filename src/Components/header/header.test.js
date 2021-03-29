/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Header from './index';

describe('Header Component', () => {
  it('should render without errors', () => {
    const component = shallow(<Header />);
    const wrapper = component.find('.App-header');
    expect(wrapper.length).toEqual(1);
  });

  it('should render a title', () => {
    const component = shallow(<Header />);
    const title = component.find('.App-header');
    expect(title.length).toEqual(1);
  });
});
