import React from 'react'
import { shallow } from 'enzyme';
import VoiceSelect from './VoiceSelect';

function setup(){
  const props = {
    voiceId: '',
    results: [],
    handleSelect: function(){},
    disabled: false
  };

  return shallow(<VoiceSelect {...props} />);
}

describe('VoiceSelect', () => {
  const wrapper = setup()

  it('renders the voice select', () => {
    expect(wrapper.find('#select-voice').length).toBe(1);
  });
});
