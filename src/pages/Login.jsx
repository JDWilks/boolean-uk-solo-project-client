import React from "react";
import DappsCards from "../components/DappsCards";
import HeaderLogIn from "../components/HeaderLogIn";
import NewsStream from "../components/NewsFeed";
import NftCards from "../components/NftCards";
import "../styles/allPages.css";

export default function Login() {
  return (
    <>
      <main className="mainPageStyling">
        <HeaderLogIn />
        <DappsCards />
        <NftCards />
        <NewsStream />
      </main>
    </>
  );
}
