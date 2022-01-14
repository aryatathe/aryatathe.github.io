import * as React from "react";
import { useState, useEffect, Fragment } from "react";
import { styled } from "@mui/material/styles";

import { motion } from "framer-motion";

const CustomSpan = styled(motion.span)(({ theme }) => ({
  position: "relative",
  "&::after": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}));

const AnimatedLetter = (props: {
  x: string;
  i: number;
  delay?: number;
}): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [flipped, setFlipped] = useState<boolean>(false);

  useEffect(() => {
    if (!hovered) return;
    const timer = setTimeout(() => {
      setHovered(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [hovered]);

  useEffect(() => {
    if (!hovered) return;
    const timer = setTimeout(() => {
      setFlipped(true);
    }, 250);
    return () => clearTimeout(timer);
  }, [hovered]);

  useEffect(() => {
    if (!flipped) return;
    const timer = setTimeout(() => {
      setFlipped(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [flipped]);

  return (
    <CustomSpan
      style={{
        color: flipped ? "#fabc2a" : "inherit",
        display: "inline-block",
      }}
      initial={{ rotateY: 90 }}
      whileInView={{
        rotateY: hovered ? [0, 180, 0] : 0,
        transition: {
          delay: hovered ? 0 : (props.delay ? props.delay : 0) + props.i / 25,
          duration: hovered ? 1 : 0.5,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      exit={{
        rotateY: 90,
        transition: { delay: 0, duration: 0.5, ease: "easeInOut" },
      }}
      onHoverStart={() => setHovered(true)}
    >
      {props.x}
    </CustomSpan>
  );
};

export default AnimatedLetter;
