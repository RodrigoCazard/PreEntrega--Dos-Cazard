import { useTheme } from "@emotion/react";
import { Category } from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const CategoryColors = {
  desktop: "60, 179, 113",
  laptop: "0, 0, 255",
  mobilePhone: "255, 165, 0",
  printer: "255, 0, 0",
  // Puedes agregar más categorías y colores según sea necesario
};

const Item = ({ category, nombre, precio, img }) => {
  const theme = useTheme();

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
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
          height: "200px",

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
      <Typography variant="h4" mb={3}>
        {nombre}
      </Typography>
      <Box display={"flex"} mt={1}>
        <Typography
          sx={{
            textTransform: "uppercase",
            bgcolor: `rgba(${CategoryColors[category]},0.2)`,
            padding: "8px 17px",
            borderRadius: 10,
            fontWeight: "bold",
            color: `rgb(${CategoryColors[category]})`,
            mr: 3,
          }}
          variant="body3"
        >
          {category ?? "NO CATEGORY"}
        </Typography>
        <Typography variant="h"> ${precio}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
