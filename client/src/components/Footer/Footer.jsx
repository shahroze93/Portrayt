import "./Footer.css";
import React from "react";

function Footer(props) {
  const { themeToggler } = props;

  return (
    <footer className="footer">
      <p>©Portrayt - Shahroze Husain 2021</p>
      <a href="https://www.linkedin.com/in/shahrozehusain">
        Linkedin
      </a>
      <a href="https://github.com/shahroze93?tab=repositories">
        github
      </a>
      <button onClick={themeToggler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 26 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
