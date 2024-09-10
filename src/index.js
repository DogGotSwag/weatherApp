async function getWeather() {
  const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=R9YNYGYLHKQAZ4B8BR72HZ678';
  const result = await fetch(url, {
    mode: 'cors',
  });
  const data = await result.json();
  console.log(data);
}

getWeather();
