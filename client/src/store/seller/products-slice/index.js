import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  sellerProductList: [],
};

export const addNewProduct = createAsyncThunk(
  "/products/addnewproduct",
  async (formData) => {
    const result = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/seller/products/add`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const fetchAllMyProducts = createAsyncThunk(
  "/products/fetchAllMyProducts",
  async ({ sellerId }) => {
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/seller/products/get/${sellerId}`
    );

    return result?.data;
  }
);

export const editProduct = createAsyncThunk(
  "/products/editProduct",
  async ({ id, formData }) => {
    const result = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/seller/products/edit/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "/products/deleteProduct",
  async (id) => {
    const result = await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/seller/products/delete/${id}`
    );

    return result?.data;
  }
);

const SellerProductsSlice = createSlice({
  name: "sellerProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMyProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllMyProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sellerProductList = action.payload.data;
      })
      .addCase(fetchAllMyProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.sellerProductList = [];
      });
  },
});

export default SellerProductsSlice.reducer;