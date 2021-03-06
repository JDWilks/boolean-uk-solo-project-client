import React, { useEffect, useState } from "react";
import HeaderLogIn from "../components/HeaderLogIn";
import AdminLogIn from "../components/AdminLogIn";
import NftCard from "../components/NftCard";

export default function AdminPage() {
  const [allNfts, setAllNfts] = useState([]);
  console.log("allNfts state", allNfts);
  const apiUrl = process.env.REACT_APP_API_URL;

  function getAllNfts() {
    fetch(`${apiUrl}/nftArt`)
      .then((res) => res.json())
      .then((allNfts) => setAllNfts(allNfts))
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  useEffect(() => {
    getAllNfts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
