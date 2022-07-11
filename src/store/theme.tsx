import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#586cdf',
    },
    secondary: {
      main: '#DC7D2A',
    },
    divider: 'rgba(0,0,0,0.04)',
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'Noto Sans KR',
  },
});