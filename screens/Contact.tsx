import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import Divider from "../components/Divider";
import AnimatedLetter from "../components/AnimatedLetter";
import SideBarButton from "../components/SideBarButton";
import { SideBarDataInterface, leftBarData } from "../data/SideBarData";

import { motion } from "framer-motion";

const TitleStack = styled(Stack)(({ theme }) => ({
  "& > .MuiTypography-root": {
    margin: "0 10px",
  },
}));

const ContactIconsStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  display: "block",
  margin: "40px auto",
  textTransform: "none",
  textDecoration: "none",
  fontSize: 20,
  "&:hover": {
    color: "#00eaf0",
    borderColor: "#00eaf0",
    background: "transparent",
  },
}));

const NavBar = (): JSX.Element => {
  return (
    <Stack
      id="contact"
      component={Container}
      direction="column"
      justifyContent="space-between"
      sx={{
        marginTop: "50px",
        minHeight: "70vh",
      }}
    >
      <div>
        <Divider />
        <TitleStack direction="row" justifyContent="center" flexWrap="wrap">
          <Typography color="primary" variant="h2" align="center">
            {"Get".split("").map(
              (x: string, i: number): JSX.Element => (
                <AnimatedLetter i={i} x={x} delay={0.5} key={i} />
              )
            )}
          </Typography>
          <Typography color="primary" variant="h2" align="center">
            {"In".split("").map(
              (x: string, i: number): JSX.Element => (
                <AnimatedLetter i={3 + i} x={x} delay={0.5} key={i} />
              )
            )}
          </Typography>
          <Typography color="primary" variant="h2" align="center">
            {"Touch".split("").map(
              (x: string, i: number): JSX.Element => (
                <AnimatedLetter i={5 + i} x={x} delay={0.5} key={i} />
              )
            )}
          </Typography>
        </TitleStack>
        <Divider />
        <Typography
          sx={{ maxWidth: 700, margin: "auto", marginTop: 5 }}
          component={motion.p}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
          }}
          viewport={{ once: true, margin: "-150px" }}
          variant="body1"
          color="#d7b9d5"
          align="center"
        >
          I am currently looking for internship opportunities during Summer'22,
          and would love to work on interesting and challenging projects.
        </Typography>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
        >
          <Link underline="none" href="mailto:aryatathe@gmail.com">
            <CustomButton disableRipple variant="outlined" color="secondary">
              Let's Talk
            </CustomButton>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{}}
      >
        <Divider />
        <ContactIconsStack direction="row" justifyContent="center">
          {leftBarData.map(
            (x: SideBarDataInterface, i: number): JSX.Element => (
              <SideBarButton href={x.href} icon={x.icon} delay={1} />
            )
          )}
        </ContactIconsStack>
      </motion.div>
    </Stack>
  );
};

export default NavBar;
