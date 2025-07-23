import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slices/productSlice"
import userReducer from "./slices/userSlice"
import cartReducer from "./slices/cartSlice"
import orderReducer from "./slices/orderSlice"
import paymentReducer from "./slices/paymentSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
    cart: cartReducer,
    orders: orderReducer,
    payments: paymentReducer,
  },
})

export default store
