function toggleMenu() {
  const hambutton = document.querySelector('.ham');
  const mainnav = document.querySelector('.navigation');
  hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
  }, false);
}

// function toggleMenu() {
//   document.getElementsByClassName("navigation")[0].classList.toggle("expand");
// }
// i.name==1

window.addEventListener('load', (event) => {
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
  if (today == 5) {
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
    //console.log(weatherData);

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
    high.textContent = Math.round(weatherData.main.temp);
    h.textContent = "Humidity: " + weatherData.main.humidity + "%";
    ws.textContent = Math.round(weatherData.wind.speed);

    let temp = high.textContent;
    let wspeed = ws.textContent;
    //console.log(temp,wspeed);
    let wchill = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(wspeed, 0.16) + 0.4275 * temp * Math.pow(wspeed, 0.16));
    if (temp < 50 && wspeed > 3.0) {
      wc.textContent = wchill;
    } else {
      wc.textContent = "N/A"
    }
    //console.log(wchill);
  });
const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c1820e7aeb32dab60966a969b49d248d&units=imperial";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.table(jsonObject);
    let counter = 0;
    var temps;
    var icons;
    var date_str;
    var wday;
    iconurl = "http://openweathermap.org/img/wn/";
    for (i = 0; i < jsonObject.list.length; i++) {
      if (jsonObject.list[i].dt_txt.includes("18:00:00")) {

        //wday = document.getElementsByClassName("weekday" + counter);
        temps = document.querySelector('#temp' + counter);
        icons = document.querySelector('#img' + counter);

        //(wday).textContent = jsonObject.list[i].dt_txt.slice(0,10);
        (temps).textContent = Math.round(jsonObject.list[i].main.temp_max);
        (icons).setAttribute('src', iconurl + jsonObject.list[i].weather[0].icon + "@2x.png");

        //console.log(i);
        //console.log(b);
        //console.log(temps, counter);
        // console.log(icons);
        //console.log(wday, counter);
        counter = counter + 1;
      } else {
        continue;
      }
    }

    c = 0;
    var days;
    var newday;
    var wday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    for (i = 0; i < 6; i++) {

      newday = new Date().getDay();
      nextday = newday + i;

      if (nextday > 6) {
        nextday = nextday - 7;
      }

      days = document.querySelector("#weekday" + c);
      
      days.textContent = wday[nextday];

      c += 1;
    }
  });

  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

        /*####################################### SodaSprings ###################################*/
        let eventhead = document.createElement('h2');
        let pEvent1 = document.createElement('p');
        let pEvent2 = document.createElement('p');
        let pEvent3 = document.createElement('p');

        pEvent1.setAttribute('class','event1');
        pEvent2.setAttribute('class','event2');
        pEvent3.setAttribute('class','event3');
        
        eventhead.textContent = "Preston Events ";
        pEvent1.textContent = towns[5].events[0];
        pEvent2.textContent = towns[5].events[1];
        pEvent3.textContent = towns[5].events[2];
        console.log(pEvent1);

        document.querySelector("#events").appendChild(eventhead);
        document.querySelector("#events").appendChild(pEvent1);
        document.querySelector("#events").appendChild(pEvent2);
        document.querySelector("#events").appendChild(pEvent3);
      });


/* f=35.74+0.6215t−35.75s0.16+0.4275ts0.16 */