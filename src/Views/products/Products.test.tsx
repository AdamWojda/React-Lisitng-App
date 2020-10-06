import React from 'react';
import { render } from 'Tests';
import { Products } from './Products';

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByText } = render(<Products />);

    expect(getByText('Products page')).toBeInTheDocument();
  });
});
