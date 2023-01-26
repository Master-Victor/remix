import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Logo = () => {
  return (
    <Box
      sx={{
        width: 172,
        height: 48,
        backgroundColor: "grey.500",
      }}
    >
      <Typography
        variant="overline"
        noWrap
        component="div"
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        align="center"
        color="white"
      >
        LOGO
      </Typography>
    </Box>
  );
};

export default Logo;
