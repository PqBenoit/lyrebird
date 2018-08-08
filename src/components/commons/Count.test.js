import React from 'react'
import { shallow } from 'enzyme';
import Count from './Count';

function setup(){
  const props = {
    count: 0,
    type: 'voices'
  };

  return shallow(<Count {...props} />);
}

describe('Count', () => {
  const wrapper = setup()

  it('renders the count', () => {
    expect(wrapper.find('.count').length).toBe(1);
  });
});
