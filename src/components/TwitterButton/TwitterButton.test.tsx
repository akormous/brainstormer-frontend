import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TwitterButton from './TwitterButton';

describe('<TwitterButton />', () => {
  test('it should mount', () => {
    render(<TwitterButton label="Twitter Button" />);
    
    const twitterButton = screen.getByTestId('TwitterButton');

    expect(twitterButton).toBeInTheDocument();
  });
});