import React from "react";
import "../styles/headerStyles.css";
import { useStore } from "../hooks/store";

export default function HeaderLogInMain() {
  const setModal = useStore((store) => store.setModal);
  const currentUser = useStore((store) => store.currentUser);
  return (
    <article className="header">
      <div className="loginHeader">
        <p className="jdw__collect">JDW - Collect</p>
        <p className="blockchain">NFT ArtWork the Ethereum blockchain </p>
      </div>
      <div>
        <p className="header__copy">
          JDW is Jonathon David Wilks. He makes a variety of art across a
          variety of media. Impasto on canvas, social commentary graphics.
        </p>
        <p className="header__copy">Only one person can own the original !</p>
      </div>
      <p
        onClick={() => {
          setModal("LoginModal");
        }}
        className="login"
      >
        Hello &nbsp;
        {!currentUser ? "Please login" : currentUser.firstName}
      </p>
    </article>
  );
}

// need to add something like this to display the login or current user name {!currentUser ? "Login" : currentUser.firstName}
