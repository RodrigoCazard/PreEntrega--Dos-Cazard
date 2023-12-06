import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const Item = ({ nombre, precio, img }) => {
  const theme = useTheme();

  const primaryColor = theme.palette.primary.main;

  return (
    <Box>
      <Box
        bgcolor={"rgba(0,0,0,0.03)"}
        minHeight={"350px"}
        borderRadius={10}
        position={"relative"}
        mb={5}
        sx={{
          position: "relative",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px", // Puedes ajustar la altura según tus necesidades
          border: "1px solid #ccc", // Agrega un borde para visualizar la Box
          "&::before": {
            content: '"Add to Cart"',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: primaryColor,
            color: "white",
            padding: "16px 32px",
            borderRadius: "4px",
            fontSize: "1rem",
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
            pointerEvents: "none",
          },
          "&:hover::before": {
            opacity: 1,
          },
        }}
      >
        <img src="" alt="" />
      </Box>
      <Typography variant="h4">{nombre}</Typography>
      <Box display={"flex"} justifyContent={"space-between"} mt={1}>
        <Typography variant="h5">Prueba</Typography>
        <Typography variant="h5"> ${precio}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
