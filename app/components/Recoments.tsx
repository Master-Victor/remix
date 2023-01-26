import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Item from "./Item";
import Grid from '@mui/material/Grid';

const Recoments = () => {
  return (
    <Container
      style={{
        maxWidth: "100%",
        paddingLeft: '5vw',
        marginLeft: '48px',
        paddingTop: '5vh',
        paddingRight: '92px',
      }}
    >
      <Typography variant="h5">You might also like</Typography>
      <Grid container spacing={3} sx={{ paddingTop: '3vh' }}>
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </Container>
  );
};

export default Recoments;
