//API URL: https://api.openweathermap.org/appid=f9bafe440ab48b79e4c70cf1e542826e
//API key: f9bafe440ab48b79e4c70cf1e542826e

// import the convertTemp.js and getDaylight.js scripts with their default export
import { setDayLight } from "./getDayight.js"
import { setTemp } from "./convertTemp.js"
// import { export function } from 'module name'

// declare any variables needed

const temp = document.querySelector("#tempData");
const humid = document.querySelector("#humidData");
const conditions = document.querySelector("#conditionsData");

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.querySelector("#goBttn").addEventListener('click', () => {
    console.log("Button Pushed")
    weatherQuery(document.getElementById('city').value)
})
// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
function weatherQuery(city){
    cityData(city)
     .then(function(data){
        console.log(data);
        local(data);
     })
     .catch(function(err) {
        console.warn(err);
     })
}
// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data
const cityData = async(city) => {
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9bafe440ab48b79e4c70cf1e542826e`)
    try {
        return await response.json();
    }
    catch (error){
        console.log(error)
    }
}   
// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

function local(data){
    temp.innerText = setTemp(data.main.temp, data.sys.country);
    humid.innerText = `${data.main.humidity}%`;
    conditions.innerText = data.weather[0].main;
    document.querySelector(".weatherWrapper").style.backgroundColor = setDayLight(data);
}