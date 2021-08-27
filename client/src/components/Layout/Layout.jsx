import React from "react";
import Nav from "../Nav/Nav";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      {props.children}
    </header>
  );
}
