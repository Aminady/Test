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
<input type="text" name="search" id="search" placeholder="Enter a city or a country name">
<svg class="loupe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg></div>
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

const footer = document.createElement('div');
footer.className = 'footer';
document.body.appendChild(footer);
footer.innerHTML = `
    <svg class="localisation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
    <a href="https://github.com/Aminady" target="_blank" rel="noreferrer">
    <svg class="git" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
    <svg class="dark-mode nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M421.6 379.9c-.6641 0-1.35 .0625-2.049 .1953c-11.24 2.143-22.37 3.17-33.32 3.17c-94.81 0-174.1-77.14-174.1-175.5c0-63.19 33.79-121.3 88.73-152.6c8.467-4.812 6.339-17.66-3.279-19.44c-11.2-2.078-29.53-3.746-40.9-3.746C132.3 31.1 32 132.2 32 256c0 123.6 100.1 224 223.8 224c69.04 0 132.1-31.45 173.8-82.93C435.3 389.1 429.1 379.9 421.6 379.9zM255.8 432C158.9 432 80 353 80 256c0-76.32 48.77-141.4 116.7-165.8C175.2 125 163.2 165.6 163.2 207.8c0 99.44 65.13 183.9 154.9 212.8C298.5 428.1 277.4 432 255.8 432z"/></svg>
`;

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
