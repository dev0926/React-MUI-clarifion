import { Box, Grid } from "@mui/material";
import React from "react";
import HeaderItem from "./headerItem/HeaderItem";
import CheckMark from "../../../assets/icons/fluent_checkmark-starburst-20-regular.svg";
import TruckLight from "../../../assets/icons/ph_truck-light.svg";
import Hearts from "../../../assets/icons/mdi_cards-heart-outline.svg";
import SyncCheck from "../../../assets/icons/fluent_arrow-sync-checkmark-20-regular.svg";

const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: "#252F3D",
        height: "50px",
        width: "100%",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingTop: "15px", paddingX: "127px" }}
      >
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
      </Grid>
    </Box>
  );
};

export default Header;
