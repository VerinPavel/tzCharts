import { FC } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface LineChartCustomProps {
  data: Array<{ name: string; temperature: number }>;
}

const LineChartCustom: FC<LineChartCustomProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="temperature"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export { LineChartCustom };
