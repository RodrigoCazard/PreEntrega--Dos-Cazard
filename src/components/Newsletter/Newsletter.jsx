import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Newsletter = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = {
    padding: "20px",
    fontSize: "20px",
    borderRadius: 40,
    outline: "none",
    width: "450px",
    border: isFocused ? "2px solid #9c27b0" : "2px solid transparent",
    transition: "all 0.5s ease",
  };

  return (
    <Box
      component={"section"}
      my={"120px"}
      bgcolor={"rgba(0,0,0,0.03)"}
      paddingY={"120px"}
      borderRadius={10}
    >
      <Box textAlign={"center"}>
        <Typography variant="body1" color={"primary"} component={"p"} mb={1}>
          - Our Newsletter
        </Typography>
        <Typography variant={"h2"} component={"h2"}>
          Sign Up to our Newsletter
        </Typography>
        <Box
          mt={8}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={5}
        >
          <input
            placeholder="Your Email"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button
            variant="contained"
            disableElevation
            size="large"
            sx={{
              height: "70px",
              width: "160px",
              borderRadius: 10,
              fontSize: "1.3rem",
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
