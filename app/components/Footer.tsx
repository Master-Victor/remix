import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FooterContent from "./FooterContent";
import Copyright from "./Copyright";
import Location from "./Location";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const matches = useMediaQuery("(min-width:1300px)", { noSsr: true });

  return (
    <Container
      sx={{
        backgroundColor: "secondary.main",
        minWidth: "100vw",
        bottom: "0",
        paddingLeft: '0px'
      }}
    >
      <Box style={{ marginLeft: matches ? '-192px' : '80px' }}>
        <FooterContent />
        <Copyright />
        <Location />
      </Box>
    </Container>
  );
};

export default Footer;
