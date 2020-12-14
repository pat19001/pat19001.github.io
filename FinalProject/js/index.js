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
      let sections = document.createElement('div')

      let provo = document.createElement('div');
      let pname = document.createElement('h2');
      let paddress = document.createElement('p');
      let pstreet = document.createElement('p');
      let pcity = document.createElement('p');

      
      pname.textContent = "Temple: " + info.provo.name;
      provo.appendChild(pname);
      paddress.textContent = "Address";
      provo.appendChild(paddress);
      paddress.textContent = info.provo.address;
      provo.appendChild(pstreet);
      pcity.textContent = info.provo.city + ', ' + info.provo.state + " " + info.provo.zipcode;
      provo.appendChild(pcity);

      let tucson = document.createElement('div');
      let tname = document.createElement('h2');
      let taddress = document.createElement('p');
      let tcity = document.createElement('p');

      tname.textContent = "Temple: " + info.tucson.name;
      tucson.appendChild(tname);
      taddress.textContent = "Address";
      tucson.appendChild(taddress);
      taddress.textContent = info.tucson.address;
      tucson.appendChild(tstreet);
      tcity.textContent = info.tucson.city + ', ' + info.tucson.state + " " + info.tucson.zipcode;
      tucson.appendChild(tcity);

      let houston = document.createElement('div');
      let hname = document.createElement('h2');
      let haddress = document.createElement('p');
      let hcity = document.createElement('p');
      let hstate = document.createElement('p');
      let hzipcode = document.createElement('p');

      let baton = document.createElement('div');
      let bname = document.createElement('h2');
      let baddress = document.createElement('p');
      let bcity = document.createElement('p');
      let bstate = document.createElement('p');
      let bzipcode = document.createElement('p');

      sections.setAttribute('id','sections')
      provo.setAttribute('class', 'location');
      tucson.setAttribute('class', 'location');
      houston.setAttribute('class', 'location');
      baton.setAttribute('class', 'location');

      

      document.querySelector('main').appendChild(sections);

      sections.appendChild(provo);
      sections.appendChild(tucson);     
      sections.appendChild(houston);   
      sections.appendChild(baton);
    })
