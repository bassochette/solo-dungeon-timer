import React from 'react';
import { expect } from '@jest/globals';
import { render } from '../../testUtils';
import { Home } from '../../../pages';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
