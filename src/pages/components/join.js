import React from "react";
import { Stack, Box, Grid } from "@mui/material";
import exampleImg from "../../assets/images/1.png";
import exampleImg2 from "../../assets/images/2.png";
import exampleImg3 from "../../assets/images/3.png";
import exampleImg4 from "../../assets/images/4.png";
import exampleImg5 from "../../assets/images/5.png";
import exampleImg6 from "../../assets/images/6.png";

function Join() {
  return (
    <Stack className="main-container join-container">
      <Stack
        id="join"
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="subcontainer"
        spacing={5}
      >
        <Grid
          container
          direction={{ xs: "column-reverse", md: "column-reverse", xl: "row" }}
          justifyContent={{ xs: "center", md: "center", xl: "space-between" }}
          alignItems="center"
        >
          <Stack
            className="join-img-container"
            justifyContent="center"
            direction="column"
            spacing={4}
          >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <img className="join-img" src={exampleImg} alt="placeholder" />
              <img className="join-img" src={exampleImg2} alt="placeholder" />
              <img className="join-img" src={exampleImg6} alt="placeholder" />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <img className="join-img" src={exampleImg3} alt="placeholder" />
              <img className="join-img" src={exampleImg4} alt="placeholder" />
              <img className="join-img" src={exampleImg5} alt="placeholder" />
            </Stack>
          </Stack>
          <Stack
            className="join-text-container"
            direction="row"
            justifyContent={{ xs: "center", xl: "flex-start" }}
            alignItems="flex-start"
          >
            <Stack
              className="join-details"
              justifyContent="center"
              direction="column"
            >
              <h1>Join the League</h1>
              <p>
                 Each Gonzorian collectable is{" "}
                <span>
                  {" "}
                  100% hand drawn, unique and randomly generated 
                  from 200+ possible attributes and traits
                </span>{" "}
                (background, skin, clothes, mouth, accessories, hats, eyes and more).
                What will your Wacky Alien look like?
              </p>
              <p>
              A collection of 9,733 unique Gonzorian NFTs, digital collectibles, 
                <span>
                  {" "}
                  stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
                </span>
                  This means they’re tamper-proof and last forever.
              </p>
              <p>
                <span>
                  {" "}
                  Once you have your Gonzorian you gain access to our galaxy, 
                  WAL’s Metaverse, where you can meet other Wacky Aliens, 
                  and enjoy perks and benefits spanning the digital world and the real one.
                </span>
              </p>
            </Stack>
          </Stack>
        </Grid>
        <Stack
          className="join-stats"
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-around"
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          <Box className="stats-box">
            <h1>UNIQUE</h1>
            <h3>
              9,733 identifiable Gonzorian tokens, every single piece is unique.
            </h3>
          </Box>
          <Box className="stats-box">
            <h1>FAIRNESS</h1>
            <h3>
              Fair launch, fair price. Buying a Gonzorian costs 0.07 ETH. No bonding curves.
            </h3>
          </Box>
          <Box className="stats-box">
            <h1>OWNERSHIP</h1>
            <h3>
              Full ownership and commercial usage rights as long as you keep
              your NFT.
            </h3>
          </Box>
          <Box className="stats-box">
            <h1>LEAGUE</h1>
            <h3>
              Unlock member-only benefits through roadmap activations and future
              phases.
            </h3>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Join;
