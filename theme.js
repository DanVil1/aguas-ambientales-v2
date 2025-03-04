// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#yourPrimaryColor',
    },
    secondary: {
      main: '#yourSecondaryColor',
    },
  },
  typography: {
    fontFamily: 'Your Preferred Font, sans-serif',
  },
  // Define custom breakpoints if needed for responsiveness
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
