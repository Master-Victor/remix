import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@mui/material";

export default function Item() {
  const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

  return (
    <Grid item>
      <Card sx={{ maxWidth: matches ? 336 : 200, display: "inline-block", borderRadius: "0" }}>
        <Box
          style={{
            width: matches ? 336 : 200,
            height: matches ? 336 : 200,
            backgroundColor: "#E6E8E9",

          }}
        />
        <CardContent sx={{ p: 0, my: 1 }}>
          <Typography variant="overline" color="black">
            Unisex Short Sleeve T-Shirt
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ px: 0 }}>
          <Typography variant="subtitle2" color="black">
            $10-$24
          </Typography>
          <Typography
            variant="subtitle2"
            color="black"
            sx={{ paddingLeft: "10vw" }}
          >
            Minimum: 24
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
