import { Grid } from "@mui/material";
import OrderProgressItem from "./orderprogressitem/OrderProgressItem";

const OrderProgress = () => {
  const progress = [
    {
      id: 1,
      status: "pass",
      text: "Step 1 : Cart Revie",
    },
    {
      id: 2,
      status: "pass",
      text: "Step 2 : Checkout",
    },
    {
      id: 3,
      status: "current",
      text: "Step 3 : Special Offer",
    },
    {
      id: 4,
      status: "remain",
      text: "Step 4 : Confirmation",
    },
  ];

  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="space-between"
      sx={{ maxWidth: "1245px" }}
    >
      {progress.map((item) => {
        return (
          <Grid item>
            <OrderProgressItem key={item.id} item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default OrderProgress;
