import React, { useEffect, useState } from "react";
import "../styles/modalStyling.css";
import { useStore } from "../hooks/store";

export default function AmendNftModal() {
  const setModal = useStore((store) => store.setModal);
  const currentNft = useStore((store) => store.currentNft);
  const [artWorkName, setArtWorkName] = useState("");
  const [artWorkPrice, setArtWorkPrice] = useState("");
  const [artWorkDescription, setArtWorkDescription] = useState("");
  const [artWorkUrl, setArtWorkUrl] = useState("");
  // const [artWorkUuId, setArtWorkUuId] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log("currentNft...", currentNft);

  // So you can have a useEffect in your component that runs setArtWorkUrl(currentNft.url), then you can switch your input to using the artWorkUrl for its value

  useEffect(() => {
    setArtWorkUrl(currentNft.url);
  }, [currentNft.url]);

  function amendNft() {
    fetch(`${apiUrl}/nftArt/${currentNft.id}`, {
      // Adding method type
      method: "PATCH",
      // Adding body or contents to send (artWorkName etc are taken directly from state)
      body: JSON.stringify({
        name: artWorkName,
        price: artWorkPrice,
        description: artWorkDescription,
        url: artWorkUrl,
        // currentNft.UuId,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json",
      },
    })
      // Converting to JSON
      .then((response) => response.json())
      // Displaying results to console
      .then((amendedNft) => console.log("amendedNft >>>", amendedNft)) //save in state or whatever
      // .then((json) => console.log(json))
      .catch((error) => error);
  }

  function handleSubmit(e) {
    e.preventDefault();
    amendNft();
    setModal("");
  }

  return (
    <div className="modal-bg">
      <form className="modal" onSubmit={handleSubmit}>
        <label className="ammendModalCopy" for="name">
          Name:
        </label>

        <input
          type="text"
          id="name"
          name="name"
          value={artWorkName}
          onChange={(e) => setArtWorkName(e.target.value)}
        />

        <label className="ammendModalCopy" for="price">
          Price:
        </label>

        <input
          type="text"
          id="price"
          name="price"
          value={artWorkPrice}
          onChange={(e) => setArtWorkPrice(e.target.value)}
        />

        <label className="ammendModalCopy" for="description">
          Decription:
        </label>

        <input
          type="text"
          id="description"
          name="description"
          value={artWorkDescription}
          onChange={(e) => setArtWorkDescription(e.target.value)}
        />

        <label className="ammendModalCopy" for="url">
          Artwork Url:
        </label>

        <input
          type="text"
          id="url"
          name="url"
          value={artWorkUrl}
          onChange={(e) => setArtWorkUrl(e.target.value)}
        />

        {/* i can't change this image url now ?  */}

        <label className="ammendModalCopy" for="nftUuId">
          Unique ID:
        </label>
        <input
          type="text"
          id="nftUuId"
          name="nftUuId"
          value={currentNft.nftUuId}
        />

        {/* <label for="Id">ID:</label>
        <input type="text" id="Id" name="Id" value={currentNft.id} /> */}

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
