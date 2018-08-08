import React from 'react'
import { shallow } from 'enzyme';
import VoiceCard from './VoiceCard';

function setup(){
  const props = {
    result: {
      name: 'Female Realtime',
      name: 'Female Realtime voice'
    }
  };

  return shallow(<VoiceCard {...props} />);
}

describe('VoiceCard', () => {
  const wrapper = setup()

  it('renders the card', () => {
    expect(wrapper.find('.voice-card').length).toBe(1);
  });
});
