import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  addToCart,
  removeFromCart,
  setProducts,
} from "../../store/reducer/product";
import { RootState } from "store/store";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  productItem: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    textAlign: "center",
    height: "100%",
    border: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary,
  },

  cartButton: {
    marginLeft: "auto",
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.palette.type === "dark"
        ? theme.palette.grey[400]
        : theme.palette.text.primary,
  },
  productImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    marginBottom: theme.spacing(2),
  },

  quantityButton: {
    minWidth: 0,
    padding: 0,
  },
}));

const DefaultPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    // Load cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    dispatch(setProducts(cartItems));
    setIsData(true);
  }, []);
  useEffect(() => {
    // let localstorage data get loaded then set into storage again
    if (isData) {
      localStorage.setItem(
        "cartItems",
        JSON.stringify(structuredClone(products.list))
      );
    }
  }, [products.list, isData]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.list?.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <div className={classes.productItem}>
              <img
                src={product.image}
                alt={product.name}
                className={classes.productImage}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <div className={classes.quantity}>
                <Button
                  className={classes.quantityButton}
                  onClick={() => dispatch(removeFromCart(product.id))}
                  disabled={!product.inCart}
                >
                  <RemoveIcon />
                </Button>
                <span>{product.quantity || 0}</span>
                <Button
                  className={classes.quantityButton}
                  onClick={() => {
                    debugger;
                    dispatch(addToCart(product.id));
                  }}
                >
                  <AddIcon />
                </Button>
              </div>
              <Button
                className={classes.cartButton}
                variant="contained"
                color="primary"
                disabled={!product.quantity}
                onClick={() => dispatch(addToCart(product.id))}
              >
                Add to Cart
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DefaultPage;
