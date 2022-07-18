import * as React from "react";
import {Button } from "@mui/material";
import { Box, ThemeProvider, createTheme } from "@mui/system";


const GuideText = () => {
  return (
      <Box sx = {{alignItems: "center", marginTop: 4, flexDirection: "row", fontSize: 14, textAlign: "center"}}>
        여행 일정을 더 추가해보세요
      </Box>

  );
};

export {GuideText};
