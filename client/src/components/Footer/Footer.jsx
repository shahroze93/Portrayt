import "./Footer.css";
import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <p>©Portrayt - Shahroze Husain 2021</p>
      <button href="https://www.linkedin.com/in/shahrozehusain">
        Linkedin
      </button>
      <button onClick={props.themeToggler}>Dark</button>
    </footer>
  );
}

export default Footer;
