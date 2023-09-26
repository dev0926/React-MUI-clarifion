import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  marginTop: "-11px",
  marginBottom: "60px",
  marginLeft: "20px",
  marginRight: "20px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    marginTop: "50px",
    marginBottom: "24px",
  },
}));

const TopTitle = styled("Typography")(({ theme }) => ({
  leadingTrim: "both",
  textEdge: "cap",
  fontFamily: "Manrope",
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "100%",
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    lineHeight: "140%",
  },
}));

const BottomTitle = styled("Typography")(({ theme }) => ({
  color: "#4D5254",
  leadingTrim: "both",
  textEdge: "cap",
  fontFamily: "Manrope",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "100%",
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "140%",
  },
}));

const OrderTitle = () => {
  return (
    <Grid item>
      <Root>
        <Grid item>
          <TopTitle>Wait ! your order in progress.</TopTitle>
        </Grid>
        <Grid item>
          <BottomTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </BottomTitle>
        </Grid>
      </Root>
    </Grid>
  );
};

export default OrderTitle;
