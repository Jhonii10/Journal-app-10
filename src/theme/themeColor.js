import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";



export const themeColor = createTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
    },
  })