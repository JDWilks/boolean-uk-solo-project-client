import "../styles/nftModalStyling.css";
import { useStore } from "../hooks/store";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

export default function NftModal() {
  const setModal = useStore((store) => store.setModal);
  const currentNft = useStore((store) => store.currentNft);
  const currentUser = useStore((store) => store.currentUser);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    setFirstName(currentUser.firstName);
    setLastName(currentUser.lastName);
    setEmail(currentUser.email);
    setWallet(currentUser.walledAddress);
  }, []);

  // on submitting form fetch is triggered

  function handleSubmit() {
    // e.preventDefault();
    createTrade();
    setModal("");
    console.log("handle submit");
  }

  // fetch post function to create trade table

  function createTrade() {
    fetch("http://localhost:3030/trade", {
      // Adding method type
      method: "POST",
      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // Adding body or contents to send (taken directly from zustand state)
      body: JSON.stringify({
        userId: currentUser.id,
        nftId: currentNft.nftUuId,
        purchasePrice: currentNft.price,
        type: "BUY",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("tradedata", data);
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  function deleteOneNft() {
    fetch(`http://localhost:3030/nftArt/${currentNft.id}`, {
      method: "DELETE",
    })
      // Converting to JSON
      .then((response) => response.json())
      // Displaying results to console
      .then((DELETEDNft) => console.log("DELETEDNft >>>", DELETEDNft)) //save in state or whatever
      // .then((json) => console.log(json))
      .catch((error) => error);
  }

  return (
    <form className="modal-bg">
      <div className="modal">
        <div className="nftArtModal">
          <div className="artInfo">
            <img
              className="nftImageLarge"
              src={currentNft.url}
              alt={currentNft.name}
            />
            <h1 className="nftArtModalCopy">Title: {currentNft.name}</h1>
            <h1 className="nftArtModalCopy">
              Price(Etherium): {currentNft.price}
            </h1>
            <h1 className="nftArtModalCopy">
              Description: {currentNft.description}
            </h1>
          </div>
          <div className="buyInfo">
            {/* <form className="buyArtWorkForm" onSubmit={handleSubmit}> */}
            <h5 className="namefieldlogin__modal">First Name</h5>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              value={firstName}
            />
            <h5 className="lastNamefieldlogin__modal">Last Name</h5>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              value={lastName}
            />
            <h5 className="emailfieldlogin__modal">Email</h5>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
            />
            <h5 className="walletAddressfieldlogin__modal">
              Your Etherium Address
            </h5>
            <input
              onChange={(e) => setWallet(e.target.value)}
              type="text"
              value={wallet}
            />
            <p>You are sending {currentNft.price} to this etherium address:</p>
            <p>0xc0ffee254729296a45a3885639AC7E10F9d54979</p>
            <button onClick={handleSubmit}>clickme test</button>
            {/* <input type="submit" value="Purchase" /> */}
            {/* </form> */}
          </div>

          {currentUser && (
            <div className="adminbuttons">
              <button
                onClick={() => {
                  setModal("CreateNftModal");
                }}
              >
                create new nft
              </button>

              <button
                className="updateNftbutton"
                onClick={() => {
                  setModal("AmendNftModal");
                }}
              >
                update nft
              </button>
              <button
                onClick={() => {
                  deleteOneNft();
                }}
                className="deleteNftbutton"
              >
                delete nft
              </button>
            </div>
          )}
        </div>
      </div>

      <span
        className="modalClose"
        onClick={() => {
          setModal("");
        }}
      >
        ❎
      </span>
    </form>
  );
}
