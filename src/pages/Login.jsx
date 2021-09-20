import React from "react";
import DappsCards from "../components/DappsCards";
import HeaderLogIn from "../components/HeaderLogIn";
import NewsStream from "../components/NewsFeed";
import NftCard from "../components/NftCard";
import NftHeader from "../components/NftHeader";
import "../styles/allPages.css";

export default function Login() {
  const mockNfts = [
    {
      id: "ebcc4f6f49c4816a2e357a6457cd27a0623cfc369193deb86ea14981d27867cd",
      createdAt: 1616268873,
      registryId:
        "d7926fa0a6ccb4adf34f87a1f73683853f3e3128de0a839a1d3a95c3488dcb37",
      dappSlug: "makersplace",
      dappName: "MakersPlace",
      tokenId: "48289",
      name: "Metarift",
      image:
        "https://cdn.coinranking.com/nft/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289.jpeg",
      video:
        "https://cdn.coinranking.com/nft/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289.mp4",
      price: "489",
      priceInDollar: "905236.800000000022237275",
      auctionCreatedAt: 1616268874,
      externalUrl:
        "https://makersplace.com/product/token/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289",
      backgroundColor: null,
      coinrankingUrl:
        "https://coinranking.com/nft/ebcc4f6f49-makersplace-metarift",
    },
    {
      id: "b9c63619e64a75784ca6886f0072e65e7013ef577c9a628cf140b27901b8fbea",
      createdAt: 1630396040,
      registryId:
        "b457dc64ec3401460652f74ca8bac8dcd5215649e6c5902d5c1ab0d3852344c3",
      dappSlug: "art-blocks",
      dappName: "Art Blocks",
      tokenId: "13000584",
      name: "Ringers #584",
      image:
        "https://cdn.coinranking.com/nft/0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270/13000584.png",
      video: null,
      price: "185",
      priceInDollar: "601827.199999999979835",
      auctionCreatedAt: 1630396041,
      externalUrl: "https://www.artblocks.io/token/13000584",
      backgroundColor: null,
      coinrankingUrl:
        "https://coinranking.com/nft/b9c63619e6-art-blocks-ringers-584",
    },
    {
      id: "ebcc4f6f49c4816a2e357a6457cd27a0623cfc369193deb86ea14981d27867cd",
      createdAt: 1616268873,
      registryId:
        "d7926fa0a6ccb4adf34f87a1f73683853f3e3128de0a839a1d3a95c3488dcb37",
      dappSlug: "makersplace",
      dappName: "MakersPlace",
      tokenId: "48289",
      name: "Metarift",
      image:
        "https://cdn.coinranking.com/nft/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289.jpeg",
      video:
        "https://cdn.coinranking.com/nft/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289.mp4",
      price: "489",
      priceInDollar: "905236.800000000022237275",
      auctionCreatedAt: 1616268874,
      externalUrl:
        "https://makersplace.com/product/token/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289",
      backgroundColor: null,
      coinrankingUrl:
        "https://coinranking.com/nft/ebcc4f6f49-makersplace-metarift",
    },
    {
      id: "b9c63619e64a75784ca6886f0072e65e7013ef577c9a628cf140b27901b8fbea",
      createdAt: 1630396040,
      registryId:
        "b457dc64ec3401460652f74ca8bac8dcd5215649e6c5902d5c1ab0d3852344c3",
      dappSlug: "art-blocks",
      dappName: "Art Blocks",
      tokenId: "13000584",
      name: "Ringers #584",
      image:
        "https://cdn.coinranking.com/nft/0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270/13000584.png",
      video: null,
      price: "185",
      priceInDollar: "601827.199999999979835",
      auctionCreatedAt: 1630396041,
      externalUrl: "https://www.artblocks.io/token/13000584",
      backgroundColor: null,
      coinrankingUrl:
        "https://coinranking.com/nft/b9c63619e6-art-blocks-ringers-584",
    },
    {
      id: "ebcc4f6f49c4816a2e357a6457cd27a0623cfc369193deb86ea14981d27867cd",
      createdAt: 1616268873,
      registryId:
        "d7926fa0a6ccb4adf34f87a1f73683853f3e3128de0a839a1d3a95c3488dcb37",
      dappSlug: "makersplace",
      dappName: "MakersPlace",
      tokenId: "48289",
      name: "Metarift",
      image:
        "https://cdn.coinranking.com/nft/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289.jpeg",
      video:
        "https://cdn.coinranking.com/nft/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289.mp4",
      price: "489",
      priceInDollar: "905236.800000000022237275",
      auctionCreatedAt: 1616268874,
      externalUrl:
        "https://makersplace.com/product/token/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289",
      backgroundColor: null,
      coinrankingUrl:
        "https://coinranking.com/nft/ebcc4f6f49-makersplace-metarift",
    },
    {
      id: "b9c63619e64a75784ca6886f0072e65e7013ef577c9a628cf140b27901b8fbea",
      createdAt: 1630396040,
      registryId:
        "b457dc64ec3401460652f74ca8bac8dcd5215649e6c5902d5c1ab0d3852344c3",
      dappSlug: "art-blocks",
      dappName: "Art Blocks",
      tokenId: "13000584",
      name: "Ringers #584",
      image:
        "https://cdn.coinranking.com/nft/0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270/13000584.png",
      video: null,
      price: "185",
      priceInDollar: "601827.199999999979835",
      auctionCreatedAt: 1630396041,
      externalUrl: "https://www.artblocks.io/token/13000584",
      backgroundColor: null,
      coinrankingUrl:
        "https://coinranking.com/nft/b9c63619e6-art-blocks-ringers-584",
    },
    {
      id: "ebcc4f6f49c4816a2e357a6457cd27a0623cfc369193deb86ea14981d27867cd",
      createdAt: 1616268873,
      registryId:
        "d7926fa0a6ccb4adf34f87a1f73683853f3e3128de0a839a1d3a95c3488dcb37",
      dappSlug: "makersplace",
      dappName: "MakersPlace",
      tokenId: "48289",
      name: "Metarift",
      image:
        "https://cdn.coinranking.com/nft/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289.jpeg",
      video:
        "https://cdn.coinranking.com/nft/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289.mp4",
      price: "489",
      priceInDollar: "905236.800000000022237275",
      auctionCreatedAt: 1616268874,
      externalUrl:
        "https://makersplace.com/product/token/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289",
      backgroundColor: null,
      coinrankingUrl:
        "https://coinranking.com/nft/ebcc4f6f49-makersplace-metarift",
    },
    {
      id: "b9c63619e64a75784ca6886f0072e65e7013ef577c9a628cf140b27901b8fbea",
      createdAt: 1630396040,
      registryId:
        "b457dc64ec3401460652f74ca8bac8dcd5215649e6c5902d5c1ab0d3852344c3",
      dappSlug: "art-blocks",
      dappName: "Art Blocks",
      tokenId: "13000584",
      name: "Ringers #584",
      image:
        "https://cdn.coinranking.com/nft/0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270/13000584.png",
      video: null,
      price: "185",
      priceInDollar: "601827.199999999979835",
      auctionCreatedAt: 1630396041,
      externalUrl: "https://www.artblocks.io/token/13000584",
      backgroundColor: null,
      coinrankingUrl:
        "https://coinranking.com/nft/b9c63619e6-art-blocks-ringers-584",
    },
  ];

  return (
    <>
      <main className="mainPageStyling">
        <HeaderLogIn />
        <DappsCards />
        <NftHeader />

        <div className="nfts">
          {mockNfts.map((nft) => (
            <NftCard />
          ))}
        </div>

        <NewsStream />
      </main>
    </>
  );
}
