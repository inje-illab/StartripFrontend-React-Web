import React from 'react';
import Main from 'pages/Main';
import {Container} from '@mui/material';
import * as TestAPI from 'lib/api/TestAPI';
import { ST_Footer, ST_Header } from 'layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const api = TestAPI.testAPI();
  console.log(api);
  return (
    <BrowserRouter>
      <ST_Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <ST_Footer />
    </BrowserRouter>
  );
}

export default App;
