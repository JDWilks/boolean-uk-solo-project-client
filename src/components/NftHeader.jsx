import React from "react";
import "../styles/nftSearchStyling.css";

export default function NftHeader() {
  return (
    <article className="nftSearch">
      <form>
        <div className="nftSearchForm">
          <div className="nftNameSearch">
            <label htmlFor="name">Search by name: </label>
            <input className="searchByname" type="text" name="name" />
          </div>
          <div className="nftDappListSearch">
            <label htmlFor="Price">List By Dapp: </label>
            <select name="Dapp" id="Dapp">
              <option value="cryptokitties">Cryptokitties</option>
              <option value="GodsUnchained">Gods Unchained</option>
              <option value="SomniumSpace">Somnium Space</option>
              <option value="Rarible">Rarible</option>
              <option value="MakersPlace">Makers Place</option>
              <option value="Decentraland">Decentraland</option>
              <option value="AxieInfinity">Axie Infinity</option>
              <option value="SuperRare">SuperRare</option>
              <option value="Sorare">Sorare</option>
              <option value="OdysseyMomentum">Odyssey Momentum</option>
              <option value="EthereumNameService">Ethereum Name Service</option>
              <option value="CryptovoxelsParcel">Cryptovoxels Parcel</option>
              <option value="Unstoppable Domains">UnstoppableDomains</option>
              <option value="TheSandbox">The Sandbox</option>
              <option value="BullrunBabes">Bullrun Babes</option>
              <option value="ArtBlocks">Art Blocks</option>
              <option value="ComethSpaceships">Cometh Spaceships</option>
              <option value="Autoglyphs">Autoglyphs</option>
            </select>
          </div>
          <div className="nftPriceListSearch">
            <label htmlFor="Price">List By Price: </label>
            <select name="Price" id="Price">
              <option className="dropDownFont" value="Acending">
                Acending
              </option>
              <option value="Decentding">Decentding</option>
            </select>
          </div>
          <div className="nftCreatedListSearch">
            <label htmlFor="Price">List By Created: </label>
            <select name="Created" id="Created">
              <option value="Acending">Acending</option>
              <option value="Decentding">Decentding</option>
            </select>
          </div>
        </div>
      </form>
    </article>
  );
}
