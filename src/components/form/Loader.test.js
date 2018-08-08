import React from 'react'
import { shallow } from 'enzyme';
import Loader from './Loader';


describe('Loader', () => {
  it('renders the loader', () => {
    const props = {
      status: 'processing'
    }

    const wrapper = shallow(<Loader {...props} />);
    expect(wrapper.find('.loader').length).toBe(1);
  });

  it('renders the loader', () => {
    const props = {
      status: 'done'
    }

    const wrapper = shallow(<Loader {...props} />);
    expect(wrapper.find('.loader').length).toBe(1);
  });

  it('does not render the loader', () => {
    const props = {
      status: ''
    }

    const wrapper = shallow(<Loader {...props} />);
    expect(wrapper.find('.loader').length).toBe(0);
  });
});
