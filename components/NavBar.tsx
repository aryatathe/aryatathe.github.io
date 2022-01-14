import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "@mui/material/Link";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import WebIcon from "@mui/icons-material/Web";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

const CustomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  right: 10,
  top: 10,
  zIndex: 100,
  padding: 0,
  background: "transparent",
  "&:hover": {
    background: "transparent",
    "& .MuiSvgIcon-root": {
      transform: "scale(110%)",
      color: "#00eaf0",
    },
  },
}));

const icons: JSX.Element[] = [
  <HomeIcon fontSize="medium" />,
  <ConstructionIcon fontSize="medium" />,
  <WebIcon fontSize="medium" />,
  <PermContactCalendarIcon fontSize="medium" />,
];

const NavBar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <CustomBox>
      <CustomIconButton
        color="secondary"
        onClick={(): void => setOpen(true)}
        size="large"
      >
        <MenuIcon fontSize="inherit" />
      </CustomIconButton>
      <Drawer anchor="right" open={open} onClose={(): void => setOpen(false)}>
        <Box
          role="presentation"
          onClick={(): void => setOpen(false)}
          onKeyDown={(): void => setOpen(false)}
        >
          <List>
            {["Home", "Skills", "Work", "Contact"].map(
              (x: string, i: number): JSX.Element => (
                <Link underline="none" href={`#${x.toLowerCase()}`}>
                  <ListItem button disableRipple key={x}>
                    <ListItemIcon>{icons[i]}</ListItemIcon>
                    <ListItemText primary={x} />
                  </ListItem>
                </Link>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </CustomBox>
  );
};

export default NavBar;
