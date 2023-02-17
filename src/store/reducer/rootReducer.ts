import { combineReducers, ReducersMapObject } from "@reduxjs/toolkit";
import appReducer from "./appReducer";
import products from "./product";
interface IStore {
  app: any;
  products: any;
}
export default combineReducers<ReducersMapObject<IStore, any>>({
  app: appReducer,
  products: products,
});
