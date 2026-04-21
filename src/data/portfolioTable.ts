import type { TStocks } from "../types";

export const samplePortfolio: TStocks[] = [
  {
    id: "1",
    ticker: "AAPL",
    companyName: "Apple Inc.",
    quantity: 10,
    purchasePrice: 150,
    currentPrice: 175,
    date: "2024-01-10",
  },
  {
    id: "2",
    ticker: "GOOGL",
    companyName: "Google",
    quantity: 5,
    purchasePrice: 2800,
    currentPrice: 2950,
    date: "2024-02-05",
  },
  {
    id: "3",
    ticker: "TSLA",
    companyName: "Tesla",
    quantity: 8,
    purchasePrice: 700,
    currentPrice: 820,
    date: "2024-03-01",
  },
];
