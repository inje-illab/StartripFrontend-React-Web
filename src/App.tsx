import React from "react";
import Main from "pages/Main/Main";
import {Container} from "@mui/material";
import { ST_Footer, ST_Header } from "layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routerData from "router";

const App = () => (
    <BrowserRouter>
      <ST_Header />
        <Routes>
        {
          routerData.map((route)=>(<Route path={route.url} element={route.component} />))
        } 
      </Routes>
      <ST_Footer />
    </BrowserRouter>
);

export default App;
