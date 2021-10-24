import React from "react";
import { Stack, Box } from "@mui/material";
import tenperc from "../../assets/images/10.png";
import twentyperc from "../../assets/images/20.png";
import thirtyperc from "../../assets/images/30.png";
import fiftyperc from "../../assets/images/50.png";
import seventyperc from "../../assets/images/70.png";
import eightyperc from "../../assets/images/80.png";
import hundredperc from "../../assets/images/100.png";
import plusperc from "../../assets/images/plus.png";

function Roadmap() {
  return (
    <Stack id="roadmap" direction="column" className="main-container roadmap">
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        className="subcontainer roadmap-subcontainer"
        spacing={7}
      >
        <Stack>
          <h1>Roadmap</h1>
        </Stack>
        <Stack
          className="roadmap-perc"
          direction="row"
          justifyContent={{ xs: "space-between", sm: "center" }}
          alignItems="center"
        >
          <Box className="roadmap-center-stats">
            <img className="perc-img" src={tenperc} alt="" />
          </Box>
          <Box className="roadmap-stats">
            <h3>RAFFEL</h3>

            <h4>
              3x1 ETH giveaway for the aliens minted in the first 10% of the
              collection.
            </h4>
          </Box>
        </Stack>
        <Stack
          className="roadmap-perc"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="roadmap-center-stats">
            <img className="perc-img" src={twentyperc} alt="" />
          </Box>
          <Box className="roadmap-stats">
            <h3>REWARD POOL</h3>

            <h4>100 Aliens will be deposited into the reward pool.</h4>
          </Box>
        </Stack>
        <Stack
          className="roadmap-perc"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="roadmap-center-stats">
            <img className="perc-img" src={thirtyperc} alt="" />
          </Box>
          <Box className="roadmap-stats">
            <h3>GIVEAWAY ROUND 1</h3>

            <h4>
              30x Wacky Aliens will be raffled and airdropped to lucky holders.
            </h4>
          </Box>
        </Stack>
        <Stack
          className="roadmap-perc"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="roadmap-center-stats">
            <img className="perc-img" src={fiftyperc} alt="" />
          </Box>
          <Box className="roadmap-stats">
            <h3>LEAGUE VAULT</h3>

            <h4>The community wallet gets funded with 5 ETH.</h4>

            <h4>
              5x1 ETH giveaway for the aliens minted in the first 50% of the
              collection.
            </h4>
          </Box>
        </Stack>
        <Stack
          className="roadmap-perc"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="roadmap-center-stats">
            <img className="perc-img" src={seventyperc} alt="" />
          </Box>
          <Box className="roadmap-stats">
            <h3>GIVEAWAY ROUND 2</h3>

            <h4>
              70x Wacky Aliens will be raffled and airdropped to lucky holders.
            </h4>
          </Box>
        </Stack>
        <Stack
          className="roadmap-perc"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="roadmap-center-stats">
            <img className="perc-img" src={eightyperc} alt="" />
          </Box>
          <Box className="roadmap-stats">
            <h3>MERCH</h3>

            <h4>
              Merch store gets unlocked, featuring limited edition tees, mugs,
              hoodies, and other goodies.
            </h4>
          </Box>
        </Stack>
        <Stack
          className="roadmap-perc"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="roadmap-center-stats">
            <img className="perc-img" src={hundredperc} alt="" />
          </Box>
          <Box className="roadmap-stats">
            <h3>COMMUNITY</h3>

            <h4>League vault gets funded with 10 ETH.</h4>
            <h4>Members vote on future development of the project.</h4>
            <h4>We get listed on RARITY.tools & NFTEXP.io</h4>
          </Box>
        </Stack>
        <Stack
          className="roadmap-perc"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="roadmap-center-stats">
            <img className="perc-img" src={plusperc} alt="" />
          </Box>
          <Box className="roadmap-stats">
            <h3>PHASE 2</h3>

            <h4>Initiating companion collection.</h4>
            <h4>Metaverse development and integrations.</h4>
            <h4> Real world meetings & parties.</h4>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Roadmap;
