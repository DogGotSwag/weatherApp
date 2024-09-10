async function getWeather(zip) {
  const url =
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}?key=R9YNYGYLHKQAZ4B8BR72HZ678`;
  const result = await fetch(url, {
    mode: 'cors',
  });
  const data = await result.json();
  console.log(data);
}

getWeather('79928');
