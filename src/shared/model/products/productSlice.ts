import { BASE_URL } from "@/shared/api/_BASE";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/get-all-products`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

type Products = {
  id: string | number;
  name: string;
  description: string;
  price: string | number;
  currency: string;
  type: string;
  photo: string[];
};

interface ProductsState {
  products: Products[];
  filtered: Products[];
  related: Products[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  filtered: [],
  related: [],
  loading: false,
  error: null,
};

export const shuffle = (arr: Products[]) =>
  [...arr].sort(() => 0.5 - Math.random());

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.products.filter(({ price }) => price < payload);
    },
    getRelatedProducts: (state, { payload }) => {
      const list = state.products.filter(
        (category) => category.id === payload
      );
      state.related = shuffle(list);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
      console.log("rejected");
    });
  },
});

export const { filterByPrice, getRelatedProducts } = productSlice.actions;

export default productSlice.reducer;
