import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#072d4c",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};
