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
    h.textContent = "Humidity: " + weatherData.main.humidity;
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

fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
      // Pass the weather list from the json file.
      const weatherList = jsonObject["list"];

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Setup the counter.
        let num = 0;
        // Loop through each item in the list adding each card.
        for (i = 0; i < weatherList.length; i++) {
            // Find the time stamp and put it in a date object.
            let forcastTime = new Date(weatherData[i].dt_txt)

            // Add the card if the hour is 18.
            if (forcastTime.getHours() == 18){
                // Add one to the counter.
                num = num + 1;

                // Setup the document ids.
                let card_id = "label" + num;
                let card_img = "img" + num;
                let card_output = "output" + num;

                // Convert the temperature from Kelvin to Farenheit.
                let currentTemp = Math.floor((weatherData[i].main.temp - 273.15) * (9 / 5) + 32);

                // Label the day for that card.
                document.getElementById(card_id).textContent = days[forcastTime.getDay()];

                // Add the temperature for that card.
                document.getElementById(card_output).textContent = currentTemp;

                // Create the image link and add it to the card.
                let imagesrc = 'https://openweathermap.org/img/w/' + weatherData[i].weather[0].icon + '.png';  // note the concatenation
                document.getElementById(card_img).setAttribute('src', imagesrc);
            }
        }
    });
  

  /* f=35.74+0.6215t−35.75s0.16+0.4275ts0.16 */


