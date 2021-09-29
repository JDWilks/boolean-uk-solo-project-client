import React, { useEffect, useState } from "react";
import "../styles/tradeTable.css";
import { useStore } from "../hooks/store";
import { Link } from "react-router-dom";

function TradeTable() {
  const currentUser = useStore((store) => store.currentUser);

  const [allTrades, setAllTrades] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log("allTrades >>>", allTrades);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/trade`)
      .then((res) => res.json())
      .then((trades) => {
        let total = 0;
        trades.forEach((trade) => (total += trade.nft.price));
        setAllTrades(trades);
        setTotalPrice(total);
      })
      .catch((error) => console.error("FETCH ERROR:", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let date = new Date().getDate();

  return (
    <div className="totalTradeTable">
      {currentUser.email === "admin@admin.com" && (
        <table className="table">
          <caption className="whoBuyNfts">
            who bought my nfts and how much etherium i have today: {date}
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
            <td className="totalPrice">Total Etherium: {totalPrice}</td>

            {/* for (let index = 0; index < [allTrades].length; index++) {
  let totalPrice = {...trade.nft.price + trade.nft.price}
} */}
          </tr>
        </table>
      )}
      <Link to="/">
        <p>Back to Main Page</p>
      </Link>
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
