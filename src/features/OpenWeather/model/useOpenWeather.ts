import { useQuery } from 'react-query';
import { fetchOpenWeatherData } from '../api/OpenWeather';

const useOpenWeather = () => {
  const { data, isLoading, error } = useQuery(
    'weatherData',
    fetchOpenWeatherData,
    {
      staleTime: 600000, // Время жизни кеша — 10 минут
      cacheTime: 900000, // Время, через которое кеш будет удален — 15 минут
      refetchOnWindowFocus: false,
    },
  );

  return { data, isLoading, error };
};

export { useOpenWeather };
