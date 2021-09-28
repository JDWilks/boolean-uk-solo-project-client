import React, { useState } from "react";
import "../styles/modalStyling.css";
import { useStore } from "../hooks/store";
// import { useHistory } from "react-router-dom";

export default function LoginModal() {
  const setModal = useStore((store) => store.setModal);
  const setCurrentUser = useStore((store) => store.setCurrentUser);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [walledAddress, setwalledAddress] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  function handleSubmit(e) {
    e.preventDefault();
    createUser();
  }

  function createUser() {
    fetch(`${apiUrl}/user`, {
      // Adding method type
      method: "POST",
      // Adding headers to the request
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // Adding body or contents to send (firstName and lastName etc are taken directly from state)
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        walledAddress,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser({
          firstName,
          lastName,
          email,
          walledAddress,
          id: data.id,
        });
        setModal("");
        console.log("setCurrentUser is...", setCurrentUser);
        console.log("id is...", data.id);
        console.log("firstName is...", firstName);
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  return (
    <div className="modal-bg">
      <form className="modal" onSubmit={handleSubmit}>
        <h5 className="namefieldlogin__modal" value="firstName">
          First Name
        </h5>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />

        <h5 className="namefieldlogin__modal" value="firstName">
          Last Name
        </h5>
        <input type="text" onChange={(e) => setLastName(e.target.value)} />

        <h5 className="passwordfieldlogin__modal">Email</h5>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <h5 className="walletAddresslogin__modal">Wallet</h5>
        <input type="text" onChange={(e) => setwalledAddress(e.target.value)} />

        <input type="submit" value="Submit" />

        <span
          className="modalClose"
          onClick={() => {
            setModal("");
          }}
        >
          ❎
        </span>
      </form>
    </div>
  );
}

// function createUser() {
//   fetch("http://localhost:3030/user", {
//     // Adding method type
//     method: "POST",
//     // Adding body or contents to send (firstName and lastName are taken directly from state)
//     body: JSON.stringify({
//       firstName,
//       lastName,
//     }),
//     // Adding headers to the request
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
//     // Converting to JSON
//     .then((response) => response.json())
//     // Displaying results to console
//     .then((newUser) => setCurrentUser(newUser)) //save in state or whatever is newUser

//     .catch((error) => error);
// }
