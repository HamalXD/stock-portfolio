import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { RootState } from "../app/store";
import { useSelector } from "react-redux";

export default function VolumeChart() {
  const stocks = useSelector((state: RootState) => state.portfolio);

  const data = stocks.map((s: any) => ({
    name: s.ticker,
    value: s.currentPrice,
  }));
  return (
    <div className="w-full">
      <h2 className="text-center font-bold mb-2">Portfolio Value per Stock</h2>

      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />

          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
