import cloudy from '../assets/img/cloudy.png';
import rainy from '../assets/img/rainy.png';
import sunny from '../assets/img/sunny.png';

import {
  location, tempBtn, temp, weatherDescription,
  icon, minMax, todayIn, feelsLike, todayMinMax, humidity,
  pressure,
} from './dom';

const kelvinToCelsius = (temp) => Math.round((temp - 273.15) * 10) / 10;

const celsiusToFarenheit = (temp) => Math.round((((temp) * (9 / 5)) + 32) * 10) / 10;

const farenheitTocelsius = (temp) => Math.round(((temp - 32) * (5 / 9)) * 10) / 10;

const changeTempUnit = () => {
  const tempArr = [parseFloat(temp.textContent.slice(0, -1)), parseFloat(minMax.textContent.slice(0, minMax.textContent.split('').indexOf('°'))),
    parseFloat(minMax.textContent.slice(minMax.textContent.split('').indexOf('/') + 1), -1), parseFloat(feelsLike.textContent.slice(0, -1))];
  if (tempBtn.textContent === '°C') {
    tempBtn.textContent = '°F';
    tempArr.forEach((temp, index, arr) => { arr[index] = celsiusToFarenheit(temp); });
  } else {
    tempBtn.textContent = '°C';
    tempArr.forEach((temp, index, arr) => { arr[index] = farenheitTocelsius(temp); });
  }

  temp.textContent = `${tempArr[0]}°`;
  minMax.textContent = `${tempArr[1]}°/${tempArr[2]}°`;
  feelsLike.textContent = `${tempArr[3]}°`;
  todayMinMax.textContent = `${tempArr[1]}°/${tempArr[2]}°`;
};

const getIcon = (desc) => {
  let icon;
  if (desc === 'Clouds') {
    icon = cloudy;
  } else if (desc === 'Rain') {
    icon = rainy;
  } else if (desc === 'Clear') {
    icon = sunny;
  }
  return icon;
};

const fillPage = (weather) => {
  location.textContent = `${weather.name}, ${weather.sys.country} - Weather`;
  weatherDescription.textContent = `${weather.weather[0].description}`;
  todayIn.textContent = ` Weather today in ${weather.name}`;
  const tempArr = [weather.main.temp, weather.main.temp_max,
    weather.main.temp_min, weather.main.feels_like];
  tempArr.forEach((temp, index, arr) => { arr[index] = kelvinToCelsius(temp); });
  if (tempBtn.textContent === '°F') {
    tempArr.forEach((temp, index, arr) => { arr[index] = celsiusToFarenheit(temp); });
  }

  temp.textContent = `${tempArr[0]}°`;
  minMax.textContent = `${tempArr[1]}°/${tempArr[2]}°`;
  feelsLike.textContent = `${tempArr[3]}°`;
  todayMinMax.textContent = `${tempArr[1]}°/${tempArr[2]}°`;

  humidity.textContent = `${weather.main.humidity}`;
  pressure.textContent = `${weather.main.pressure}`;
  icon.src = getIcon(weather.weather[0].main);
};

export { fillPage, changeTempUnit };