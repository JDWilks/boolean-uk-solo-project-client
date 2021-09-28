import React from "react";
import "../styles/nftCardStyling.css";
import { useStore } from "../hooks/store";

//card component receives the props so can use them
export default function NftCards({
  nftid,
  name,
  price,
  description,
  nftUuId,
  url,
}) {
  const setModal = useStore((store) => store.setModal);
  const setNft = useStore((store) => store.setCurrentNft);
  console.log("nftid...", nftid);
  return (
    <article className="nfts">
      {/* on clicking a nft card that info is stored in zustand state to use  */}
      <div
        className="nftCard"
        onClick={() => {
          setNft({
            id: nftid,
            description,
            name,
            nftUuId,
            price,
            url,
          });
          setModal("NftModal");
        }}
      >
        <img className="nftImage" src={url} alt={name} />
        <h2 className="nftTitle">Title: {name}</h2>
        <h3 className="nftPrice">Price (Etherium): {price}</h3>
        <h3 className="nftPrice">Description : {description}</h3>
        <button
          onClick={() => {
            setModal("NftModal");
          }}
        >
          BUY
        </button>
      </div>
    </article>
  );
}

// image // dapp // price // nft name

// old code

// function getNfts() {
//   fetch("https://api.coinranking.com/v2/nfts", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "x-access-token":
//         "coinranking753331bb3ee5988cafd20ae6460f8e2d5a70be09b371bafb",
//       "Access-Control-Allow-Origin": "*",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       // const nftResults = JSON.parse(data.contents);
//       console.log("nftResults from fetch", data);
//     })
//     .catch((error) => console.error("FETCH ERROR:", error));
// }

// old <code>
//  {/* <button
//         onClick={() => {
//           getNfts();
//         }}
//       >
//         Clickckckck
//       </button> */}

// so i have a fetch here to get the info from this card ?

// fetch("http://localhost:3030/:id")
//   // const id = parseInt(req.params.id);
//   .then((res) => res.json())
//   .then((data) => {
//     const fetchResults = JSON.parse(data.contents);
//   })
//   .catch((error) => console.error("FETCH ERROR:", error));

// I can then use fetchResults.name (or any other key thats in the object to dynamically populate the modal that pops up - but how do i populate the info i need on the card ?  ?)
