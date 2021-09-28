import React, { useEffect, useState } from "react";
import "../styles/tradeTable.css";

function TradeTable() {
  const [allTrades, setAllTrades] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  console.log("allTrades >>>", allTrades);

  useEffect(() => {
    fetch("http://localhost:3030/trade")
      .then((res) => res.json())
      .then((trades) => setAllTrades(trades))
      .then((trades) => {
        allTrades.forEach((trade) => {
          setTotalPrice(totalPrice + trade.purchasePrice);
        });
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }, []);

  // need to map over the trades to add them below but only the td  fields

  let date = new Date().getDate();

  return (
    <div>
      <table className="table">
        <caption>
          who bought my nfts and how much etherium i have today: {Date()}
        </caption>
        <tr className="tradeTableFields">
          <th>Nft Name</th>
          <th>NFT ID</th>
          <th>Purchaser name</th>
          <th>Purchaser Wallet</th>
          <th>Purchaser Email</th>
          <th>Purchase Price</th>
        </tr>

        {allTrades.map((trade) => (
          <tr className="tradeTableFields">
            <td>{trade.nft.name}</td>
            <td>{trade.nftId}</td>
            <td>{trade.user.firstName}</td>
            <td>{trade.user.walledAddress}</td>
            <td>{trade.user.email}</td>
            <td>{trade.nft.price}</td>
          </tr>
        ))}

        <tr>
          <td className="totalBlanks"></td>
          <td className="totalBlanks"></td>
          <td className="totalBlanks"></td>
          <td className="totalBlanks"></td>
          <td className="totalBlanks"></td>
          <td className="totalPrice">Total: {totalPrice}</td>

          {/* for (let index = 0; index < [allTrades].length; index++) {
  let totalPrice = {...trade.nft.price + trade.nft.price}
} */}
        </tr>
      </table>
    </div>
  );
}

export default TradeTable;

// old code for

// <button
// className="tradeSelButton"
// onClick={() => {
//   setModal("SellModal");
// }}
// >
// Sell
// </button>
