import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom'
import MainNav from  './components/navbar/navbar'
import Home from './components/home/home'

test('renders Navbar without crashing', () => {
  render(<App />);
  const div = document.createElement("div");
  ReactDOM.render(<MainNav />, div)
});


test('renders Home without crashing', () => {
  render(<App />);
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div)
});
