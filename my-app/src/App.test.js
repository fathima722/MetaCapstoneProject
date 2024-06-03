import { render,screen } from '@testing-library/react';
import App from './App';
import React from 'react';


test('renders learn react link', () => {
    render(<App />);

    // Get elements by their test IDs
    const headerElement = screen.getByTestId('header');
    const navbarElement = screen.getByTestId('navbar');
    const footerElement = screen.getByTestId('footer');
  
    // Assert that the Header, Navbar, and Footer components are rendered
    expect(headerElement).toBeInTheDocument();
    expect(navbarElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
});
