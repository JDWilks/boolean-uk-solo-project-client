import React from "react";
import "../styles/headerStyles.css";
import { useStore } from "../hooks/store";

export default function HeaderLogInMain() {
  const setModal = useStore((store) => store.setModal);
  const currentUser = useStore((store) => store.currentUser);
  const setCurrentUser = useStore((store) => store.setCurrentUser);

  return (
    <article className="header">
      <div className="loginHeader">
        <p className="jdw__collect">JDW - Collect</p>
        <p className="blockchain">NFT ArtWork on the Ethereum blockchain </p>
        <p className="header__copy">Only one person can own the original !</p>
        <p
          className="loginHeaderButton"
          onClick={() => {
            setModal("LoginModal");
          }}
        >
          Hello &nbsp;
          {!currentUser.firstName ? "Please login" : currentUser.firstName}
        </p>
        <p
          className="logoutheader"
          onClick={() => {
            setCurrentUser({});
          }}
        >
          {currentUser.firstName ? "LogOut" : ""}
        </p>
      </div>
    </article>
  );
}

// need to add something like this to display the login or current user name {!currentUser ? "Login" : currentUser.firstName}
