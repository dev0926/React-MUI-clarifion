import { CheckCircleSharp } from "@mui/icons-material";
import { Avatar, Grid, Typography } from "@mui/material";

{
  /* <CheckCircleSharp
sx={{ color: "#85BF55", width: "40px", height: "40px" }}
/> */
}

const OrderProgressItem = ({ item }) => {
  let icon;

  switch (item.status) {
    case "pass":
      icon = (
        <Avatar
          sx={{
            bgcolor: "#85BF55",
            borderWidth: "2px",
            borderColor: "#85BF55",
            borderStyle: "solid",
          }}
          alt="id"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
          >
            <path
              d="M1.99977 9L8.65859 16L21.9998 2"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Avatar>
      );
      break;
    case "current":
      icon = (
        <Avatar
          sx={{
            bgcolor: "#2C7EF8",
            borderWidth: "2px",
            borderColor: "#2C7EF8",
            borderStyle: "solid",
          }}
          alt="id"
        >
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "20px",
              fontWeight: 400,
              color: "#FFF",
            }}
          >
            {item.id}
          </Typography>
        </Avatar>
      );
      break;
    case "remain":
      icon = (
        <Avatar
          sx={{
            bgcolor: "#FFF",
            borderWidth: "2px",
            borderColor: "#2C7EF8",
            borderStyle: "solid",
          }}
          alt="id"
        >
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "20px",
              fontWeight: 400,
              color: "#2C7EF8",
            }}
          >
            {item.id}
          </Typography>
        </Avatar>
      );
      break;
    default:
      break;
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      spacing="20px"
      alignItems="center"
    >
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography
          sx={{
            color: "#000",
            leadingTrim: "both",
            texteDge: "cap",
            fontFamily: "Manrope",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: item.status === "current" ? 700 : 400,
            lineHeight: "110%" /* 22px */,
            textTransform: "capitalize",
          }}
        >
          {item.text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OrderProgressItem;
