import React from "react";
import "../styles/headerStyles.css";

import { useStore } from "../hooks/store";

export default function HeaderLogIn() {
  const currentUser = useStore((store) => store.currentUser);
  const setModal = useStore((store) => store.setModal);

  return (
    <article className="header">
      <div className="loginHeader">
        <h3
          onClick={() => {
            setModal("LoginModal");
          }}
          className="Jdw__login"
        >
          Hello &nbsp;
          {!currentUser ? "Please login" : currentUser.firstName}
        </h3>
      </div>
      <div>
        <h1 className="adminHeaderCopy">
          ammend your site below or from the home page when logged in
        </h1>
      </div>
    </article>
  );
}

// need to add something like this to display the login or current user name {!currentUser ? "Login" : currentUser.firstName}
