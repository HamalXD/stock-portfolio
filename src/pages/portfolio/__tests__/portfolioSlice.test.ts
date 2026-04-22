import reducer, {
  addStock,
  updateStock,
  deleteStock,
} from "../slice/portfolioSlice";

import type { TStocks } from "../../../types";

const stock: TStocks = {
  id: "1",
  ticker: "AAPL",
  companyName: "Apple",
  quantity: 10,
  purchasePrice: 100,
  currentPrice: 150,
  date: "2024-01-01",
};

describe("portfolioSlice", () => {
  test("adds stock", () => {
    const result = reducer([], addStock(stock));

    expect(result.length).toBe(1);
  });

  test("updates stock", () => {
    const result = reducer([stock], updateStock({ ...stock, quantity: 20 }));

    expect(result[0].quantity).toBe(20);
  });

  test("deletes stock", () => {
    const result = reducer([stock], deleteStock("1"));

    expect(result.length).toBe(0);
  });
});
