import { Box, Divider, Grid, Typography } from "@mui/material";
import SecurityIcon from "../../../assets/icons/lock (7) 1.svg";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#252F3D",
        height: "84px",
        width: "100%",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingTop: "24px", paddingLeft: "127px", paddingRight: "119px" }}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ paddingTop: "8px", paddingBottom: "8px" }}
          >
            <Grid item>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "140%" /* 22.4px */,
                  textTransform: "capitalize",
                  paddingRight: "16px",
                }}
              >
                Copyright (c) 2023
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                borderColor: "#FFF",
                marginTop: "16px",
                marginBottom: "0px",
              }}
            />
            <Grid item>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "140%" /* 22.4px */,
                  textTransform: "lowercase",
                }}
              >
                Clarifionsupport@clarifion.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
            justifyContent="space-between"
          >
            <Grid item>
              <Grid container alignItems="center">
                <img src={SecurityIcon} alt="Security Icon" />
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "#FFF",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%" /* 12px */,
                  textTransform: "capitalize",
                }}
              >
                Secure 256-bit SSL encryption.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
