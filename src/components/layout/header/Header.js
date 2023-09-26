import { Grid } from "@mui/material";
import React from "react";
import HeaderItem from "./headerItem/HeaderItem";
import CheckMark from "../../../assets/icons/fluent_checkmark-starburst-20-regular.svg";
import TruckLight from "../../../assets/icons/ph_truck-light.svg";
import Hearts from "../../../assets/icons/mdi_cards-heart-outline.svg";
import SyncCheck from "../../../assets/icons/fluent_arrow-sync-checkmark-20-regular.svg";
import styled from "@emotion/styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Root1 = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1245px",
  width: "100%",
  margin: "15px 30px 13px 30px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Root2 = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  margin: "10px 20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Header = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: "#252F3D",
      }}
      justifyContent="center"
    >
      <Root1>
        <Grid item>
          <HeaderItem icon={CheckMark} text="30-DAY SATISFACTION GUARANTEE" />
        </Grid>
        <Grid item>
          <HeaderItem
            icon={TruckLight}
            text="Free delivery on orders over $40.00"
          />
        </Grid>
        <Grid item>
          <HeaderItem icon={Hearts} text="50.000+ HAPPY CUSTOMERS" />
        </Grid>
        <Grid item>
          <HeaderItem icon={SyncCheck} text="100% Money Back Guarantee" />
        </Grid>
      </Root1>
      <Root2>
        <Grid item>
          <ArrowBackIosNewIcon sx={{ color: "white" }} />
        </Grid>
        <Grid item>
          <HeaderItem icon={CheckMark} text="30-DAY SATISFACTION GUARANTEE" />
        </Grid>
        <Grid item>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </Grid>
      </Root2>
    </Grid>
  );
};

export default Header;
