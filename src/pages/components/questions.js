import React from "react";
import { Stack, Box, Grid } from "@mui/material";
import SingleQuestion from "./singleQuestion";
import data from "./data";

function Questions() {
  return (
    <Stack id="faq" className="main-container questions-container">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="subcontainer"
        spacing={5}
      >
        <h1>Frequently asked questions</h1>
        <Stack className="questions">
          {data.map((question, index) => {
            const { id } = question;
            return (
              <>
                <SingleQuestion key={index} {...question} />
                {index !== 4 && <div className="question-divider" />}
              </>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Questions;
