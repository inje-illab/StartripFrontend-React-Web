import * as React from "react";
import {Button } from "@mui/material";
import { Box, ThemeProvider, createTheme } from "@mui/system";


const TitleText = () => {
  return (
      <Box sx = {{alignItems: "center", marginTop: 4, flexDirection: "row", fontSize: 14, textAlign: "center"}}>
        <h1>{titleContent}</h1>
      </Box>

  );
};

const titleContent = "배움에는 끝이 없다, 배움의 즐거움을 느낄 수 있는 여행 일정";

export {TitleText};
