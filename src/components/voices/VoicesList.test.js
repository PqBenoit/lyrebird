import React from 'react'
import { shallow } from 'enzyme';
import VoicesList from './VoicesList';

function setup(){
  const props = {
    results: [],
    count: 0
  };

  return shallow(<VoicesList {...props} />);
}

describe('VoicesList', () => {
  const wrapper = setup()

  it('renders the list container', () => {
    expect(wrapper.find('.voices-list').length).toBe(1);
  });
});
