const apiURL = "https://api.openweathermap.org/data/2.5/forecast?zip=83440,us&appid=c1820e7aeb32dab60966a969b49d248d&units=imperial";
fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject)
    // Current Day information 
    let container = document.querySelector('div.icenight');
    let forecast = document.querySelector('div.three_day');
    let current = document.createElement('section');
    let condition = document.createElement('p');
    let temp = document.createElement('p');

    condition.textContent = jsonObject.list[0].weather[0].main;
    console.log(condition);
    temp.textContent = jsonObject.list[0].main.temp;
    console.log(temp);

    current.appendChild(condition);
    container.appendChild(current);
    current.appendChild(temp);

    //1st of 3 day forecast
    container.appendChild(forecast);
    let sun = document.createElement('section');
    sun.setAttribute('class','sunday')
    let day1 = document.createElement('p');
    let temp1 = document.createElement('p');
    let icon1 = document.createElement('p');

    day1.textContent = "Sunday"
    // day1.textContent = "Sunday" + " " + jsonObject.list[8].main.temp + ' ' + jsonObject.list[8].weather[0].icon ;
    console.log(day1);
    temp1.textContent = jsonObject.list[8].main.temp;
    console.log(temp1);
    icon1.textContent = jsonObject.list[8].weather[0].icon;
    console.log(icon1);

    sun.appendChild(day1);
    sun.appendChild(temp1);
    sun.appendChild(icon1);
    forecast.appendChild(sun);

    // 2nd of 3 day forecast
    let mon = document.createElement('section');
    mon.setAttribute('class','monday')
    let day2 = document.createElement('p');
    let temp2 = document.createElement('p');
    let icon2 = document.createElement('p');

    day2.textContent = "Monday";
    // day2.textContent = "Monday" + " " + jsonObject.list[16].main.temp + " " + jsonObject.list[16].weather[0].icon;
    console.log(day2);
    temp2.textContent = jsonObject.list[16].main.temp;
    console.log(temp2);
    icon2.textContent = jsonObject.list[16].weather[0].icon;
    console.log(icon2);

    mon.appendChild(day2);
    mon.appendChild(temp2);
    mon.appendChild(icon2);
    forecast.appendChild(mon);
    // 3rd of 3 day forecast
    let tues = document.createElement('section');
    tues.setAttribute('class','tuesday')
    let day3 = document.createElement('p');
    let temp3 = document.createElement('p');
    let icon3 = document.createElement('p');

    day3.textContent = "Tuesday";
    // day3.textContent = "Tuesday" + " " + jsonObject.list[38].main.temp + " " + jsonObject.list[38].weather[0].icon;
    console.log(day3);
    temp3.textContent = jsonObject.list[38].main.temp;
    console.log(temp3);
    icon3.textContent = jsonObject.list[38].weather[0].icon;
    console.log(icon3);

    tues.appendChild(day3);
    tues.appendChild(temp3);
    tues.appendChild(icon3);
    forecast.appendChild(tues);

    
    

    
    // document.getElementsByClassName('icenight').textContent = jsonObject.main.temp;
    
    // const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png'; // note the concatenation
    // const desc = jsObject.weather[0].description; // note how we reference the weather array
    // document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    // document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);

  });