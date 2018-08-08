import React from 'react';
import { shallow } from 'enzyme';
import { VoicesContainer } from './VoicesContainer';

const props = {
  voices: {
    results: [],
    count: 0
  }
}

describe('VoicesContainer', () => {
  it('renders voices container', () => {
    const wrapper = shallow(<VoicesContainer {...props}/>);
    expect(wrapper.find('.voices-container').length).toBe(1);
  });
});
