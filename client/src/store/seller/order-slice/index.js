import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  isLoading: false,
  orderId: null,
  orderList: [],
  orderDetails: null,
};

export const getAllOrdersBySellerId = createAsyncThunk(
  "/order/getAllOrdersBySellerId",
  async (sellerId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/seller/orders/get/${sellerId}`
    );

    return response.data;
  }
);

export const getSellerOrderDetails = createAsyncThunk(
  "/order/getSellerOrderDetails",
  async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/seller/orders/details/${id}`
    );

    return response.data;
  }
);

const sellerOrderSlice = createSlice({
  name: "sellerOrderSlice",
  initialState,
  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrdersBySellerId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersBySellerId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      })
      .addCase(getAllOrdersBySellerId.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      })
      .addCase(getSellerOrderDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSellerOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getSellerOrderDetails.rejected, (state) => {
        state.isLoading = false;
        state.orderDetails = null;
      });
  },
});


export const { resetOrderDetails } = sellerOrderSlice.actions;
export default sellerOrderSlice.reducer;