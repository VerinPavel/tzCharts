import { ChartSkeleton } from '@/shared/ui/ChartSkeleton/ChartSkeleton';

import styles from './DoubleChartY.module.scss';
import { useOpenWeather } from '@/features/OpenWeather/model/useOpenWeather';
import { getWeatherData } from '../api/getWeatherData';

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

const DoubleChartY = () => {
  const { data, isLoading } = useOpenWeather();

  if (isLoading) {
    return <ChartSkeleton />;
  }

  const weatherData = getWeatherData(data || null);

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={weatherData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            yAxisId="left"
          />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
            yAxisId="right"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export { DoubleChartY };
