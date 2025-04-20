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

interface AverageChartProps {
  data?: Array<{ name: string; temperature: number }>;
}

const AverageChart: FC<AverageChartProps> = ({ data }) => {
  // Функция для расчета скользящей средней
  const dataWithMovingAverage = data?.map((item, index, array) => ({
    ...item,
    movingAverage:
      index >= 2
        ? (array[index - 2].temperature +
            array[index - 1].temperature +
            item.temperature) /
          3
        : item.temperature,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={dataWithMovingAverage}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
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
        <Line
          type="monotone"
          dataKey="movingAverage"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export { AverageChart };
