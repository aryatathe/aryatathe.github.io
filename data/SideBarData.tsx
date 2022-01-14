import * as React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import WebIcon from "@mui/icons-material/Web";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export interface SideBarDataInterface {
  href: string;
  icon: JSX.Element;
}

export const leftBarData: SideBarDataInterface[] = [
  {
    href: "mailto:aryatathe@gmail.com",
    icon: <MailOutlineIcon fontSize="inherit" />,
  },
  {
    href: "https://github.com/excalibur1702",
    icon: <GitHubIcon fontSize="inherit" />,
  },
  {
    href: "https://in.linkedin.com/in/arya-tathe",
    icon: <LinkedInIcon fontSize="inherit" />,
  },
];

export const rightBarData: SideBarDataInterface[] = [
  {
    href: "#contact",
    icon: <PermContactCalendarIcon fontSize="inherit" />,
  },
  {
    href: "#work",
    icon: <WebIcon fontSize="inherit" />,
  },
  {
    href: "#skills",
    icon: <ConstructionIcon fontSize="inherit" />,
  },
  {
    href: "#home",
    icon: <HomeIcon fontSize="inherit" />,
  },
];
