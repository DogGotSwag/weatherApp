import './style.css';
import getWeather from './getWeather';
import getGif from './getGif'

// getGif('start');

const form = document.querySelector('form');
const input = document.querySelector('input');
form.addEventListener('submit', async(event) => {
  event.preventDefault();
  if (!input.validity.valid) {
    input.setCustomValidity('Use U.S postal code plz');
    input.reportValidity();
  } else {
    input.setCustomValidity('');
    const data = await getWeather('79928')
    console.log(data);
    
  }
});
