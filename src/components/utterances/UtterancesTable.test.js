import React from 'react'
import { shallow } from 'enzyme';
import UtterancesTable from './UtterancesTable';

function setup(){
  const props = {
    results: [],
    count: 0,
    search: '',
    fetchVoiceName: function(){},
    onSearchChange: function(){}
  };

  return shallow(<UtterancesTable {...props} />);
}

describe('UtterancesTable', () => {
  const wrapper = setup()

  it('renders the utterances table', () => {
    expect(wrapper.find('.utterances-table').length).toBe(1);
  });
});
