import React from 'react';
import { render, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from './App';
import Info from './components/info'


test('Component Renders', () => {
  render(<App />)
  render(<Info />)
})

test('Header Render', () => {
  const {getByText} = render(<App />);
  expect(getByText(/BaseBall Players/i))
})

test('dark mode enables', () => {
  const { getByTestId } = render(<App />);
  const toggle = getByTestId('darkButton')
  const body = document.getElementsByTagName('Body')
  fireEvent.click(toggle)
  expect(body[0].classList.value).toBe('dark-mode')
})
