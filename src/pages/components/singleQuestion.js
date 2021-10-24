import React, { useState } from "react";
import { Stack, Button, Grid } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveIcon from "@mui/icons-material/Remove";

const Question = (data) => {
  const { id, title, info } = data;
  const [readMore, setReadMore] = useState(false);

  return (
    <Stack
      className={
        !readMore
          ? "question"
          : id === 1
          ? "question active-top"
          : id === 5
          ? "question active-bottom"
          : "question active-question"
      }
    >
      <Stack
        className="single-question"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <h4>{title}</h4>
        <Button className="btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? <RemoveIcon /> : <ControlPointIcon />}{" "}
        </Button>
      </Stack>
      {readMore && <p>{info}</p>}
    </Stack>
  );
};

export default Question;
