import { Button, useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import { useItemStore } from "~/store/ItemStore";
const style = {
  width: "100%",
  bgcolor: "background.paper",
};
const YouCart = () => {
  const items = useItemStore((state: any) => state.items);
  const matches900 = useMediaQuery("(min-width:900px)");

  return (
    <Grid
      container
      style={
        matches900
          ? { flexDirection: "row",paddingRight: "8vw" }
          : {
              flexDirection: "row",
              width: "80vw",
              paddingRight: "8vw"
            }
      }
      justifyContent={"space-between"}
    >
      <Typography variant="h6">Order Summary</Typography>
      <List style={style}>
        <ListItem disableGutters={true}>
          <Grid container justifyContent={"space-between"}>
            <Typography
              variant="subtitle1"
              color="#6B737C"
              style={{ padding: 0 }}
            >
              Number of items
            </Typography>
            <Typography variant="subtitle1" color="#6B737C" align="right">
              {items.length}
            </Typography>
          </Grid>
        </ListItem>
        <br />
        <Divider />
        <ListItem disableGutters={true}>
          <Grid container justifyContent={"space-between"}>
            <Typography variant="subtitle1">
              <b>Total:</b>
            </Typography>
            <Typography variant="subtitle1" align="right">
              <b>
                ${" "}
                {items.reduce(
                  (accumulator: number, currentValue: any) =>
                    Number(accumulator) +
                    Number(currentValue.priceUnit) *
                      Number(currentValue.quantity),
                  0
                )}
              </b>
            </Typography>
          </Grid>
        </ListItem>
        <ListItem disableGutters={true}>
          <Button
            style={{ width: "100vw", borderRadius: "8px" }}
            variant="contained"
          >
            Proceed to Checkout
          </Button>
        </ListItem>
        <ListItem disableGutters={true}>
          <Button
            style={{ width: "100vw", borderRadius: "8px" }}
            variant="outlined"
          >
            Continue shopping
          </Button>
        </ListItem>
      </List>
    </Grid>
  );
};

export default YouCart;
