import React from "react";
import { Stack, Box, Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import Countdown from "./helper/countdown";
import arrowWhite from "../../assets/images/arrow-white.png";
import arrowBlack from "../../assets/images/arrow-black.png";

function Landing() {
  return (
    <Stack id="home" className="main-container landing-container">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", sm: "flex-start" }}
        className="subcontainer"
        spacing={5}
      >
        <Stack
          direction="column"
          justifyContent={{ xs: "center", sm: "center" }}
          alignItems={{ xs: "center", md: "center", xl: "flex-start" }}
          className="mint-left"
        >
          <Box className="text-box">
            <h1>Welcome to the Wacky Alien League</h1>
            <p>
            Us Gonzorians are adventurous aliens native to Gonzora,
            a planet located 9,733 light-years away from yours.
            We have traveled far and wide in search of fun, community,
            and opportunities, eventually making our way to Earth.
            </p>
            <p>
            As co-founders of the Wacky Alien League (WAL) we’re happy
            to welcome you to our community! Once you have your Gonzorian
            you gain access to our galaxy, a place where wacky aliens from
            all across WAL’s Metaverse can gather.
            </p>
            <Countdown />
            <p>
              The pre-sale starts on October 28 @ 4:30PM UTC. For more details
              about our main sale, join us on Discord.
            </p>
          </Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent={{ xs: "center", sm: "flex-start" }}
            className="buttons-landing"
          >
            <Button
              component={HashLink}
              smooth
              to="/#comunity"
              className="connect-button"
              variant="contained"
              style={{ color: "#fff" }}
            >
              mint <img src={arrowWhite} alt="" />
            </Button>
            <Button
              component={"a"}
              href="https://discord.gg/A8r5aTZBDJ"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-button discord"
              variant="contained"
            >
              Discord <img src={arrowWhite} alt="" />
            </Button>
            <Button
              component={"a"}
              href="https://twitter.com/WALNFT"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-button twitter"
              variant="contained"
            >
              Twitter <img src={arrowBlack} alt="" />
            </Button>
          </Stack>
        </Stack>
        {/*<Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          className="mint-right"
        >
          <Box className="img-container">
             <img src={imageHolder} alt="NFT example" />
          </Box>
        </Stack>*/}
      </Stack>
    </Stack>
  );
}

export default Landing;
