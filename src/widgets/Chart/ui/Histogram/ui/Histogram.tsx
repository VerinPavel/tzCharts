import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FC } from 'react';

interface HistogramProps {
  data?: Array<{ name: string; temperature: number }>;
}

const Histogram: FC<HistogramProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export { Histogram };
