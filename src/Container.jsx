import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Container() {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={2}>
        <Item>Sidebar</Item>
      </Grid>
      <Grid item xs={10}>
        <Item>Charts</Item>
      </Grid>
    </Grid>
  );
}
