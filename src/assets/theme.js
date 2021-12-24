import { createTheme } from '@mui/material';
import { purple, orange, red } from '@mui/material/colors';

const primaryColor = purple[600];
const secondaryColor = orange[500];
const dangerColor = red[900];

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          fontSize: '.7rem'
        },
        secondary: {
            '&:hover': {
                color: 'white',
            }
        }
      },
    },
    MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: primaryColor,
            opacity: .8,
          },
        },
    }
  },
});

export default theme;
