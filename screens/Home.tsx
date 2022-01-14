import * as React from "react";
import { useState, useEffect, Fragment } from "react";

import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { motion } from "framer-motion";

import AnimatedLetter from "../components/AnimatedLetter";

const CustomStack = styled(Stack)(({ theme }) => ({
  "& > .MuiTypography-root": {
    margin: "0 10px",
  },
}));

const Home = (): JSX.Element => {
  return (
    <Container
      id="home"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomStack direction="row" justifyContent="center" flexWrap="wrap">
        <Typography color="primary" variant="h1" align="center">
          {"Arya".split("").map(
            (x: string, i: number): JSX.Element => (
              <AnimatedLetter i={i} x={x} key={i} />
            )
          )}
        </Typography>
        <Typography color="primary" variant="h1" align="center">
          {"Tathe".split("").map(
            (x: string, i: number): JSX.Element => (
              <AnimatedLetter i={4 + i} x={x} key={i} />
            )
          )}
        </Typography>
      </CustomStack>
      <CustomStack direction="row" justifyContent="center" flexWrap="wrap">
        <Typography color="primary" variant="h3" align="center">
          {"Junior".split("").map(
            (x: string, i: number): JSX.Element => (
              <AnimatedLetter delay={0.5} i={i} x={x} key={i} />
            )
          )}
        </Typography>
        <Typography color="primary" variant="h3" align="center">
          {"Frontend".split("").map(
            (x: string, i: number): JSX.Element => (
              <AnimatedLetter delay={0.5} i={6 + i} x={x} key={i} />
            )
          )}
        </Typography>
        <Typography color="primary" variant="h3" align="center">
          {"Developer".split("").map(
            (x: string, i: number): JSX.Element => (
              <AnimatedLetter delay={0.5} i={14 + i} x={x} key={i} />
            )
          )}
        </Typography>
      </CustomStack>
    </Container>
  );
};

export default Home;
