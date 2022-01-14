import * as React from "react";
import { useState, useEffect } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./styles";

import LoadingScreen from "./components/LoadingScreen";
import Home from "./screens/Home";
import Skills from "./screens/Skills";
import NavBar from "./components/NavBar";
import { LeftBar, RightBar } from "./components/SideBars";
import Work from "./screens/Work";
import Contact from "./screens/Contact";

import MouseTrail from "./components/MouseTrail";

const App = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <MouseTrail />
          <LeftBar />
          <RightBar />
          <NavBar />
          <Home />
          <Skills />
          <Work />
          <Contact />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
