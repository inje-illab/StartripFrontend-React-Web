import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Alert, AlertTitle, Grid, Paper, Box, Typography } from "@mui/material";
import { ST_Container, ST_Title } from "components";

const ContentCard = ({ header, content, image, xs }) => {
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

  return (
    <Grid item xs={xs}>
      <Item>
        <Typography>{header}</Typography>
        <Typography>{content}</Typography>
        {image ? <img src = {image} /> : ""}
      </Item>
    </Grid>
);
};

export default ContentCard;