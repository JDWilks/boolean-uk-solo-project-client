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

  const apiUrl = process.env.REACT_APP_API_URL;

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

  // function createTrade() {
  //   fetch(`${apiUrl}/trade`, {
  //     // Adding method type
  //     method: "POST",
  //     // Adding headers to the request
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     // Adding body or contents to send (taken directly from zustand state)
  //     body: JSON.stringify({
  //       userId: currentUser.id,
  //       nftId: currentNft.nftUuId,
  //       purchasePrice: currentNft.price,
  //       type: "BUY",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("tradedata", data);
  //     })
  //     .catch((error) => console.error("FETCH ERROR:", error));
  // }

  function createTrade() {
    fetch(`${apiUrl}/trade`, {
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
        if (data.msg) {
          alert(
            "The NFT has already been sold - please try another - NFT's are uploaded weekly"
          );
        } else {
          console.log(data);
        }
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  function deleteOneNft() {
    fetch(`${apiUrl}/nftArt/${currentNft.id}`, {
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
            <h5 className="namefieldloginBuy__modal">First Name</h5>
            <input
              className="buyInput"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              value={firstName}
            />
            <h5 className="lastNamefieldloginBuy__modal">Last Name</h5>
            <input
              className="buyInput"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              value={lastName}
            />
            <h5 className="emailfieldloginBuy__modal">Email</h5>
            <input
              className="buyInput"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
            />
            <h5 className="walletAddressfieldloginBuy__modal">
              Your Etherium Address
            </h5>
            <input
              className="buyInput"
              onChange={(e) => setWallet(e.target.value)}
              type="text"
              value={wallet}
            />
            <p className="youAreSendingCopy">
              You are sending {currentNft.price} etherium to this etherium
              address:
            </p>
            <p className="etheriumAddress">
              0xc0ffee254729296a45a3885639AC7E10F9d54979
            </p>
            <p className="checkYourInfoCopy">
              Please check the above is correct....
            </p>
            <p className="checkYourInfoCopy2">
              ...this is the blockchain & you are your own bank!
            </p>

            {/* this just needs to not show unless you are logged in - don't care who */}
            <div className="purchaseCheckButton">
              {!currentUser.firstName ? (
                "Please login"
              ) : (
                <button className="purchaseNowButton" onClick={handleSubmit}>
                  Purchase Now
                </button>
              )}
            </div>
            {currentUser.email === "admin@admin.com" && (
              <div className="adminbuttons">
                <p>Hi Admin - your ammend tools are...</p>
                <button
                  className="createNftButton"
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

          {/* this needs to only show if a certain user is logged in */}
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
