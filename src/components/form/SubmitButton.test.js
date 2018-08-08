import React from 'react'
import { shallow } from 'enzyme';
import SubmitButton from './SubmitButton';

function setup(){
  const props = {
    disabled: false
  };

  return shallow(<SubmitButton {...props} />);
}

describe('SubmitButton', () => {
  const wrapper = setup()

  it('renders the submit button', () => {
    expect(wrapper.find('.submit-button').length).toBe(1);
  });
});
