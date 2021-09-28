import React, { useEffect, useState } from "react";
import HeaderLogIn from "../components/HeaderLogIn";
import AdminLogIn from "../components/AdminLogIn";
import NftCard from "../components/NftCard";

export default function AdminPage() {
  const [allNfts, setAllNfts] = useState([]);
  console.log("allNfts state", allNfts);

  function getAllNfts() {
    fetch("http://localhost:3030/nftArt")
      .then((res) => res.json())
      .then((allNfts) => setAllNfts(allNfts))
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  useEffect(() => {
    getAllNfts();
  }, []);
  return (
    <>
      <HeaderLogIn />
      <AdminLogIn />
      <div className="nfts">
        {allNfts.map((nft) => (
          <NftCard
            nftid={nft.id}
            name={nft.name}
            price={nft.price}
            description={nft.description}
            nftUuId={nft.nftUuId}
            url={nft.url}
          />
        ))}
      </div>
    </>
  );
}
