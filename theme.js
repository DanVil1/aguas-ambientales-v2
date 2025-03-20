import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f3b68',
    },
    secondary: {
      main: '#yourSecondaryColor',
    },
    black: {
      main: '#000000'
    }
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
