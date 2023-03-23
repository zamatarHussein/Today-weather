// import elements

const inputEl = document.querySelector('.inputEl');
const formEl = document.querySelector('.formEl');
const cityname = document.querySelector('.cityname');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const imgEl = document.querySelector('.imgEl');

// promise

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     // resolve('success');
//     reject('Error occured');
//   }, 5000);
// });

// myPromise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// async -> await

const fetchWeatherInformation = async (cityName) => {
  const apiKey = '8e8e45697ffef96dffadb26b88253653';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  //   console.log(data);

  displayData(data);
};

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = inputEl.value;

  fetchWeatherInformation(inputValue);
});

const displayData = (data) => {
  const { main, weather, wind, name, sys } = data;

  const { country } = sys;

  const { description, icon } = weather[0];

  temp.textContent = (main.temp - 273).toFixed(2);
  humidity.textContent = main.humidity;
  desc.textContent = description;
  windSpeed.textContent = wind.speed;
  cityname.textContent = `${name}, ${country}`;

  // change src of the image

  imgEl.src = `http://openweathermap.org/img/w/${icon}.png`;
};
