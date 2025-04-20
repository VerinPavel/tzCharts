import axios from 'axios';

const API_KEY = 'b8113f5b1d4b8d118cb122b89b01cfe7'; // Мой ключ
const LOCATION = 'Moscow,Russia'; //Локация

const fetchOpenWeatherData = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&APPID=${API_KEY}&units=metric`,
  );
  return response.data;
};

export { fetchOpenWeatherData };
