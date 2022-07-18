import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Alert, AlertTitle, Grid, Paper, Box, Typography } from "@mui/material";
import { ST_Container, ST_Title } from "components";

const ContentCard = ({ whereInfo, header, content, image, xs }) => {
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

  return (

    <Grid item xs={xs} sx={{ marginTop:2, mx:"5px", border: "1px solid grey"}}>
      <Box sx = {{marginTop:"2", margin: "auto", textAlign:"center"}}>
        <h3> {whereInfo} </h3>
      </Box>
      <Item >
        <Typography sx = {{ fontSize:18, fontWeight:"bold"}}>{header}</Typography>
        <Typography>{content}</Typography>
        
        {image ? <img src = {image} height="20%" width="100%"  /> : ""}
      </Item>
    </Grid>

);
};

export default ContentCard;