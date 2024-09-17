export default async function getWeather(zip) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}?key=R9YNYGYLHKQAZ4B8BR72HZ678`;
    const result = await fetch(url, {
      mode: 'cors',
    });
    const data = await result.json();    
    return {
      description: data.description,
      timeZone: data.timezone,
      cloudcover: data.currentConditions.cloudcover,
      dew: data.currentConditions.dew,
      feelslike: data.currentConditions.feelslike,
      humidity: data.currentConditions.humidity,
      icon: data.currentConditions.icon,
      snow: data.currentConditions.snow,
      snowdepth: data.currentConditions.snowdepth,
      temp: data.currentConditions.temp,
      visibility: data.currentConditions.visibility,
      winddir: data.currentConditions.winddir,
      windgust: data.currentConditions.windgust,
      windspeed: data.currentConditions.windspeed,
      
    }
  } catch (e) {
    throw new Error(`Error in getWeather: ${e}`);
  }
}
