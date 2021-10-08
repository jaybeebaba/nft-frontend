import React from "react";
import discord from "../images/discord.png";
import "../styles/footer.css"

const Footer = () => {
  return (
    <>
      <div className="team">
        <div className="discord-section">
          <div>
            <p>Join the fun and become part of our community on Discord</p>
            <a className="btn" href="https://www.discord.gg">
              Discord <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <img src={discord} alt="" />
        </div>
      </div>

      <footer>
          <p>© 2021 ANGRY BOARS NFT — POWERED BY ANGRY LABS</p>

          <div>
          <a  href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a  href="https://www.discord.gg"> <i className="fab fa-discord"></i></a>
          <a  href="https://wwww.opense.io"><img src="https://global-uploads.webflow.com/6117f5b431e8c219e118dc3a/6140f7e5556ba79bafcf70e1_etherscan-logo-light-circle.png"/> </a>
          <a  href="#"><img src="https://global-uploads.webflow.com/6117f5b431e8c219e118dc3a/6140f9ebb0535daabaf37a5b_opensea%20(2).svg"/> </a>
         
 </div>
      </footer>
    </>
  );
};

export default Footer;
