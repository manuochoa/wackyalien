import React from "react";
import { Stack } from "@mui/material";
import previewImage1 from "../../assets/images/1.png";
import previewImage2 from "../../assets/images/2.png";
import previewImage3 from "../../assets/images/3.png";
import previewImage4 from "../../assets/images/4.png";
import previewImage5 from "../../assets/images/5.png";

function Team() {
  return (
    <Stack id="team" className="main-container  team-container">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="subcontainer team"
        spacing={5}
      >
        <h1>Team</h1>
        <Stack
          direction={{ xs: "column", md: "column", xl: "row" }}
          alignItems="space-between"
          spacing={{ xs: 0, md: 0, xl: 2 }}
          className={'card-container'}
        >
          <Stack className="team-member-card">
            <img
              className="team-image"
              src={previewImage1}
              alt="preview-team"
            />
            <h2 className="team Name">Qhox</h2>
            <h4 className="team-title">Artist</h4>
            <p className="team-description">
              Long time comics illustrator, first time nftier.
            </p>
          </Stack>
          <Stack className="team-member-card">
            <img
              className="team-image"
              src={previewImage2}
              alt="preview-team"
            />
            <h2 className="team Name">Bozoin</h2>
            <h4 className="team-title">Dev</h4>
            <p className="team-description">
              Software engineer with a passion for blockchain.
            </p>
          </Stack>
          <Stack className="team-member-card">
            <img
              className="team-image"
              src={previewImage3}
              alt="preview-team"
            />
            <h2 className="team Name">Grod</h2>
            <h4 className="team-title">Community</h4>
            <p className="team-description">
              Social marketing geek with extra love for everyone.
            </p>
          </Stack>
          <Stack className="team-member-card">
            <img
              className="team-image"
              src={previewImage4}
              alt="preview-team"
            />
            <h2 className="team Name">Reeco</h2>
            <h4 className="team-title">Front-end</h4>
            <p className="team-description">
              UX magician who can turn anything to pleasing UI.
            </p>
          </Stack>
          <Stack className="team-member-card">
            <img
              className="team-image"
              src={previewImage5}
              alt="preview-team"
            />
            <h2 className="team Name">Phutik</h2>
            <h4 className="team-title">Project Lead</h4>
            <p className="team-description">
              Art lover, crypto investor and NFT enthusiast.
            </p>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Team;
