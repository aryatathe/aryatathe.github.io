import * as React from "react";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";

import { motion } from "framer-motion";

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  background: "transparent",
  "&:hover": {
    background: "transparent",
    "& .MuiSvgIcon-root": {
      transform: "scale(110%)",
      color: "#00eaf0",
    },
  },
}));

const child = {
  hidden: { opacity: 0, cursor: "default" },
  visible: { opacity: 1, cursor: "auto" },
};

interface SideBarButtonProps {
  href: string;
  icon: JSX.Element;
  delay: number;
}

const SideBarButton = (props: SideBarButtonProps): JSX.Element => {
  return (
    <motion.a
      href={props.href}
      variants={child}
      transition={{ delay: props.delay, duration: 0.2 }}
    >
      <CustomIconButton disableRipple color="secondary" size="large">
        {props.icon}
      </CustomIconButton>
    </motion.a>
  );
};

export default SideBarButton;
