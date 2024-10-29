// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=1409ce05';

// async function fetchData() {
//   // Daten Fetchen
//   const response = await fetch(API_URL);
//   const data = await response.json();
//   // Zuweisungen der Daten an Elemente
//   document.querySelector('.card-image').src = data.Poster;
//   document.querySelector('.title').innerText = data.Title;
//   document.querySelector('.year').innerText = data.Year;
//   document.querySelector('.imdb').innerText = data.imdbRating;
// }

// fetchData();

// async function getWeatherForLatLong(lat, long) {
//   const response = await fetch(
//     `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,precipitation,rain,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=Europe%2FBerlin&forecast_days=1`
//   );
//   const data = await response.json();
//   return data;
// }

// navigator.geolocation.getCurrentPosition(async (position) => {
//   if (position) {
//     const weatherData = await getWeatherForLatLong(
//       position.coords.latitude,
//       position.coords.longitude
//     );
//     console.log('weatherData', weatherData);
//     const temp = weatherData.current.temperature_2m;
//     const humidity = weatherData.current.relative_humidity_2m;

//     document.querySelector('#location').innerText = 'Wolfsburg';
//     document.querySelector('.temp').innerText = `${temp} C`;
//     document.querySelector('.humidity').innerText = `${humidity} %`;
//   }
// });

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formdata = new FormData(event.target);
  const json = Object.fromEntries(formdata);
  console.log(json);
});
