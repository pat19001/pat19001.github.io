function toggleMenu() {
  const hambutton = document.querySelector('.ham');
  const mainnav = document.querySelector('.navigation');
  // hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
  // }, false);
}
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
// const requestURL = '/practice/json/person.json';

const requestURL = 'https://pat19001.github.io/FinalProject/json/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    
    const info = jsonObject['temple']

      let provo = document.createElement('div');
      let tucson = document.createElement('div');
      let houston = document.createElement('div');
      let baton = document.createElement('div');

      provo.setAttribute('class', 'location');
      tucson.setAttribute('class', 'location');
      houston.setAttribute('class', 'location');
      baton.setAttribute('class', 'location');

      provo.textContent = "Temple: " + provo.name;

      document.querySelector('div.sections').appendChild(provo);
      document.querySelector('div.sections').appendChild(tucson);
      document.querySelector('div.sections').appendChild(houston);
      document.querySelector('div.sections').appendChild(baton);


    })
