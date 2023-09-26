import { Grid } from "@mui/material";
import OrderProgress from "./orderprogress/OrderProgress";
import OrderContent from "./orderprogress/ordercontent/OrderContent";

const OrderProcess = () => {
  return (
    <Grid container justifyContent="center">
      <OrderProgress />
      <OrderContent />
    </Grid>
  );
};

export default OrderProcess;
