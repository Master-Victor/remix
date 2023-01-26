import React from "react";
import Box from "@mui/material/Box";
import Logo from "./Logo";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const FooterContent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "80px",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="row" spacing={35}>
          <Grid item xs={3}>
            <Logo />
            <Typography
              sx={{ paddingTop: "24px", minWidth: "300px" }}
              color="textSecondary"
            >
              We sell custom products for all your needs. Packs and bulk
              products that you will enjoy.{" "}
            </Typography>
            <Box
              sx={{
                paddingTop: "24px",
                display: "inline-flex",
                minWidth: "300px",
              }}
            >
              <LocalPhoneIcon
                style={{
                  color: "primary.main",
                  verticalAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              &nbsp;
              <Typography
                style={{
                  display: "flex",
                  verticalAlign: "center",
                  minWidth: "300px",
                }}
              >
                +1-202-555-0129
              </Typography>
            </Box>
            <Box sx={{ paddingTop: "40px", minWidth: "300px" }}>
              <FacebookOutlinedIcon
                sx={{ width: "32px", height: "32px", color: "#535C67" }}
              />
              <TwitterIcon
                sx={{ width: "32px", height: "32px", color: "#535C67" }}
              />
              <InstagramIcon
                sx={{ width: "32px", height: "32px", color: "#535C67" }}
              />
              <YouTubeIcon
                sx={{ width: "32px", height: "32px", color: "#535C67" }}
              />
              <LinkedInIcon
                sx={{ width: "32px", height: "32px", color: "#535C67" }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography color="black" variant="overline" sx={{ minWidth: 300 }}>
              Our company{" "}
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
              }}
            >
              About us
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
              }}
            >
              FAQ
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
              }}
            >
              Partnerships
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
              }}
            >
              Sustainability
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
              }}
            >
              Blog
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="black" variant="overline" sx={{ minWidth: 300 }}>
              How can we help{" "}
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
                minWidth: 300,
              }}
            >
              Place a ticket
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
                minWidth: 300,
              }}
            >
              Track your order
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
              }}
            >
              Help center
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="black" variant="overline" sx={{ minWidth: 300 }}>
              Information{" "}
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
              }}
            >
              Contact us
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
              }}
            >
              Live chat
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
              }}
            >
              Privacy
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              sx={{
                paddingTop: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "16px",
              }}
            >
              Terms of use
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterContent;
