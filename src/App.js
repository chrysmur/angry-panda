import "./App.css";
import React, { useState, useEffect } from "react";
import MainNav from "./components/navbar/navbar";
import Home from "./components/home/home"

import { GlobalStyles } from "./components/theme/globalStyles";
import { lightTheme, darkTheme } from "./components/theme/Theme";
import { ThemeProvider } from "styled-components";
import {Container} from 'react-bootstrap'


const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
     <GlobalStyles />
     <Container>
        <MainNav themeToggler={themeToggler} theme={theme==="light"? "night":"light"}/>
        <Home />
    </Container>  
   </ThemeProvider>
  );
};

export default App;
