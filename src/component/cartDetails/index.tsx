import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Paper,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { addToCart, removeFromCart } from "../../store/reducer/product";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

import { RootState } from "store/store";

const CartDetail = () => {
  const history = useNavigate();

  const cartItems = useSelector((state: RootState) =>
    state.products.list.filter((item) => item.inCart)
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Grid container justify="center" style={{ marginTop: 20 }}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h5" style={{ marginBottom: 20 }}>
              Cart
            </Typography>
            {cartItems.length === 0 ? (
              <Typography variant="subtitle1">No items in cart</Typography>
            ) : (
              cartItems.map((item) => (
                <div key={item.id}>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ height: "auto", width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="subtitle1">{item.name}</Typography>
                      <Typography variant="subtitle2">
                        {item.description}
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            -
                          </Button>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">
                            {item.quantity}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => dispatch(addToCart(item.id))}
                          >
                            +
                          </Button>
                        </Grid>
                        <Grid item>
                          <IconButton
                            aria-label="delete"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider style={{ margin: "20px 0" }} />
                </div>
              ))
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={() => history("/")}
            >
              <ArrowBack />
              Back
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartDetail;
