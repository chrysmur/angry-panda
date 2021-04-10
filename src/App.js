import "./App.css";
import React, { useState, useEffect } from "react";
// import { ThemeProvider } from "styled-components";
import MainNav from "./components/navbar/navbar";
import Home from "./components/home/home"
// import { GlobalStyles } from "./components/theme/globalStyles";
// import { lightTheme, darkTheme } from "./components/theme/Theme";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    //<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
     // <GlobalStyles />
      <div className="App">
        {/* <button onClick={themeToggler}>
            {theme === "light" ? "dark" : "light"}
        </button> */}
        <MainNav />
        <Home />
      </div>
    // </ThemeProvider>
  );
};

export default App;
