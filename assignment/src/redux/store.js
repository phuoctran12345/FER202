import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slices/productSlice"
import userReducer from "./slices/userSlice"
import cartReducer from "./slices/cartSlice"
import orderReducer from "./slices/orderSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
})

export default store
