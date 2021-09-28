import React from "react";

import "../styles/jdwFooter.css";

export default function JdwFooter() {
  return (
    <article className="jdwFooter">
      <div className="footerCopy">
        <p className="footer__copy infoOnArtist">Info on artist</p>
        <p className="footer__copy infoOnNfts">Info on NFT's</p>
        <div className="contactAndIcons">
          <p className="footer__copy contactCopy">Contact</p>
          <img
            className="socialIcons"
            src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"
            alt="instagram"
          />
          <img
            className="socialIcons"
            src="https://img.icons8.com/color/48/000000/facebook.png"
            alt="facebook"
          />
          <img
            className="socialIcons"
            src="https://img.icons8.com/color/48/000000/tiktok--v2.png"
            alt="tiktok"
          />
          <img
            className="socialIcons"
            src="https://img.icons8.com/color/48/000000/twitter--v2.png"
            alt="twitter"
          />
        </div>
      </div>
    </article>
  );
}
