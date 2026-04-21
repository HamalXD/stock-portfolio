import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { volumeData } from "../data/mockStocks";

export default function VolumeChart() {
  return (
    <div style={{ width: "70%", height: 300 }}>
      <ResponsiveContainer aspect={2}>
        <BarChart data={volumeData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />
          <YAxis />

          <Tooltip />

          <Bar dataKey="volume" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
