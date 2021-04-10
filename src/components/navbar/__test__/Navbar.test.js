import { render, screen } from '@testing-library/react';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import MainNav from  '../navbar'


test('Renders Navbar without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainNav />, div)
});

// test("Renders search button correctly", () =>{
//     const {searchid} = render(<Button label="Search"/>)
//     expect(searchid('button')).toHaveTextContent("Search")
// })