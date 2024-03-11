import GetLocale from "./GetLocale"; 

const apiKey = "016525edf4e18a301c102a29c1ee5003"; 

async function fetchWeather() {

  const localeGeo = await GetLocale.getLocaleGeo();

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${localeGeo.lat}&lon=${localeGeo.lon}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);

  const data = await response.json();

  const weather = {
    temp: data.main.temp,
    tempMax: data.main.temp_max,
    tempMin: data.main.temp_min,
    feelsLike: data.main.feels_like,
    location: data.name,
    weather: data.weather[0].main,
    weatherId: data.weather[0].id,
    weatherImgSrc: '',
  }
  
  return weather;
}

const weatherService = { fetchWeather };

export default weatherService;