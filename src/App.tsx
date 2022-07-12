import React from 'react';
import Main from 'pages/Main';
import {Container} from '@mui/material';
import { ST_Footer, ST_Header } from 'layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
      <ST_Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <ST_Footer />
    </BrowserRouter>
);

export default App;
