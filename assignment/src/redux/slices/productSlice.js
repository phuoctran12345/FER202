import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../service/api"

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await api.get("/products")
  return response.data
})

export const fetchProductById = createAsyncThunk("products/fetchProductById", async (id) => {
  const response = await api.get(`/products/${id}`)
  return response.data
})

export const createProduct = createAsyncThunk("products/createProduct", async (productData) => {
  const response = await api.post("/products", productData)
  return response.data
})

export const updateProduct = createAsyncThunk("products/updateProduct", async ({ id, product }) => {
  const response = await api.put(`/products/${id}`, product)
  return response.data
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  await api.delete(`/products/${id}`)
  return id
})

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading"
        state.selectedProduct = null
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.selectedProduct = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload)
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((p) => p.id === action.payload.id)
        if (index !== -1) {
          state.products[index] = action.payload
        }
        if (state.selectedProduct?.id === action.payload.id) {
          state.selectedProduct = action.payload
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload)
      })
  },
})

export const { clearSelectedProduct } = productSlice.actions
export default productSlice.reducer
