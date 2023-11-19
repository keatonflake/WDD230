// const apiURL = `api.openweathermap.org/data/2.5/weather?lat=34.5262422&lon=-110.1700998&APPID=0ebc354dd4bb03b7881e46d16e8d4e12`;
const LAT = 34.5262422;
const LON = -110.1700998;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=0ebc354dd4bb03b7881e46d16e8d4e12&units=imperial`;

function displayWeather(data) {
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  const windSpeed = data.wind.speed.toFixed(0);
  const temperature = data.main.temp.toFixed(0);
  console.log(data)

  document.getElementById('weathericon').src = iconsrc;
  document.getElementById('weatherdesc').textContent = desc;
  document.getElementById('temperature').textContent = temperature;
  document.getElementById('windspeed').textContent = windSpeed;
}

async function getTheWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getTheWeather();
