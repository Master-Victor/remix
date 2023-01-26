import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import Recoments from "./Recoments";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container
      style={{
        margin: 0,
        padding: 0,
        minWidth: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        overflowX: 'hidden'
      }}
    >
      <Header />
      <NavHeader/>
      <Box sx={{ my: 4 }}>
        {children}
      </Box>
      <Recoments/>
      <Footer />
    </Container>
  );
}
