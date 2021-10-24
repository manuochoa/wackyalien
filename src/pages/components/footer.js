import React from "react";
import { Button, Stack } from "@mui/material";
import discord from "../../assets/images/discord-logo.png";
import twitter from "../../assets/images/twitter-logo.png";
import opensea from "../../assets/images/opensea-logo.png";

function Footer() {
  return (
      <div className={'footer-wrapper'}>
        <Stack
          className="footer subcontainer"
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack className={'copyright'}>
            <h5>Copyright © 2021 Wacky Alien League. All rights reserved.</h5>
          </Stack>
          <Stack className="footer-icons" direction={{ xs: "column", sm: "row" }}>
            <Button
              component={"a"}
              href="https://discord.gg/A8r5aTZBDJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={discord} alt="discord logo" className="icon-button" />
            </Button>
            <Button
              component={"a"}
              href="https://twitter.com/WALNFT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter logo" className="icon-button" />
            </Button>
            <Button
              component={"a"}
              href="https://opensea.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={opensea} alt="opensea logo" className="icon-button" />
            </Button>
          </Stack>
        </Stack>
      </div>
  );
}

export default Footer;
