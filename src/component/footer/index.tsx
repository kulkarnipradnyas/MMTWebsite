import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} My E-commerce Store | Developed by
        {" Pradnya Kulkarni "}
        <Link
          href="https://wwww.gooogle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          MMT Inc.
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
