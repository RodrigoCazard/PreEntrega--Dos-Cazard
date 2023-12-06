import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductos().then((response) => setProducts(response));
  }, []);

  return (
    <Box component={"main"}>
      <Typography variant="body1" color={"primary"} component={"p"} mb={1}>
        - Our Products
      </Typography>
      <Typography variant={"h3"} component={"h2"}>
        Explore out Products
      </Typography>
      <ItemList products={products}></ItemList>
    </Box>
  );
};

export default ItemListContainer;