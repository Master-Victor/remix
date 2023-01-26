import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useItemStore } from "~/store/ItemStore";

type ItemCartProps = {
  id: number;
  name: string;
  maxQuantity: number;
  minQuantity: number;
  pack?: [
    {
      itemName: string;
      itemDescription: string;
    },
    {
      itemName: string;
      itemDescription: string;
    },
    {
      itemName: string;
      itemDescription: string;
    }
  ];
  priceUnit: number;
};

const ItemCart = (props: ItemCartProps) => {
  const [unit, setUnits] = React.useState<Number>(10);

  const handleChange = (event: SelectChangeEvent) => {
    setUnits(Number(event.target.value));
    handleQuantity(props.id, Number(event.target.value));
  };

  const handleDelete = useItemStore((state: any) => state.removeItem);
  const handleQuantity = useItemStore((state: any) => state.changeQuantity);

  const quality: [any] = [props.maxQuantity];

  for (let i = props.minQuantity; i < props.maxQuantity; i = i + 10)
    quality.unshift(i);

  useEffect(() => {
    handleQuantity(props.id, Number(10));
  }, [handleQuantity]);

  return (
    <Grid container sx={{ flexDirection: 'row', paddingTop: "40px" }}>
      <Grid item sm={2}>
        <Box
          sx={{
            width: "120px",
            height: "120px",
            backgroundColor: "#E6E8E9",
          }}
        />
        {props.pack !== undefined && (
          <Box
            sx={{
              width: "26px",
              height: "16px",
              backgroundColor: "#E6E8E9",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              transform: "translate(50px, 10px)",
            }}
          >
            <Typography
              sx={{ fontSize: "10px", fontWeight: "600" }}
              color="#9CA2A8"
            >
              PACK
            </Typography>
          </Box>
        )}
      </Grid>
      <Grid item sm={5} sx={{ paddingLeft: '100px',minWidth: '300px' }}>
        <Typography variant="subtitle1">{props.name}</Typography>
        <Typography variant="subtitle2">
          Quantity:
          <FormControl variant="standard" style={{ paddingLeft: "10px" }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              onChange={handleChange}
              label="Age"
              style={{ height: "20px" }}
              value={String(unit)}
            >
              {
                quality.map((item: any,i: number) => (
                  <MenuItem key={i} value={item}>{item}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Typography>
        {props.pack !== undefined ? (
          <>
            {" "}
            <Typography variant="subtitle2">
              <ul>
                <li>
                  <b>Cardboard box:</b>{" "}
                  <Typography sx={{ display: "inline-block" }} color="#9CA2A8">
                    (container)
                  </Typography>
                </li>
                <li>
                  <b> Unisex Short Sleeve T-Shirt</b>{" "}
                  <Typography sx={{ display: "inline-block" }} color="#9CA2A8">
                    (Green, Small)
                  </Typography>{" "}
                </li>
                <li>
                  {" "}
                  <b>Basic bottle</b>{" "}
                  <Typography sx={{ display: "inline-block" }} color="#9CA2A8">
                    (Blue)
                  </Typography>{" "}
                </li>
              </ul>
            </Typography>
            <Button sx={{ textTransform: "none" }}>Edit pack</Button>{" "}
            <Typography sx={{ display: "inline-block" }} color="#9CA2A8">
              |
            </Typography>{" "}
            <Button
              onClick={() => handleDelete(props.id)}
              sx={{ textTransform: "none" }}
            >
              Remove
            </Button>
          </>
        ) : (
          <Button
            onClick={() => handleDelete(props.id)}
            sx={{ textTransform: "none", marginLeft: "-10px" }}
          >
            <DeleteOutlineIcon />
            Remove
          </Button>
        )}
      </Grid>
      <Grid item sm={3}>
        <Typography variant="subtitle1" align="right">
          <b>${props.priceUnit}</b>
        </Typography>
        <Typography variant="subtitle1" align="right">
          <b>Total: $ {props.priceUnit * Number(unit)}</b>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ItemCart;
