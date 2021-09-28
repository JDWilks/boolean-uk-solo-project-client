import React from "react";
import { useStore } from "../hooks/store";
import "../styles/adminPageStyles.css";

function AdminLogIn() {
  const setModal = useStore((store) => store.setModal);

  // function getAllNfts() {
  //   fetch("http://localhost:3030/nftArt")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // const fetchResults = JSON.parse(data.contents);
  //       console.log("fetchResults", data);
  //     })
  //     .catch((error) => console.error("FETCH ERROR:", error));
  // }

  return (
    <>
      <div className="adminButtons">
        <button
          onClick={() => {
            setModal("CreateNftModal");
          }}
        >
          create new nft
        </button>
      </div>
    </>
  );
}

export default AdminLogIn;

// old code for log in form

// <div>
//       <label for="uname">
//         <b>Username</b>
//       </label>
//       <input type="text" placeholder="Enter Username" name="uname" required />

//       <label for="psw">
//         <b>Password</b>
//       </label>
//       <input type="password" placeholder="Enter Password" name="psw" required />

//       <button type="submit">Login</button>
//     </div>

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
