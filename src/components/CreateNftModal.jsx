import React, { useState } from "react";
import "../styles/modalStyling.css";
import { useStore } from "../hooks/store";

export default function CreateNftModal() {
  const setModal = useStore((store) => store.setModal);
  const [artWorkName, setArtWorkName] = useState("");
  const [artWorkPrice, setArtWorkPrice] = useState("");
  const [artWorkDescription, setArtWorkDescription] = useState("");
  const [artWorkUrl, setArtWorkUrl] = useState("");
  const [artWorkUuId, setArtWorkUuId] = useState("");

  function createNft() {
    fetch("http://localhost:3030/nftArt", {
      // Adding method type
      method: "POST",
      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // Adding body or contents to send (firstName and lastName are taken directly from state)
      body: JSON.stringify({
        name: artWorkName,
        price: artWorkPrice,
        description: artWorkDescription,
        url: artWorkUrl,
        nftUuId: artWorkUuId,
      }),
    })
      // Converting to JSON
      .then((response) => response.json())
      // Displaying results to console
      .then((newNft) => console.log("newNft >>>", newNft)) //save in state or whatever is newUser
      // .then((json) => console.log(json))
      .catch((error) => console.log("Frontend error", error));
  }

  function handleSubmit(e) {
    e.preventDefault();
    createNft();
    setModal("");
  }

  return (
    <div className="modal-bg">
      <form className="modal" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>

        <input
          type="text"
          id="name"
          name="name"
          value={artWorkName}
          onChange={(e) => setArtWorkName(e.target.value)}
        />

        <label htmlFor="price">Price:</label>

        <input
          type="text"
          id="price"
          name="price"
          value={artWorkPrice}
          onChange={(e) => setArtWorkPrice(e.target.value)}
        />

        <label htmlFor="description">Decription:</label>

        <input
          type="text"
          id="description"
          name="description"
          value={artWorkDescription}
          onChange={(e) => setArtWorkDescription(e.target.value)}
        />

        <label htmlFor="url">Artwork Url:</label>

        <input
          type="text"
          id="url"
          name="url"
          value={artWorkUrl}
          onChange={(e) => setArtWorkUrl(e.target.value)}
        />

        <label htmlFor="nftUuId">NFT Unique Id:</label>

        <input
          type="text"
          id="nftUuId"
          name="nftUuId"
          value={artWorkUuId}
          onChange={(e) => setArtWorkUuId(e.target.value)}
        />

        <input type="submit" value="Submit" />

        <span
          className="modalClose"
          onClick={() => {
            setModal("");
          }}
        >
          ❎
        </span>
      </form>
    </div>
  );
}
