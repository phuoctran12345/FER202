import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../service/api"

// LIST all Payment History
export const fetchAllPaymentHistory = createAsyncThunk("payments/fetchAllPaymentHistory", async () => {
  const response = await api.get("/paymentHistory")
  return response.data
})

const paymentSlice = createSlice({
  name: "payments",
  initialState: {
    paymentHistory: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPaymentHistory.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchAllPaymentHistory.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.paymentHistory = action.payload
      })
      .addCase(fetchAllPaymentHistory.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export default paymentSlice.reducer
