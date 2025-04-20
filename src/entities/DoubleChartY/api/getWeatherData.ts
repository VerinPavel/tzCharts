const getFormattedDate = (daysAgo: number, baseDate: Date) => {
  const date = new Date(baseDate);
  date.setDate(date.getDate() - daysAgo);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${day}.${month}`;
};

interface WeatherResponse {
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
}

const getWeatherData = (data: WeatherResponse | null) => {
  const baseDate = data ? new Date(data?.dt * 1000) : new Date();

  const mockValues = [
    { temperature: 30, humidity: 50 },
    { temperature: 25, humidity: 58 },
    { temperature: 28, humidity: 62 },
    { temperature: 22, humidity: 50 },
    { temperature: 28, humidity: 62 },
    { temperature: 20, humidity: 50 },
  ];

  const weatherData = mockValues.map((val, idx) => ({
    name: getFormattedDate(idx + 1, baseDate),
    ...val,
  }));

  if (data) {
    weatherData.push({
      name: getFormattedDate(0, baseDate),
      temperature: data?.main.temp,
      humidity: data?.main.humidity,
    });
  }

  return weatherData;
};

export { getWeatherData };
