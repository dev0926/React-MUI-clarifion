import { Grid } from "@mui/material";
import OrderProgress from "./orderprogress/OrderProgress";
import OrderContent from "./ordercontent/OrderContent";
import OrderTitle from "./ordertitle/OrderTitle";

const OrderProcess = () => {
  return (
    <Grid container justifyContent="center">
      <OrderTitle />
      <OrderProgress />
      <OrderContent />
    </Grid>
  );
};

export default OrderProcess;
