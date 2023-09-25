import { AltRouteOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

const HeaderItem = ({ icon, alt, text }) => {
  return (
    <Grid container direction="row" alignItems="center" spacing={1}>
      <Grid item>
        <img src={icon} alt={AltRouteOutlined} />
      </Grid>
      <Grid item>
        <Typography
          sx={{
            color: "#FFF",
            leadingTrim: "both",
            textEdge: "cap",
            fontFamily: "Manrope",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "100%" /* 12px */,
            textTransform: "capitalize",
          }}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderItem;
