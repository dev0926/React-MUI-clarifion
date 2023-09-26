import { Grid } from "@mui/material";
import React from "react";
import Clarifion from "../../assets/logo/ca6d33ae7930758c0396996013437236.png";
import McAfeeSecure from "../../assets/logo/Frame 1484578055.svg";
import Norton from "../../assets/logo/norton-antivirus-logo 1.svg";
import styled from "@emotion/styled";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1245px",
  width: "100%",
  margin: "30px",
  [theme.breakpoints.down("sm")]: {
    margin: "20px",
  },
}));

const ClarifionLogo = styled("img")(({ theme }) => ({
  width: "192px",
  height: "36px",
  [theme.breakpoints.down("sm")]: {
    width: "107px",
    height: "20px",
  },
}));

const McAfeeSecureLogo = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "44px",
    height: "16px",
  },
}));

const NortonLogo = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "41px",
    height: "16px",
  },
}));

const LogoRoot = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "32px",
  [theme.breakpoints.down("sm")]: {
    gap: "16px",
  },
}));

const LogoPanel = () => {
  return (
    <Grid container justifyContent="center">
      <Root>
        <Grid item>
          <ClarifionLogo src={Clarifion} alt="ClarifionLogo" />
        </Grid>
        <Grid item>
          <LogoRoot>
            <Grid item>
              <McAfeeSecureLogo src={McAfeeSecure} alt="McAfeeSecureLogo" />
            </Grid>
            <Grid item>
              <NortonLogo src={Norton} alt="NortonLogo" />
            </Grid>
          </LogoRoot>
        </Grid>
      </Root>
    </Grid>
  );
};

export default LogoPanel;
