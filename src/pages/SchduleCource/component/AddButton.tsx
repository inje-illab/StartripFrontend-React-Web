import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AddButton = () => {

  return (
    <Stack direction="column" sx ={{ margin: "auto", marginTop:2, width:150}}>
      <Button variant="outlined" endIcon= {<ArrowForwardIcon/>}> 내 일정에 추가</Button>
    </Stack>
  );
};

export { AddButton};