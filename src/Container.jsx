import React, { useEffect } from "react";
import { styled as MUIStyled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/dataSlice";
import Chip from "@mui/material/Chip";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Charts from "./components/Charts";

const Item = MUIStyled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemLeft = MUIStyled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Container() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const dataProduct = useSelector((state) => state.appData.dataOb);
  const dataProductTags = useSelector((state) => state.appData.dataOb.tags);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} p={5}>
        <Grid item xs={3}>
          <Item>
            <TitleContainer>
              <Box
                sx={{
                  width: {
                    xs: 100,
                  },
                }}
                component="img"
                src={dataProduct.image}
              />{" "}
              <Typography>
                <b>{dataProduct.title}</b>
              </Typography>
              <div>{dataProduct.subtitle}</div>
            </TitleContainer>
            <TagsContainer>
              {dataProductTags &&
                dataProductTags.map((item, index) => (
                  <Badge variant="outlined" label={item} key={index} p={2} />
                ))}
            </TagsContainer>
          </Item>
        </Grid>
        <Grid item xs={9} p={5}>
          <ItemLeft>
            <Charts />
          </ItemLeft>
        </Grid>
      </Grid>
    </Box>
  );
}

export const TagsContainer = styled.div`
  align-items: left !important;
  padding: 10px;
  margin: 5px;
`;

export const TitleContainer = styled.div`
  align-items: center !important;
`;

export const Badge = styled(Chip)`
  border-radius: 0;
  margin: 5px;
`;
