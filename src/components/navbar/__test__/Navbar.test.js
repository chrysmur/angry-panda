import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom'
import MainNav from  '../navbar'


test('renders Navbar without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainNav />, div)
});
