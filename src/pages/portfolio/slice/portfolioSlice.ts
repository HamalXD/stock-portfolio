import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TStocks } from "../../../types";

const loadFromStorage = (): TStocks[] => {
  const data = localStorage.getItem("portfolio");
  return data ? JSON.parse(data) : [];
};

const saveToStorage = (stocks: TStocks[]) => {
  (localStorage.getItem("portfolio"), JSON.stringify(stocks));
};

const initialState: TStocks[] = loadFromStorage();

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addStock: (state, action: PayloadAction<TStocks>) => {
      state.push(action.payload);
      saveToStorage(state);
    },
  },
});

export const { addStock } = portfolioSlice.actions;

export default portfolioSlice.reducer;
