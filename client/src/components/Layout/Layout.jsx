import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../DarkMode/GlobalStyles";
import { lightTheme, darkTheme } from "../DarkMode/Themes";
import { useState } from "react";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <header>
          <Nav currentUser={currentUser} handleLogout={handleLogout} />
          {props.children}
        </header>
        <Footer themeToggler={themeToggler} />
      </>
    </ThemeProvider>
  );
}
