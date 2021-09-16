import React from "react";
import "../styles/dappsStyling.css";
import cryptokitties from "../assets/cryptokitties.png";
import godsunchained from "../assets/godsunchained.png";
import somniumSpace from "../assets/somniumspace.png";
import rarible from "../assets/Rarible.png";
import makersPlace from "../assets/makersplace.png";
import decentraland from "../assets/decentraland.png";
import axieInfinity from "../assets/axieInfinity.png";
import superRare from "../assets/SuperRare_logo_black.png";
import sorare from "../assets/sorare-logo-black.png";
import odyssey from "../assets/odyssey.png";
import ens from "../assets/ens.png";
import cryptovoxels from "../assets/Cryptovoxels.png";
import unstoppableDomains from "../assets/unstoppableDomains.png";
import sandboxLogo from "../assets/SandboxLogo.png";
import cometh from "../assets/cometh.png";
import autoglyphs from "../assets/autoglyphs.jpeg";
import { useStore } from "../hooks/store";

export default function DappsCards() {
  const setModal = useStore((store) => store.setModal);
  return (
    <article className="dapps">
      <h1 className="dappsheader">Dapps List</h1>
      <div
        className="dappsCard"
        onClick={() => {
          setModal("DappsModal");
        }}
      >
        <img
          className="dappLogo"
          src={cryptokitties}
          alt="CryptoKitties logo"
        />
      </div>
      <div className="dappsCard">
        <img
          className="dappLogo"
          src={godsunchained}
          alt="Gods Unchained logo"
        />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={somniumSpace} alt="Somnium Space" />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={rarible} alt="Rarible" />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={makersPlace} alt="Makers Place" />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={decentraland} alt="Decentraland" />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={axieInfinity} alt="Axie Infinity" />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={superRare} alt="Super Rare" />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={sorare} alt="So Rare" />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={odyssey} alt="Odyssey Momentum" />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={ens} alt="Etherium Name Service" />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={cryptovoxels} alt="Cryptovoxels" />
      </div>
      <div className="dappsCard">
        <img
          className="dappLogo"
          src={unstoppableDomains}
          alt="Unstoppable Domains"
        />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={sandboxLogo} alt="Sandbox" />
      </div>
      <div className="dappsCard">
        {/* <img className="dappLogo" src={bullrunbabes} alt="Bull Run Babes" /> */}
        <p className="bullRunBabesLogoText">Bull Run Babes</p>
      </div>
      <div className="dappsCard">
        {/* <img className="dappLogo" src={artblocks} alt="Art Blocks" /> */}
        <p className="artBlockLogoText">Art Block</p>
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={cometh} alt="Cometh Spaceships" />
      </div>
      <div className="dappsCard">
        <img className="dappLogo" src={autoglyphs} alt="Autoglyphs" />
      </div>
    </article>
  );
}
