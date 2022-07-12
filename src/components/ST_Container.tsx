import { Container } from "@mui/material";
import * as React from "react";

const ST_Container = ( props ) => (
  <Container>
    { props.children }
  </Container>
);

export default ST_Container;