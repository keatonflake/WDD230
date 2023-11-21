// const apiURL = `api.openweathermap.org/data/2.5/weather?lat=34.5262422&lon=-110.1700998&APPID=0ebc354dd4bb03b7881e46d16e8d4e12`;
const LAT = 34.5262422;
const LON = -110.1700998;
const KEY = "0ebc354dd4bb03b7881e46d16e8d4e12";
const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`;
const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`;

function displayWeather(data) {
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  const windSpeed = data.wind.speed.toFixed(0);
  const temperature = data.main.temp.toFixed(0);
  //   console.log(data);

  document.getElementById("weathericon").src = iconsrc;
  document.getElementById("weatherdesc").textContent = desc;
  document.getElementById("temperature").textContent = temperature;
  document.getElementById("windspeed").textContent = windSpeed;
}

const ONE_DAY = 24 * 60 * 60 * 1000;

function displayForecast(forecasts) {
  // Get dates for next three days
  console.log(forecasts);
  let dates = [];
  let mydate = new Date();
  for (let i = 0; i < 3; i++) {
    mydate = new Date(mydate.getTime() + ONE_DAY);
    nextdate = mydate.toISOString().slice(0, 10);
    dates.push(nextdate);
  }
  console.log(dates);

  // Find the object with the highest temperature for each day
  highTemps = dates.map((date) =>
    forecasts
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((currentObj, highObj) =>
        currentObj.main.temp > highObj.main.temp ? currentObj : highObj
      )
  );
  // Find the object with the lowest temperature for each day
  lowTemps = dates.map((date) =>
    forecasts
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((currentObj, lowObj) =>
        currentObj.main.temp < lowObj.main.temp ? currentObj : lowObj
      )
  );
  console.log(highTemps);
  console.log(lowTemps);

  // Add the forecast information to the HTML document
  weatherElt = document.querySelector(".forecast");
  for (let i = 0; i < 3; i++) {
    let newsection = document.createElement("section");
    newsection.innerHTML = `<h2>${dates[i]}</h2><p>High: ${highTemps[
      i
    ].main.temp.toFixed(0)}&deg;</p><p>Low: ${lowTemps[i].main.temp.toFixed(
      0
    )}&deg;</p>`;
    weatherElt.append(newsection);
  }
}

async function getTheForecast() {
    try {
        const response = await fetch(apiForecastURL);
        if (response.ok) {
          const data = await response.json();        
          displayForecast(data.list);
        } else {
          throw Error(await response.text());
        }
      } catch (error) {
        console.log(error);
      }
}

async function getTheWeather() {
  try {
    const response = await fetch(apiWeatherURL);
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
getTheForecast();
