import React from 'react';
import Main from 'components/Main';
import Recoiltest from 'components/Recoiltest';
import {Container} from '@mui/material';

function App() {
  return (
    <Container maxWidth="xl">
        <h1>스타-링크</h1>
        <Main />
        <Recoiltest />
    </Container>
  );
}

export default App;
