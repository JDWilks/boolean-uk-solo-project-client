import React from "react";

import "../styles/modalStyling.css";
import { useStore } from "../hooks/store";

export default function DappsModal() {
  const setModal = useStore((store) => store.setModal);

  return (
    <form className="modal-bg">
      <div className="modal">
        <h1 className="dappLogoFromApi">Dapp Logo from api</h1>

        <h2 className="dappDescFromApi">Dapp Descrition from api</h2>

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
