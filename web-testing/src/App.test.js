import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import expectExport from 'expect';

test('button names render', () => {
  const {getByText} = render(<App />);
    getByText(/steeerike/i);
    getByText(/^ball$/i);
    getByText(/foul\ ball/i);
    getByText(/hit!/i);
});

it('expect strike button to increase from 0 to 1', () => {
  const {getByText} = render(<App />);
  let strikeDisplay = getByText(/strikes:/i);
  let strikeButton = getByText(/steeerike/i);
  fireEvent.click(strikeButton)
  expect(strikeDisplay).toHaveTextContent('Strikes: 1');
})

it('expect strike and ball count to reset to 0 if strikes greater than 2', () => {
  const{getByText} = render(<App />);
  let strikeDisplay = getByText(/strikes:/i);
  let ballDisplay = getByText(/balls:/i);
  let strikeButton = getByText(/steeerike/i);
  fireEvent.click(strikeButton)
  fireEvent.click(strikeButton)
  fireEvent.click(strikeButton)
  expect(strikeDisplay).toHaveTextContent('Strikes: 0');
  expect(ballDisplay).toHaveTextContent('Balls: 0');
})

it('expect a hit input to reset strikes and balls to 0', () => {
  const{getByText} = render(<App />);
  let strikeDisplay = getByText(/strikes:/i);
  let ballDisplay = getByText(/balls:/i);
  let strikeButton = getByText(/steeerike/i);
  let hitButton = getByText(/hit!/i);
  fireEvent.click(strikeButton);
  fireEvent.click(hitButton);
  expect(strikeDisplay).toHaveTextContent('Strikes: 0');
  expect(ballDisplay).toHaveTextContent('Balls: 0');
})

it('expect that a foul ball with 2 strikes increment strike', () => {
  const{getByText} = render(<App />);
  let strikeDisplay = getByText(/strikes:/i);
  let foulButton = getByText(/foul\ ball/i);
  fireEvent.click(foulButton);
  fireEvent.click(foulButton);
  fireEvent.click(foulButton);
  expect(strikeDisplay).toHaveTextContent('Strikes: 2');
})

