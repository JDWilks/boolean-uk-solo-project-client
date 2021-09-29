import "../styles/nftModalStyling.css";
import { useStore } from "../hooks/store";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NftModal() {
  const setModal = useStore((store) => store.setModal);
  const currentNft = useStore((store) => store.currentNft);
  const currentUser = useStore((store) => store.currentUser);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  // ask Nathan about the below

  useEffect(() => {
    setFirstName(currentUser.firstName);
    setLastName(currentUser.lastName);
    setEmail(currentUser.email);
    setWallet(currentUser.walledAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // on submitting form fetch is triggered in the handlesubmit (work around now works on the button)

  function handleSubmit() {
    // e.preventDefault();
    createTrade();
    setModal("");
    console.log("handle submit");
    alert(
      "Congratulations, check your email for confirmation, the Etherium blockchain can take a while to process the payment"
    );
  }

  // fetch post function to create trade table which is called in the handle submit

  function createTrade() {
    fetch(`${apiUrl}/trade`, {
      // Adding method type
      method: "POST",
      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // Adding body or contents to send to backend (taken directly from zustand state)
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
            "Sorry we've checked the blockchain and this NFT has already been sold - please try another - this payment will not be processed - new NFT's are uploaded weekly"
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
          {/* displays left hand info on the nft - all info taken from state as we set it in the card and we take from zustand */}
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
          {/* displays all the users logged in info so the form is prepopulated with users info to buy */}
          <div className="buyInfo">
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

            {/* purchase button only shows when logged in otherwise prompted to login */}
            <div className="purchaseCheckButton">
              {!currentUser.firstName ? (
                "Please login to purchase NFT's"
              ) : (
                <button className="purchaseNowButton" onClick={handleSubmit}>
                  Purchase Now
                </button>
              )}
            </div>
            {/* admin buttons to create update delete only show when admin is logged in */}
            {/* create and update buttons trigger modals - should be components within this modal */}
            {/* delete triggers the delete function above */}
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

                <Link
                  onClick={() => {
                    setModal("");
                  }}
                  to="/trade"
                >
                  <p>Trades Table</p>
                </Link>
              </div>
            )}
          </div>
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
