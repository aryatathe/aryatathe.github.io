import * as React from "react";
import { useState, useEffect, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";

import SideBarButton from "./SideBarButton";
import {
  SideBarDataInterface,
  leftBarData,
  rightBarData,
} from "../data/SideBarData";

import { motion } from "framer-motion";

const CustomBox = styled(motion.div)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const VerticalDivider = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  left: 25,
  width: 2,
  height: "100%",
  backgroundColor: "#fabc2a88",
}));

const parent = {
  hidden: {},
  visible: {},
};
const line = {
  hidden: { height: 0 },
  visible: { height: "100%" },
};

export const LeftBar = (): JSX.Element => {
  return (
    <CustomBox initial="hidden" animate="visible" variants={parent}>
      <Stack
        sx={{
          position: "fixed",
          top: 0,
          left: 9,
          width: 52,
        }}
        direction="column"
      >
        <div style={{ position: "relative", height: 80 }}>
          <VerticalDivider
            variants={line}
            transition={{ delay: 0, duration: 0.6 }}
          />
        </div>
        {leftBarData.map(
          (x: SideBarDataInterface, i: number): JSX.Element => (
            <Fragment key={i}>
              <SideBarButton
                href={x.href}
                icon={x.icon}
                delay={0.3 + 0.54 * i + (i === 0 ? 0.2 : 0)}
              />
              {i !== leftBarData.length - 1 && (
                <div style={{ position: "relative", height: 32 }}>
                  <VerticalDivider
                    variants={line}
                    transition={{ delay: 0.7 + 0.54 * i, duration: 0.24 }}
                  />
                </div>
              )}
            </Fragment>
          )
        )}
      </Stack>
    </CustomBox>
  );
};

export const RightBar = (): JSX.Element => {
  return (
    <CustomBox initial="hidden" animate="visible" variants={parent}>
      <Stack
        sx={{
          position: "fixed",
          bottom: 0,
          right: 9,
          width: 52,
        }}
        direction="column-reverse"
      >
        <div style={{ position: "relative", height: 80 }}>
          <VerticalDivider
            style={{ bottom: 0 }}
            variants={line}
            transition={{ delay: 0, duration: 0.6 }}
          />
        </div>
        {rightBarData.map(
          (x: SideBarDataInterface, i: number): JSX.Element => (
            <Fragment key={i}>
              <SideBarButton
                href={x.href}
                icon={x.icon}
                delay={0.3 + 0.54 * i + (i === 0 ? 0.2 : 0)}
              />
              {i !== rightBarData.length - 1 && (
                <div style={{ position: "relative", height: 32 }}>
                  <VerticalDivider
                    style={{ bottom: 0 }}
                    variants={line}
                    transition={{ delay: 0.7 + 0.54 * i, duration: 0.24 }}
                  />
                </div>
              )}
            </Fragment>
          )
        )}
      </Stack>
    </CustomBox>
  );
};
