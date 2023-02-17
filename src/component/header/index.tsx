import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
  Badge,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/reducer/appReducer";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const list = useSelector((state: any) => state?.products?.list);
  const cartCount = list.reduce((total, item) => total + item.quantity, 0);

  const isDarkTheme = useSelector((state: any) => state.app.isDarkTheme);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Shoe Store
        </Typography>
        <IconButton
          color="inherit"
          aria-label="cart"
          onClick={() => history("/cartDetails")}
        >
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkTheme}
                onChange={() => dispatch(changeTheme(!isDarkTheme))}
              />
            }
            label={isDarkTheme ? "Dark Theme" : "Light Theme"}
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
