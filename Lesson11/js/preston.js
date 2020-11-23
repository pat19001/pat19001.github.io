function toggleMenu(){
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
}

// function toggleMenu() {
//   document.getElementsByClassName("navigation")[0].classList.toggle("expand");
// }
// i.name==1

window.addEventListener('load', (event)=>{
    const cd = document.querySelector('#lastupdated');
    let day = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday'
    ]
    let month = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'Novemeber', 
        'December'
    ]
    cd.textContent = day[new Date().getDay()] + ', ' + new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear();

  const cry = document.querySelector('#copyrightyear');
  cry.textContent = new Date().getFullYear();

  const b = document.querySelector("#banner");
  today = new Date().getDay();
  if(today==5){
    b.style.display = "block";
  }

})

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c1820e7aeb32dab60966a969b49d248d&units=imperial";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('Get', apiURL, true);
weatherRequest.send();
fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    // const w = jsonObject['weather'];
    // const m = jsonObject['main'];
    // const windt = jsonObject['wind'];
    
    let curr = document.getElementById('curr');
    let high = document.getElementById('ht');
    // let windc = document.getElementById('windchill');
    let h = document.getElementById('humid');
    let ws = document.getElementById('ws');
    let wc = document.getElementById('windchill');

    curr.textContent = "Currently: " + weatherData.weather[0].main;
    high.textContent = weatherData.main.temp;
    h.textContent = "Humidity: " + weatherData.main.humidity + "%";
    ws.textContent = weatherData.wind.speed;
    
    let temp = high.textContent;
    let wspeed = ws.textContent;
    console.log(temp,wspeed);
    let wchill = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(wspeed, 0.16) + 0.4275 * temp * Math.pow(wspeed, 0.16));
    if (temp < 50 && wspeed > 3.0){
      wc.textContent = wchill;
    }
    else {
      wc.textContent = "N/A"
    }
    console.log(wchill);
  });
const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c1820e7aeb32dab60966a969b49d248d&units=imperial";
fetch(apiURL2)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
      // Pass the weather list from the json file.
      const weatherList = jsonObject["list"];
    });
  

  /* f=35.74+0.6215t−35.75s0.16+0.4275ts0.16 */


