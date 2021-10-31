import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button, Stack } from "@mui/material";
import discord from "../../assets/images/discord-logo.png";
import twitter from "../../assets/images/twitter-logo.png";
import opensea from "../../assets/images/opensea-logo.png";
import alienLogo from "../../assets/images/alien-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header(props) {
  const { setUserAddress, userAddress } = props;
  const [isOpen, setIsOpen] = useState(false);

  const connectWallet = async () => {
    try {
      console.log("hola");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setUserAddress(accounts[0]);

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      if (chainId !== "0x1") {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        });
      }
      console.log(chainId);

      window.ethereum.on("accountsChanged", function (accounts) {
        setUserAddress(accounts[0]);
      });

      window.ethereum.on("chainChanged", (_chainId) =>
        window.location.reload()
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"header-wrapper"}>
      <Stack
        className="header subcontainer"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack className="header-title" direction="row">
          {isOpen ? (
            <CloseIcon
              className="header-icon open"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <MenuIcon
              className="header-icon close"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          <Link to="/">
            <Stack alignItems="center" direction="row" className="logo-section">
              <img src={alienLogo} className="alien-logo" alt="" />
              <h1> Wacky Alien League </h1>
            </Stack>
          </Link>
        </Stack>
        <Stack
          className={isOpen ? "header-menu menu-active" : "header-menu"}
          justifyContent="center"
          alignItems="center"
        >
          <HashLink onClick={() => setIsOpen(!isOpen)} smooth to="/#mint-a-gonzorian">
            Mint
          </HashLink>
          <HashLink onClick={() => setIsOpen(!isOpen)} smooth to="/#join">
            Features
          </HashLink>
          <HashLink onClick={() => setIsOpen(!isOpen)} smooth to="/#comunity">
            Ownership Perks
          </HashLink>
          <HashLink onClick={() => setIsOpen(!isOpen)} smooth to="/#roadmap">
            Roadmap
          </HashLink>
          <HashLink onClick={() => setIsOpen(!isOpen)} smooth to="/#team">
            Team
          </HashLink>
          {/* <HashLink smooth to="#faq">
        FAQ
      </HashLink> */}

          <Button
            onClick={connectWallet}
            className="connect-button"
            variant="contained"
          >
            {!userAddress
              ? "Connect"
              : `${userAddress.slice(0, 5)}...${userAddress.slice(-5)}`}
          </Button>
          <div className="social-media">
            <Stack direction="row">
              <Button
                className={"button"}
                component={"a"}
                href="https://discord.gg/A8r5aTZBDJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={discord} alt="discord logo" className="icon-button" />
              </Button>
              <Button
                className={"button"}
                component={"a"}
                href="https://twitter.com/WALNFT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="twitter logo" className="icon-button" />
              </Button>
              <Button
                className={"button"}
                component={"a"}
                href="https://opensea.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={opensea} alt="opensea logo" className="icon-button" />
              </Button>
            </Stack>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}

export default Header;
