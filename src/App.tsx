import React from 'react';
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Main from 'components/Main';
import AppBarCmp from 'layout/AppBar';
import Login from 'components/Login';
import Recoiltest from 'components/Recoiltest';
import {Container} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'store/theme';
import SignUp from 'components/SignUp';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBarCmp />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}