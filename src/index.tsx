import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {RecoilRoot} from "recoil";
import { ThemeProvider } from "@mui/material";
import { theme } from "store/theme";

const rootElement = document.getElementById("root");
if (!rootElement) {throw new Error("Failed to find the root element");}
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
);