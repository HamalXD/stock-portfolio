import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { RootState } from "../app/store";
import { useSelector } from "react-redux";

export default function StockLineChart() {
  const stocks = useSelector((state: RootState) => state.portfolio);

  const data = stocks.map((s: any) => ({
    name: s.ticker,
    value: s.currentPrice,
  }));

  return (
    <div className="w-full">
      <h2 className="text-center font-bold mb-2">
        Stock Price Trend (Current Price)
      </h2>

      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
