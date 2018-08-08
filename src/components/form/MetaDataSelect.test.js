import React from 'react'
import { shallow } from 'enzyme';
import MetaDataSelect from './MetaDataSelect';

function setup(){
  const props = {
    default_value: '',
    values: [],
    handleSelect: function(){},
    disabled: false
  };

  return shallow(<MetaDataSelect {...props} />);
}

describe('MetaDataSelect', () => {
  const wrapper = setup()

  it('renders the metadata select', () => {
    expect(wrapper.find('.metadata-select').length).toBe(1);
  });
});
