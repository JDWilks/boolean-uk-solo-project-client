import React, { useEffect } from "react";
import "../styles/modalStyling.css";
import { useStore } from "../hooks/store";

export default function NftModal() {
  const setModal = useStore((store) => store.setModal);

  return (
    <form className="modal-bg">
      <div className="modal">
        <h1 className="nftModalCopy">nft info 1 from api</h1>
        <h1 className="nftModalCopy">nft info 2 from api</h1>
        <h1 className="nftModalCopy">nft info 3 from api</h1>
        <h1 className="nftModalCopy">nft info 4 from api</h1>
        <h1 className="nftModalCopy">nft info 5 from api</h1>
        <button>Buy</button>
        <button>sell</button>

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
