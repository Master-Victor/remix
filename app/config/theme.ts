import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import type { Shadows } from '@mui/material/styles/shadows';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#091625',
    },
    secondary: {
      main: '#E6E8E9',
    },
    error: {
      main: red.A400,
    },
  },
  shape:{
    borderRadius: 20
  },
  shadows: Array(25).fill("none") as Shadows,
});

export default theme;