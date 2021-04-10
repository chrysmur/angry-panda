import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom'
import Home from '../home'


test('renders Home without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div)
});
