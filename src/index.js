import './style.css';
import getWeather from './getWeather';

const form = document.querySelector('form');
const input = document.querySelector('input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!input.validity.valid) {
    input.setCustomValidity('Use U.S postal code plz');
    input.reportValidity();
  } else {
    input.setCustomValidity('');
    getWeather('79928')
      .then((data) => {
        console.log(data.description);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }
});
