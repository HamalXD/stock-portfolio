import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { stockPrices } from "../data/mockStocks";

export default function StockLineChart() {
  return (
    <div style={{ width: "70%", height: 300 }}>
      <ResponsiveContainer aspect={2}>
        <LineChart data={stockPrices}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="price"
            color="#2563eb"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
