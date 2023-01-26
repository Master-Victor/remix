import { Grid, List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import Divider from "@mui/material/Divider";
import ItemCart from "./ItemCart";
import { useItemStore } from "~/store/ItemStore";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

const YouCart = () => {
  const items = useItemStore((state: any) => state.items);
  return (
    <Grid container justifyContent={"space-between"}>
      <Typography variant="h6">
        <b>Your Cart</b>{" "}
        <Typography variant="subtitle1" color="#6B737C" style={{ display: 'inline-block' }}>
          ({items.length})
        </Typography>
      </Typography>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {items !== undefined &&
          items.map((item: any) => (
            <div key={item.id}>
              <ListItem disableGutters={true}>
                <ItemCart
                  id={item.id}
                  name={item.name}
                  maxQuantity={item.maxQuantity}
                  minQuantity={item.minQuantity}
                  pack={item.pack}
                  priceUnit={item.priceUnit}
                />
              </ListItem>
              <Divider />
            </div>
          ))}
      </List>
    </Grid>
  );
};

export default YouCart;
