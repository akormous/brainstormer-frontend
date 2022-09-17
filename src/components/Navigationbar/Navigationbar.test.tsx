import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigationbar from './Navigationbar';

describe('<Navbar />', () => {
  test('it should mount', () => {
    render(<Navigationbar links={[]} />);
    
    const navbar = screen.getByTestId('Navbar');

    expect(navbar).toBeInTheDocument();
  });
});