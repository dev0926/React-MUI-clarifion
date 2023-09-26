import { Box, Grid, Typography } from "@mui/material";
import ProductImage from "../../../../assets/4b81b2e6a429f79dc3a06643582245fb.png";
import SmallImage from "../../../../assets/be356da38eef349d3173d8e6588e7d74.png";
import StarIcon from "../../../../assets/icons/ant-design_star-filled.svg";
import GroupIcon from "../../../../assets/icons/Group 1000001340.svg";
import GroupIcon2 from "../../../../assets/icons/Group 1000004656.svg";
import TickCircle from "../../../../assets/icons/tick-circle.svg";
import Line1 from "../../../../assets/icons/Line 1.svg";
import Lock from "../../../../assets/icons/lock (7) 2.svg";
import Visa from "../../../../assets/icons/visa.svg";
import Shoppay from "../../../../assets/icons/shop pay.svg";
import Paypal from "../../../../assets/icons/paypal.svg";
import Mastercard from "../../../../assets/icons/mastercard.svg";
import Gpay from "../../../../assets/icons/gpay.svg";
import Apay from "../../../../assets/icons/apple pay.svg";
import Amex from "../../../../assets/icons/amex.svg";
import Satisfaction from "../../../../assets/9ab77b5d839615855b972dedd4310061.png";
import User from "../../../../assets/Rectangle 1127.png";
import Stars from "../../../../assets/icons/Stars.svg";
import Verify from "../../../../assets/icons/verify 1.svg";

const OrderContent = () => {
  return (
    <Grid
      item
      container
      direction="row"
      padding={5}
      justifyContent="space-between"
      sx={{ maxWidth: "1245px" }}
    >
      <Grid
        item
        container
        direction="column"
        gap="24px"
        sx={{ maxWidth: "575px" }}
      >
        <Grid item>
          <img src={ProductImage} alt="Product" width="575px" height="591px" />
        </Grid>
        <Grid item>
          <Grid container padding="24px" alignItems="flex-start" gap="18px">
            <Grid item>
              <Grid container gap="13px" alignItems="center">
                <Grid item>
                  <img src={User} alt="Verifed User" />
                </Grid>
                <Grid item>
                  <Grid container gap="7.35px" direction="column">
                    <Grid item height="12px">
                      <img src={Stars} alt="Stars" />
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        gap="10px"
                        alignItems="center"
                        sx={{ display: "inline-flex" }}
                      >
                        <Grid item>
                          <Typography
                            sx={{
                              color: "#333333",
                              fontFamily: "Manrope",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: 700,
                              lineHeight: "100%",
                            }}
                          >
                            Ken T.
                          </Typography>
                        </Grid>
                        <Grid item>
                          <img src={Verify} alt="Verified" />
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              color: "#5BB59A",
                              fontFamily: "Manrope",
                              fontSize: "12px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "120%",
                            }}
                          >
                            Verified Customer
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item alignSelf="stretch">
              <Typography
                color="#4D5254"
                fontFamily="Manrope"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="150%"
              >
                “As soon as the Clarifions arrived I put one in my bedroom. This
                was late in the afternoon. When I went to the bedroom in the
                evening it smelled clean. When I went to bed I felt I could
                breathe better. Wonderful.”
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        sx={{ maxWidth: "550px" }}
        gap="32px"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography
            sx={{
              color: "#000",
              leadingTrim: "both",
              textEdge: "cap",
              fontFamily: "Manrope",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "140%" /* 44.8px */,
              textTransform: "capitalize",
            }}
          >
            <Box sx={{ color: "#2C7EF8", display: "inline" }}>
              ONE TIME ONLY
            </Box>{" "}
            special price for 6 extra Clarifion for only{" "}
            <Box sx={{ color: "#2C7EF8", display: "inline" }}>$14 each</Box>{" "}
            ($84.00 total!)
          </Typography>
        </Grid>
        <Grid item container direction="row" justifyContent="space-between">
          <Grid
            item
            sx={{
              backgroundColor: "#2C7EF8",
              borderRadius: "10px",
              maxWidth: "134px",
            }}
          >
            <img src={SmallImage} alt="Product" width="134px" height="134px" />
          </Grid>
          <Grid
            item
            container
            directoin="column"
            spacingY="15px"
            sx={{
              maxWidth: "392px",
            }}
          >
            <Grid item container justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{
                    color: "#000",
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "140%" /* 28px */,
                    textTransform: "capitalize",
                  }}
                >
                  Clarifion Air lonizer
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  columnSpacing="10px"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      sx={{
                        color: "#969696",
                        leadingTrim: "both",
                        textEdge: "cap",
                        fontFamily: "Manrope",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "normal" /* 28px */,
                        textTransform: "capitalize",
                      }}
                    >
                      $180
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        color: "#2C7EF8",
                        leadingTrim: "both",
                        textEdge: "cap",
                        fontFamily: "Manrope",
                        fontSize: "22px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "140%" /* 28px */,
                        textTransform: "capitalize",
                      }}
                    >
                      $84
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="row" columnSpacing="2px">
                <Grid item>
                  <img src={StarIcon} alt="Star"></img>
                </Grid>
                <Grid item>
                  <img src={StarIcon} alt="Star"></img>
                </Grid>
                <Grid item>
                  <img src={StarIcon} alt="Star"></img>
                </Grid>
                <Grid item>
                  <img src={StarIcon} alt="Star"></img>
                </Grid>
                <Grid item>
                  <img src={StarIcon} alt="Star"></img>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container columnSpacing={2} alignItems="center">
                <Grid item>
                  <img src={GroupIcon} alt="Group" />
                </Grid>
                <Grid item>
                  <Typography
                    color="#37465A"
                    fontFamily="Manrope"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight={300}
                    lineHeight="normal"
                  >
                    12 left in Stock
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "#4D5254",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "140%",
                }}
              >
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid contianer direction="column" rowSpacing={2}>
            <Grid item>
              <Grid
                container
                direction="row"
                columnSpacing="12px"
                alignItems="center"
              >
                <Grid item>
                  <img src={TickCircle} alt="TickCircle" />
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "#4D5254",
                      leadingTrim: "both",
                      textEdge: "cap",
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "160%",
                    }}
                  >
                    Negative Ion Technology may{" "}
                    <Box sx={{ display: "inline", fontWeight: 700 }}>
                      help with allergens
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                columnSpacing="12px"
                alignItems="center"
              >
                <Grid item>
                  <img src={TickCircle} alt="TickCircle" />
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "#4D5254",
                      leadingTrim: "both",
                      textEdge: "cap",
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "160%",
                    }}
                  >
                    Designed for{" "}
                    <Box sx={{ display: "inline", fontWeight: 700 }}>
                      air rejuvenation
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                columnSpacing="12px"
                alignItems="center"
              >
                <Grid item>
                  <img src={TickCircle} alt="TickCircle" />
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      color: "#4D5254",
                      leadingTrim: "both",
                      textEdge: "cap",
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "160%",
                    }}
                  >
                    <Box sx={{ display: "inline", fontWeight: 700 }}>
                      Perfect for every room
                    </Box>{" "}
                    in all types of places
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            sx={{
              backgroundColor: "#EDF3FD",
              borderRadius: "10px",
              padding: "12px 16px",
            }}
            columnSpacing={2}
            alignItems="center"
          >
            <Grid item>
              <img src={GroupIcon2} alt="Group Icon 2" />
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "140%",
                }}
              >
                Save <Box sx={{ color: "#2C7EF8", display: "inline" }}>53%</Box>{" "}
                and get{" "}
                <Box sx={{ color: "#2C7EF8", display: "inline" }}>
                  6 extra Clarifision
                </Box>{" "}
                for only{" "}
                <Box sx={{ color: "#2C7EF8", display: "inline" }}>$14 Each</Box>
                .
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" sx={{}}>
            <Grid item xs={12} marginBottom="12px">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                  padding: "16px 64px",
                  borderRadius: "50px",
                  backgroundColor: "#59AE43",
                  cursor: "pointer",
                  gap: "10px",
                  alignSelf: "stretch",
                }}
              >
                <Grid item>
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Manrope",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "normal" /* 44.8px */,
                      textTransform: "uppercase",
                    }}
                  >
                    Yes - Claim my discount
                  </Typography>
                </Grid>
                <Grid item>
                  <img src={Line1} alt="Line1" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} marginBottom="20px">
              <Grid
                container
                alignItems="center"
                sx={{
                  borderRadius: "4px",
                  border: "1px solid #CFCFCF",
                  gap: "16px",
                  alignSelf: "stretch",
                  padding: "8px 16px",
                }}
              >
                <Grid item>
                  <Typography
                    sx={{
                      color: "#4D5254",
                      fontFamily: "Manrope",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "140%",
                      textTransform: "capitalize",
                    }}
                  >
                    Free shipping
                  </Typography>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      width: "1px",
                      height: "16px",
                      backgroundColor: "#CFCFCF",
                    }}
                  ></Box>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" gap="6px">
                    <Grid item>
                      <img src={Lock} alt="Lock" />
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{
                          color: "#4D5254",
                          textAlign: "center",
                          leadingTrim: "both",
                          textEdge: "cap",
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "150%" /* 44.8px */,
                          textTransform: "capitalize",
                        }}
                      >
                        Secure 256-bit SSL encryption.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      width: "1px",
                      height: "16px",
                      backgroundColor: "#CFCFCF",
                    }}
                  ></Box>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    gap="2px"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item>
                      <img src={Visa} alt="Visa" />
                    </Grid>
                    <Grid item>
                      <img src={Shoppay} alt="Shoppay" />
                    </Grid>
                    <Grid item>
                      <img src={Paypal} alt="Paypal" />
                    </Grid>
                    <Grid item>
                      <img src={Mastercard} alt="Mastercard" />
                    </Grid>
                    <Grid item>
                      <img src={Gpay} alt="Gpay" />
                    </Grid>
                    <Grid item>
                      <img src={Apay} alt="Apay" />
                    </Grid>
                    <Grid item>
                      <img src={Amex} alt="Amex" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="center">
                <Typography
                  sx={{
                    color: "#F82C2C",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal" /* 44.8px */,
                    textDecoration: "underline",
                    textTransform: "uppercase",
                  }}
                >
                  No thanks, I don’t want this.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container gap="16px" alignItems="center" direction="row">
            <Grid item sx={{ width: "88px" }}>
              <img
                src={Satisfaction}
                alt="Satisfaction"
                width="88px"
                height="88px"
              />
            </Grid>
            <Grid item sx={{ width: "446px" }}>
              <Typography
                sx={{
                  color: "#4D5254",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "140%" /* 44.8px */,
                }}
              >
                If you are not completely thrilled with your Clarifion - We have
                a{" "}
                <Box sx={{ display: "inline", fontWeight: 700 }}>
                  30 day satisfaction guarantee
                </Box>
                . Please refer to our return policy at the bottom of the page
                for more details. Happy Shopping!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderContent;
