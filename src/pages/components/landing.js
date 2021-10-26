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
            The Wacky Alien League (WAL) was created so that carbon-based 
            lifeforms, aliens, and travelers of all kinds can explore, 
            expand, and create a unique Galaxy. The Gonzorians, co-founders 
            of WAL, came from Gonzora, a planet 9,733 light years away from Earth. 
            Their goal is to develop WAL’s Metaverse for future collections in our community. 
            </p>
            <p>
            For the first time in the history of The League, we are opening up admission 
            to humans. Now you can not only join our community of explorers, but will also 
            have the power to shape and guide the creation of our world. Once you secure 
            your Gonzorian you will gain access to WAL’s Metaverse, a place to meet other 
            Wacky Aliens, and to enjoy perks and benefits spanning the digital world and the real one.
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
              to="/#mint-a-gonzorian"
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
