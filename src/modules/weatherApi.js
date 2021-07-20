const getAdress = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.WEATHER_API_KEY}`;

async function getWeather(location) {
  const response = await fetch(getAdress(location), { mode: 'cors' });
  const weatherData = await response.json();
  return weatherData;
}

export default getWeather;