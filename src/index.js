import '@fortawesome/fontawesome-free/js/all';
import './main.scss';
import { getWeather } from './modules/weatherApi';
import { errorModal, searchBar, searchBtn, tempBtn } from './modules/dom';
import { fillPage, changeTempUnit } from './modules/helpers';

searchBtn.addEventListener("click", (e) => {
  e.preventDefault;
  getWeather(searchBar.value.trim())
  .then((response) => {
    console.log(response.cod)
    if(response.cod === '404') {
      throw new Error('City not found');
    } else {
      console.log(response);
      fillPage(response);
    }
  })
  .catch((err) => {
    console.log('catched');
    console.log(err);
    errorModal.show();
  })
});

tempBtn.addEventListener('click', () => {
  changeTempUnit();
});
