import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ReactSVG } from "react-svg";
import logo from '../src/stackline_logo.svg'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 0 }}
          ></Typography>
          <ReactSVG
            src={logo}
            width="0"
            height="0"
            style={{ width: 100 }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
