import React from 'react'
import { shallow } from 'enzyme';
import TextInput from './TextInput';

function setup(){
  const props = {
    text: '',
    handleChange: function(){},
    disabled: false
  };

  return shallow(<TextInput {...props} />);
}

describe('TextInput', () => {
  const wrapper = setup()

  it('renders the text input', () => {
    expect(wrapper.find('.form-text-input').length).toBe(1);
  });
});
