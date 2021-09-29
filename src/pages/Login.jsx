import React, { useEffect, useState } from "react";
import HeaderLogInMain from "../components/HeaderLogInMain";
import JdwFooter from "../components/JdwFooter";
import NftCard from "../components/NftCard";
import "../styles/allPages.css";

export default function Login() {
  const [allNfts, setAllNfts] = useState([]);
  console.log("allNfts state", allNfts);

  // get all nfts which stores them in state

  function getAllNfts() {
    fetch("http://localhost:3030/nftArt")
      .then((res) => res.json())
      .then((allNfts) => setAllNfts(allNfts))
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  // use effect runs once when loading the page so all nft's are loaded immediately

  useEffect(() => {
    getAllNfts();
  }, []);

  return (
    <>
      <main className="mainPageStyling">
        {/* header log in component */}
        <HeaderLogInMain />
        {/* mapping through allNfts (stored in state from above fetch) and for each nft in database render nftCard */}
        <div className="nfts">
          {allNfts.map((nft) => (
            // props are added to the card component
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
        <JdwFooter />
      </main>
    </>
  );
}

//       {/* need to add props in nft card   */}

// old code maybe usefull

// const [mockNftData, setMockNftData] = useState([]);

// // fetch here to backend to grab nft mock data that updates state (instead of mock data)

// function getNfts() {
//   fetch("http://localhost:3030/nftMockData", {
//     // Adding method type
//     method: "GET",
//   })
//     // Converting to JSON
//     .then((res) => res.json())
//     // Displaying results to console
//     .then((mockNftData) => setMockNftData()) //save in state or whatever is newUser
//     .catch((error) => console.error("FETCH ERROR:", error));
// }

// useEffect(() => {
//   getNfts();
// }, []);

// {/* <DappsCards />
//       <NftHeader /> */}

//       {/* <div className="nfts">
//         {mockNftData.map((nft) => (
//           <NftCard />
//         ))}
//       </div> */}

//       {/* need to add props in nft card   */}

/* {allNfts.forEach((nft) => {
            console.log("nft .... ", nft);
          })} */
