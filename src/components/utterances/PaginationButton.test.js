import React from 'react'
import { shallow } from 'enzyme';
import PaginationButton from './PaginationButton';

function setup(){
  const props = {
    url: 'http://localhost:3000/',
    type: 'previous',
    loadUtterances: function(){
      console.log('hello there');
    }
  };

  return shallow(<PaginationButton {...props} />);
}

describe('PaginationButton', () => {
  const wrapper = setup()

  it('renders the button', () => {
    expect(wrapper.find('.pagination-button').length).toBe(1);
  });
});
