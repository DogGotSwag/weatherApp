import './style.css';
import getWeather from './getWeather';
import getGif from './getGif'
import displayData from './displayData'

getGif('start');

const form = document.querySelector('form');
const input = document.querySelector('input');
form.addEventListener('submit', async(event) => {
  event.preventDefault();
  if (!input.validity.valid) {
    input.setCustomValidity('Use U.S postal code plz');
    input.reportValidity();
    input.setCustomValidity('');
    getGif('bad');
    displayData();
  } else {
    getGif('loading');
    input.setCustomValidity('');
    const data = await getWeather('79928')
    const gif = getGif(data.icon.split('-').join(' '));

    await Promise.all( [data, gif ]).then( ()=>{
      displayData(data);
    });
  }
});
