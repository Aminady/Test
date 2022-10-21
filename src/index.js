import './style.css';

function setTheme() {
    const root = document.documentElement;
      const newTheme = root.className === 'dark' ? 'light' : 'dark';
      root.className = newTheme;
};

// async function requestWeatherAPI(input) {
//     const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`, {mode: 'cors'})
//     const weatherData = await response.json();
//     try { 
//         console.log(weatherData);
//     } catch(err) {
//     console.log(err);
//     }

// }

const searchBar = document.createElement('div')
searchBar.className = 'search-bar';
document.body.appendChild(searchBar);
searchBar.innerHTML = `
<div id="mySidenav" class="sidenav">
<a id="closeBtn" href="#" class="close">&times;</a>
<ul>
  <li class="localisation"><a href="#">My Weather</a></li>
  <li><a href="https://github.com/Aminady" target="_blank">Github</a></li>
  <li class="dark-mode"><a href="#">Mode</a></li>
</ul>
</div>

<a href="#" id="openBtn">
<span class="burger-icon">
  <span></span>
  <span></span>
  <span></span>
  </span>
  </a>
  <input type="text" name="search" id="search" placeholder="Enter a city or a country name">
  <div class="loupe-container"><svg class="loupe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg></div>

`;


const weatherAppBody = document.createElement('div');
weatherAppBody.className = 'weather-app-body';
document.body.appendChild(weatherAppBody);
weatherAppBody.innerHTML = `        
<div class="country-localisation">
    <p class="country"></p>
</div>

<div class="weather-icon">
</div>

<div class="temp-weather-date">
    <p class="temperature"></p>
    <p class="weather"></p>
    <p class="date"></p>
</div>

<div class="sun-course">
    <p class="sunrise"></p>
    <p class="sunset"></p>
</div>
`;

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

let country = document.querySelector('.country');
let temperature = document.querySelector('.temperature');
let weather = document.querySelector('.weather');
let date = document.querySelector('.date');
let sunrise = document.querySelector('.sunrise');
let sunset = document.querySelector('.sunset');
let icon = document.querySelector('.weather-icon');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function dateParser() {
    let newDate = new Date().toLocaleDateString("en-EN", {
        month: "2-digit",
        day: "2-digit",
    });
    return newDate;
}

function getSunsetAndSunriseTime(input) { 
    let date = new Date(input * 1000);
    let hhmm = date.toLocaleTimeString().slice(0, 5);
    return hhmm
};

async function requestWeatherAPI(input) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=bf6a7f8b83a17833aa9772415f2e3e57`)
    const weatherData = await response.json();
    try { 
        country.textContent = weatherData.name + ", " + weatherData.sys.country;
        temperature.textContent = parseInt((weatherData.main.temp) * 0.10) + " °C";
        weather.textContent = capitalizeFirstLetter(weatherData.weather[0].description);
        date.textContent = dateParser();
        sunrise.textContent = `Sunrise : ${getSunsetAndSunriseTime(weatherData.sys.sunrise + weatherData.timezone)}`;
        sunset.textContent = `Sunset : ${getSunsetAndSunriseTime(weatherData.sys.sunset + weatherData.timezone)}`;
    } catch(err) {
        if(weatherData.message == "city not found"){
            country.textContent = 'Location not found.';
            temperature.textContent = "";
            weather.textContent = "";
            date.textContent = "";
            sunrise.textContent = "";
            sunset.textContent = "";
            icon.innerHTML = `<svg class="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M169.6 291.3C172.8 286.9 179.2 286.9 182.4 291.3C195.6 308.6 223.1 349 223.1 369C223.1 395 202.5 416 175.1 416C149.5 416 127.1 395 127.1 369C127.1 349 156.6 308.6 169.6 291.3H169.6zM368 346.8C377.9 355.6 378.7 370.8 369.9 380.7C361 390.6 345.9 391.4 335.1 382.6C314.7 363.5 286.7 352 256 352C242.7 352 232 341.3 232 328C232 314.7 242.7 304 256 304C299 304 338.3 320.2 368 346.8L368 346.8zM335.6 176C353.3 176 367.6 190.3 367.6 208C367.6 225.7 353.3 240 335.6 240C317.1 240 303.6 225.7 303.6 208C303.6 190.3 317.1 176 335.6 176zM175.6 240C157.1 240 143.6 225.7 143.6 208C143.6 190.3 157.1 176 175.6 176C193.3 176 207.6 190.3 207.6 208C207.6 225.7 193.3 240 175.6 240zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM175.9 448C200.5 458.3 227.6 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 308.7 67.59 356.8 99.88 393.4C110.4 425.4 140.9 447.9 175.9 448V448z"/></svg> `;
        } else {
            return err;
            }
        }
}

async function requestLocalisation() { 
    const response = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=18f81c5c2973449488cd1ce29cfea360', {mode: 'cors'});
    const locData = await response.json();
    try {
      requestWeatherAPI(locData.city);
    }
    catch(err) {
      console.log(err);
    }
};

let localize = document.querySelector('.localisation');
let userInput = document.querySelector('#search');
let search = document.querySelector('.loupe');
let themeChange = document.querySelector('.dark-mode');

search.addEventListener('click', () => {
    requestWeatherAPI(userInput.value);
});

document.body.onload = requestLocalisation();

localize.addEventListener('click', requestLocalisation );

themeChange.addEventListener('click', setTheme)
