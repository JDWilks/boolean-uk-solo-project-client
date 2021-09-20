import React, { useEffect } from "react";
import "../styles/modalStyling.css";
import { useStore } from "../hooks/store";

export default function DappsModal() {
  const setModal = useStore((store) => store.setModal);

  // need to make a fetch request (get) from the database
  // needs to have all the data from dapps model PLUS the relationship links in the social model
  // i can then dynamically put that info in the below modal

  function getDappResults() {
    fetch("http://localhost:3030/dapps")
      .then((res) => res.json())
      .then((data) => {
        const fetchResults = JSON.parse(data.contents);
        console.log("fetchResults", fetchResults);
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  useEffect(() => {
    getDappResults();
  }, []);

  return (
    <form className="modal-bg">
      <div className="modal">
        <h1 className="dappLogoFromApi">Dapp Logo from api</h1>
        <h2 className="dappDescFromApi">Dapp Descrition from api</h2>
        <h3 className="dappLinksFromApi">links - loads of them</h3>
        <h4 className="dappNumOfFromApi">Number of nfts: 349876</h4>
        <h5 className="dappBlockChainFromApi">BlockChain: Etherium</h5>
        <button
          onClick={() => {
            getDappResults();
          }}
        >
          Click me Dick Head
        </button>

        <span
          className="modalClose"
          onClick={() => {
            setModal("");
          }}
        >
          ❎
        </span>
      </div>
    </form>
  );
}
