import React from 'react'
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  it('renders the error', () => {
    const props = {
      type: 'voices',
      show: true
    };

    const wrapper = shallow(<Error {...props} />);
    expect(wrapper.find('.error').length).toBe(1);
  });

  it('does not render the error', () => {
    const props = {
      type: 'voices',
      show: false
    };

    const wrapper = shallow(<Error {...props} />);
    expect(wrapper.find('.error').length).toBe(0);
  });
});
