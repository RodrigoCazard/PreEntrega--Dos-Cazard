import React from "react";
import Item from "./Item";
import { Box, Grid } from "@mui/material";

const ItemList = ({ products }) => {
  return (
    <Grid container columnSpacing={6} my={10}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} lg={3} xl={3} key={product.id}>
          <Item {...product}></Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
