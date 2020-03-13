import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import Players from './components/Players';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

test("render header", ()=>{
  const { getByText } = render(<App />);
  const h1Element = getByText(/Womans World Cup Data/i);
  expect(h1Element).toBeInTheDocument();
})
