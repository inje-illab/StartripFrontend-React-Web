import * as React from 'react';
import {ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({

  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});
 
export default theme;