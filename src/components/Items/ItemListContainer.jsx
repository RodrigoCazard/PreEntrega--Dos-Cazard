import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductos().then((response) => setProducts(response));
  }, []);

  return (
    <Box component={"main"} mb={"120px"}>
      <Typography variant="body1" color={"primary"} component={"p"} mb={1}>
        - Our Products
      </Typography>
      <Typography variant={"h3"} component={"h2"}>
        Explore out Products
      </Typography>
      <ItemList products={products}></ItemList>
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
          sx={{ padding: "15px 50px", borderRadius: 15, fontSize: "1.5rem" }}
        >
          View all
        </Button>
      </Box>
    </Box>
  );
};

export default ItemListContainer;
