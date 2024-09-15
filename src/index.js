import './style.css';
import getWeather from './getWeather';

function intialGif() {
  const img = document.querySelector('img');
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=84bbjIY88igM5FQdGqNXKmW0A5ajiRxH&s=start',
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    });

}

intialGif();

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
