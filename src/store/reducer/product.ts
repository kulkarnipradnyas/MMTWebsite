import { createSlice } from "@reduxjs/toolkit";
import clone from "lodash-es/clone";

interface IProductProps {
  id: number;
  name: string;
  description: string;
  quantity: number;
  inCart: boolean;
  price: number;
  image: string;
}
interface IProducts {
  list: IProductProps[];
}
export const productList = [
  {
    id: 1,
    name: "Adidas Superstar",
    description: "Classic Adidas shoe with the iconic stripes",
    price: 1000,
    image:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
    quantity: 0,
    inCart: false,
  },
  {
    id: 2,
    name: "Nike Air Max 270",
    description: "Sleek and comfortable Nike running shoe",
    price: 2000,
    image:
      "https://images.pexels.com/photos/6594253/pexels-photo-6594253.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quantity: 0,
    inCart: false,
  },
  {
    id: 3,
    name: "Vans Old Skool",
    description: "Skateboarding shoe with signature Vans stripe",
    price: 1500,
    image:
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quantity: 0,
    inCart: false,
  },
  {
    id: 4,
    name: "Puma Cali",
    description: "Modern Puma shoe with a retro vibe",
    price: 1000,
    image:
      "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quantity: 0,
    inCart: false,
  },
  {
    id: 5,
    name: "Reebok Classic",
    description: "Timeless Reebok shoe with a simple design",
    price: 1800,
    image:
      "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quantity: 0,
    inCart: false,
  },
  {
    id: 6,
    name: "New Balance 990",
    description: "High-performance New Balance running shoe",
    price: 1000,
    image:
      "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quantity: 0,
    inCart: false,
  },
];
const initialState: IProducts = {
  list: productList,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => ({
      ...state,
      list: action.payload,
    }),
    addToCart: (state, { payload }) => {
      const productId = payload;
      const product = state.list.map((p) => {
        const newProd = clone(p);
        if (p.id === productId) {
          newProd.quantity += 1;
          newProd.inCart = true;
        }
        return newProd;
      });

      return {
        ...state,
        list: product,
      };
    },
    removeFromCart: (state, { payload }) => {
      const productId = payload;

      const product = state.list.map((p) => {
        const newProd = clone(p);
        if (p.id === productId) {
          if (newProd && newProd.quantity > 0) {
            const newQuantity = newProd.quantity - 1;
            newProd.quantity = newQuantity;

            newProd.inCart = newQuantity !== 0;
          } else if (newProd && newProd.quantity === 0) {
            newProd.quantity = 0;
            newProd.inCart = false;
          }
        }

        return newProd;
      });

      return {
        ...state,
        list: product,
      };
    },
    updateQuantity: (state, { payload }) => {
      const { productId, quantity } = payload;
      const product = state.list.map((p) => {
        const newProd = clone(p);

        if (p.id === productId) {
          newProd.quantity = quantity;
        }
        return newProd;
      });

      return {
        ...state,
        list: product,
      };
    },
  },
});

export const { setProducts, addToCart, removeFromCart, updateQuantity } =
  productsSlice.actions;

export default productsSlice.reducer;
