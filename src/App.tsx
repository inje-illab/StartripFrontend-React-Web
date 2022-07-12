import React from 'react';
import Main from 'pages/Main';
import {Container} from '@mui/material';
import * as TestAPI from 'lib/api/TestAPI';
import { ST_Footer, ST_Header } from 'layout';

function App() {
  const api = TestAPI.testAPI();
  console.log(api);
  return (
    <>
      <ST_Header />
      <Main />
      <ST_Footer />
    </>
  );
}

export default App;
