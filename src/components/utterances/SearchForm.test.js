import React from 'react'
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

function setup(){
  const props = {
    search: 'Hello',
    onSearchChange: function(){
      console.log('hello there');
    }
  };

  return shallow(<SearchForm {...props} />);
}

describe('SearchForm', () => {
  const wrapper = setup()

  it('renders the search form', () => {
    expect(wrapper.find('.utterance-search-input').length).toBe(1);
  });
});
