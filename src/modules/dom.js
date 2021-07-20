import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

// eslint-disable-next-line no-undef
const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const location = document.getElementById('location');
const hour = document.getElementById('hour');
const temp = document.getElementById('temp');
const weatherDescription = document.getElementById('weather');
const icon = document.getElementById('weatherIcon');
const minMax = document.getElementById('minMax');
const todayIn = document.getElementById('todayIn');
const feelsLike = document.getElementById('feelsLike');
const todayMinMax = document.getElementById('todayMinMax');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const tempBtn = document.getElementById('tempBtn');
const errorDisp = document.getElementById('err');


export {
  errorModal, searchBar, searchBtn, location, hour, temp, weatherDescription,
  icon, minMax, todayIn, feelsLike, todayMinMax, humidity, pressure, tempBtn, errorDisp,
};