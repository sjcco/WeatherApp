import '@fortawesome/fontawesome-free/js/all';
import './main.scss';
import getWeather from './modules/weatherApi';
import {
  errorModal, searchBar, searchBtn, tempBtn, errorDisp,
} from './modules/dom';
import { fillPage, changeTempUnit } from './modules/helpers';

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(searchBar.value.trim())
    .then((response) => {
      if (response.cod === '404') {
        throw new Error('City not found');
      } else {
        fillPage(response);
      }
    })
    .catch((err) => {
      errorDisp.textContent = err;
      errorModal.show();
    });
});

tempBtn.addEventListener('click', () => {
  changeTempUnit();
});
