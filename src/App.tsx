import React from 'react';
import Main from 'components/Main';
import Recoiltest from 'components/Recoiltest';
import {Container} from '@mui/material';
import * as TestAPI from 'lib/api/TestAPI';

function App() {
  const api = TestAPI.testAPI();
  console.log(api);
  return (
    <Container maxWidth="xl">
        <h1>스타-링크</h1>
        <Main />
        <Recoiltest />
    </Container>
  );
}

export default App;
