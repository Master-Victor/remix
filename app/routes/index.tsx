import YouCart from "~/components/YouCart";
import OrderSumary from "~/components/OrderSumary";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useItemStore } from "~/store/ItemStore";
import { useMediaQuery } from "@mui/material";
type Item = {
  id: number;
  name: string;
  maxQuantity: number;
  minQuantity: number;
  quantity: number;
  pack?: [
    { itemName: string; itemDescription: string },
    { itemName: string; itemDescription: string },
    { itemName: string; itemDescription: string }
  ];
  priceUnit: string;
  
};

export function loader() {
  const items: Item[] = [
    {
      id: 1,
      name: "My Christmas pack",
      maxQuantity: 50,
      minQuantity: 10,
      quantity: 10,
      pack: [
        { itemName: "Cardboard box:", itemDescription: "container" },
        {
          itemName: "Unisex Short Sleeve T-Shirt",
          itemDescription: "Green, Small",
        },
        { itemName: "Basic bottle", itemDescription: "Blue" },
      ],
      priceUnit: "71.20",
    },
    {
      id: 2,
      name: "Basic T-Shirt",
      maxQuantity: 20,
      minQuantity: 10,
      quantity: 10,
      priceUnit: "13.50",
    },
    {
      id: 3,
      name: "Woman bottle",
      maxQuantity: 20,
      minQuantity: 10,
      quantity: 10,
      priceUnit: "36.50",
    },
  ];
  return items;
}
export default function Index() {
  useItemStore.setState({ items: loader() });
  const matches900 = useMediaQuery("(min-width:900px)");

  return (
    <Box sx={{ marginLeft: "8vw" }}>
      <Grid container style={{ flexDirection: matches900 ? "row" : "column" }}>
        <Grid item xs={9}>
          <YouCart />
        </Grid>
        <Grid item xs={3}>
          <OrderSumary />
        </Grid>
      </Grid>
    </Box>
  );
}
