import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TStocks } from "../../../types";
import { samplePortfolio } from "../../../data/portfolioTable";

const loadFromStorage = (): TStocks[] => {
  const data = localStorage.getItem("portfolio");

  if (data) {
    return JSON.parse(data);
  }

  localStorage.setItem("portfolio", JSON.stringify(samplePortfolio));

  return samplePortfolio;
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
    updateStock: (state, action: PayloadAction<TStocks>) => {
      const index = state.findIndex((s) => s.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
        saveToStorage(state);
      }
    },

    deleteStock: (state, action: PayloadAction<string>) => {
      const updated = state.filter((s) => s.id !== action.payload);

      saveToStorage(updated);
      return updated;
    },
  },
});

export const { addStock, updateStock, deleteStock } = portfolioSlice.actions;

export default portfolioSlice.reducer;
