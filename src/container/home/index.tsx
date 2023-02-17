import * as React from "react";
// Import MUI stuff
import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./home.scss";
import { useSelector } from "react-redux";
import { PaletteType } from "@material-ui/core";
import Header from "../../component/header";
import Footer from "../../component/footer/index";
import { Outlet } from "react-router-dom";

// Define theme settings
const light = {
  palette: {
    mode: "light" as PaletteType,
  },
};

const dark = {
  palette: {
    mode: "dark" as PaletteType,
  },
};
const Home = () => {
  const isDarkTheme = useSelector((state: any) => state.app.isDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />

      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};
export default Home;
