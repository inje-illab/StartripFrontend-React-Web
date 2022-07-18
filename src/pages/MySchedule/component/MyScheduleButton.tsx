import * as React from "react";
import {Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Box, ThemeProvider, createTheme } from "@mui/system";

export default function MyScheduleButton() {
  return (

  <Stack direction="column" spacing={10}>
      <Box sx = {{ marginTop: 4, display: "flex", flexDirection: "row"}}>
        <Button sx = {{ width: 0.5, height: 55, fontSize: 18}} variant="contained" disabled > 추천 여행 일정</Button>
        <Button sx = {{ width: 0.5, height: 55, fontSize: 18}} variant="contained" > 내 여행 일정   </Button>
      </Box>
    </Stack>

  );
}
