import { Grid, Typography } from "@mui/material";

const OrderTitle = () => {
  <Grid item container direction="column" justifyContent="center" gap="24px">
    <Grid item>
      <Typography
        sx={{
          leadingTrim: "both",
          textEdge: "cap",
          fontFamily: "Manrope",
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "100%",
          textTransform: "capitalize",
        }}
      >
        Wait ! your order in progress.
      </Typography>
    </Grid>
    <Grid item>
      <Typography
        sx={{
          color: "#4D5254",
          leadingTrim: "both",
          textEdge: "cap",
          fontFamily: "Manrope",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "100%",
          textTransform: "capitalize",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </Typography>
    </Grid>
  </Grid>;
};

export default OrderTitle;
