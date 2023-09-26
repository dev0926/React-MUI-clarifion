import { Grid } from "@mui/material";
import React from "react";
import Clarifion from "../../assets/logo/ca6d33ae7930758c0396996013437236.png";
import McAfeeSecure from "../../assets/logo/Frame 1484578055.svg";
import Norton from "../../assets/logo/norton-antivirus-logo 1.svg";

const LogoPanel = () => {
  const style = {
    width: "192px",
    height: "36px",
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingY: "30px", maxWidth: "1245px" }}
      >
        <Grid item>
          <img src={Clarifion} alt="ClarifionLogo" style={style} />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <img src={McAfeeSecure} alt="McAfeeSecureLogo" />
            </Grid>
            <Grid item>
              <img src={Norton} alt="NortonLogo" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LogoPanel;
