import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";
import { NoEncryptionTwoTone } from "@mui/icons-material";

const defaultTheme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 700, md: 950, lg: 1200, xl: 1536 },
  },
});

const theme = createTheme({
  typography: {
    fontFamily: "Josefin Sans",
    h1: {
      fontSize: 144,
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 84,
      },
      fontWeight: "bolder",
      fontFamily: "Aladin",
      "& > span": {
        padding: "0 7px",
      },
    },
    h2: {
      fontSize: 88,
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 48,
      },
      fontWeight: "bold",
      fontFamily: "Aladin",
      "& > span": {
        padding: "0 4px",
      },
    },
    h3: {
      fontSize: 64,
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 36,
      },
      fontWeight: "bold",
      fontFamily: "Aladin",
      "& > span": {
        padding: "0 3px",
      },
    },
    h4: {
      fontSize: 28,
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 18,
      },
      fontWeight: "bold",
    },
    body1: {
      fontSize: 20,
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
    },
    body2: {
      fontSize: 18,
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: 10,
      },
      "& strong": {
        color: "#fabc2a",
      },
    },
  },
  palette: {
    primary: {
      main: "#00eaf0",
    },
    secondary: {
      main: "#fabc2a",
    },
    info: {
      main: "#d7b9d5",
    },
  },
  breakpoints: {
    values: defaultTheme.breakpoints.values,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#1b1b1e",
          overflowX: "hidden",
          minWidth: 350,
          padding: "0 !important",
        },
        "&::-webkit-scrollbar": {
          width: 6,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ffffff44",
          borderRadius: 2,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "0 100px !important",
          [defaultTheme.breakpoints.down("sm")]: {
            padding: "0 10px !important",
          },
          margin: "auto",
          maxWidth: 1200,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          maxWidth: 220,
          margin: "auto",
        },
        expandIconWrapper: {
          color: "#d7b9d5",
        },
        content: {
          flexGrow: 0,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          background: "transparent !important",
          transition: "all 0.5s ease",
          color: "#d7b9d5",
          fontSize: 18,
          [defaultTheme.breakpoints.down("sm")]: { fontSize: 14 },
          "&.Mui-selected": {
            color: "#fabc2a",
          },
          "& .MuiTouchRipple-root": {
            display: "none",
          },
          "&:hover": {
            color: "#fabc2a",
          },
        },
      },
    },
    MuiImageListItem: {
      styleOverrides: {
        root: {
          overflow: "hidden",
        },
        img: {
          cursor: "pointer",
          opacity: 0.8,
          transition: "all 0.2s ease",
          "&:hover": {
            opacity: 0.5,
            transform: "scale(105%)",
          },
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        root: {
          background: "#1b1b1edd",
          pointerEvents: "none",
        },
        title: {
          fontSize: 24,
          fontWeight: "bold",
          color: "#fabc2a",
        },
        subtitle: {
          fontSize: 18,
          color: "#d7b9d5",
          whiteSpace: "normal",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease",
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        ol: {
          justifyContent: "center",
        },
        separator: {
          color: "#00eaf0",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease",
          "&:hover": {
            color: "#00eaf0",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#1b1b1e",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        button: {
          color: "#fabc2a",
          "& .MuiListItemIcon-root": {
            color: "#fabc2a",
          },
          "&:hover": {
            color: "#00eaf0",
            "& .MuiListItemIcon-root": {
              color: "#00eaf0",
            },
          },
        },
      },
    },
  },
});

export default theme;
