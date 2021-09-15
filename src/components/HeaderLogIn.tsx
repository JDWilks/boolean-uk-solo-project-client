import React from "react";
import "../styles/headerStyles.css";

export default function HeaderLogIn() {
  return (
    <article className="header">
      <div className="loginHeader">
        <img
          className="logo"
          src="../../public/images/nfta.png"
          alt="NFTA Logo"
        />
        ;<h1 className="brandName">NFT AGGREGATOR</h1>
        <h3 className="login">Login</h3>
      </div>
    </article>
  );
}
