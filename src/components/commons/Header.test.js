import React from 'react'
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders the header', () => {
    expect(shallow(<Header />).find('.header').length).toBe(1);
  });
});
