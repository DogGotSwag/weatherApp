import './style.css';

async function getWeather(zip) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}?key=R9YNYGYLHKQAZ4B8BR72HZ678`;
    const result = await fetch(url, {
      mode: 'cors',
    });
    const data = await result.json();
    return data;
  } catch (e) {
    throw new Error(`Error in getWeather: ${e}`);
  }
}



getWeather('79928')
  .then( (data) => {
    console.log(data.description);    
  })
  .catch( (e) =>{
    throw new Error(e);
});

console.log("Hello");

