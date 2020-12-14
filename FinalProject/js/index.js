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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function pFunction() {
  document.getElementById("pDropdown").classList.toggle("show");
}
function tFunction() {
  document.getElementById("tDropdown").classList.toggle("show");
}
function hFunction() {
  document.getElementById("hDropdown").classList.toggle("show");
}
function bFunction() {
  document.getElementById("bDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("temple-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



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
 /*|||||||||||||||||||||PROVO TEMPLE|||||||||||||||||||||*/
      let provo = document.createElement('div');
      let pcard = document.createElement('div');
      let pbutton = document.createElement('div');
      let pname = document.createElement('h2');
      let paddress = document.createElement('p');
      let pstreet = document.createElement('p');
      let pcity = document.createElement('p');
      let pcountry = document.createElement('p');
      let ptel = document.createElement('p');
      let pservice = document.createElement('p');
      let phouse = document.createElement('p');
      let pclothing = document.createElement('p');
      let pcafeteria = document.createElement('p');
      let pdistro = document.createElement('p');

      provo.setAttribute('class', 'temple');
      pcard.setAttribute('id','pDropdown');
      pcard.setAttribute('class','temple-dropdown');
      pbutton.setAttribute('onclick', 'pFunction()');
      pbutton.setAttribute('class', 'dropbtn');
      pbutton.setAttribute('id','pimage');

      pbutton.textContent = info.provo.name;
      provo.appendChild(pbutton);
      pname.textContent = info.provo.name;
      pcard.appendChild(pname);
      paddress.textContent = "Address: ";
      pcard.appendChild(paddress);
      pstreet.textContent = info.provo.address;
      pcard.appendChild(pstreet);
      pcity.textContent = info.provo.city + ', ' + info.provo.state + " " + info.provo.zipcode;
      pcard.appendChild(pcity);
      pcountry.textContent = info.provo.country;
      pcard.appendChild(pcountry);
      ptel.textContent = info.provo.telephone;
      pcard.appendChild(ptel);
      pservice.textContent = "Services Available: ";
      pcard.appendChild(pservice);
      phouse.textContent = info.provo.services.housing;
      pcard.appendChild(phouse);
      pclothing.textContent = info.provo.services.clothing;
      pcard.appendChild(pclothing);
      pcafeteria.textContent = info.provo.services.cafeteria;
      pcard.appendChild(pcafeteria);
      pdistro.textContent = info.provo.services.distribution;
      pcard.appendChild(pdistro);

      provo.appendChild(pcard);
      
/*|||||||||||||||||||||TUSCON TEMPLE|||||||||||||||||||||*/
      let tucson = document.createElement('div');
      let tcard = document.createElement('div');
      let tbutton = document.createElement('div');
      let tname = document.createElement('h2');
      let taddress = document.createElement('p');
      let tstreet = document.createElement('p')
      let tcity = document.createElement('p');
      let tcountry = document.createElement('p');
      let ttel = document.createElement('p');
      let tservice = document.createElement('p');
      let thouse = document.createElement('p');
      let tclothing = document.createElement('p');
      let tcafeteria = document.createElement('p');
      let tdistro = document.createElement('p');

      tucson.setAttribute('class', 'temple');
      tcard.setAttribute('id','tDropdown');
      tcard.setAttribute('class','temple-dropdown');
      tbutton.setAttribute('onclick', 'tFunction()');
      tbutton.setAttribute('class', 'dropbtn');
      tbutton.setAttribute('id','timage');

      tbutton.textContent = info.tucson.name;
      tucson.appendChild(tbutton);
      tname.textContent = info.tucson.name;
      tcard.appendChild(tname);
      taddress.textContent = "Address: ";
      tcard.appendChild(taddress);
      tstreet.textContent = info.tucson.address;
      tcard.appendChild(tstreet);
      tcity.textContent = info.tucson.city + ', ' + info.tucson.state + " " + info.tucson.zipcode;
      tcard.appendChild(tcity);
      tcountry.textContent = info.tucson.country;
      tcard.appendChild(tcountry);
      ttel.textContent = info.tucson.telephone;
      tcard.appendChild(ttel);
      tservice.textContent = "Services Available: ";
      tcard.appendChild(tservice);
      thouse.textContent = info.tucson.services.housing;
      tcard.appendChild(thouse);
      tclothing.textContent = info.tucson.services.clothing;
      tcard.appendChild(tclothing);
      tcafeteria.textContent = info.tucson.services.cafeteria;
      tcard.appendChild(tcafeteria);
      tdistro.textContent = info.tucson.services.distribution;
      tcard.appendChild(tdistro);

      tucson.appendChild(tcard);
/*|||||||||||||||||||||HOUSTON TEMPLE|||||||||||||||||||||*/
      let houston = document.createElement('div');
      let hcard = document.createElement('div');
      let hbutton = document.createElement('div');
      let hname = document.createElement('h2');
      let haddress = document.createElement('p');
      let hstreet = document.createElement('p');
      let hcity = document.createElement('p');
      let hcountry = document.createElement('p');
      let htel = document.createElement('p');
      let hservice = document.createElement('p');
      let hhouse = document.createElement('p');
      let hclothing = document.createElement('p');
      let hcafeteria = document.createElement('p');
      let hdistro = document.createElement('p');
      
      houston.setAttribute('class', 'temple');
      hcard.setAttribute('id','hDropdown');
      hcard.setAttribute('class','temple-dropdown');
      hbutton.setAttribute('onclick', 'hFunction()');
      hbutton.setAttribute('class', 'dropbtn');
      hbutton.setAttribute('id','himage');

      hbutton.textContent = info.houston.name;
      houston.appendChild(hbutton);
      hname.textContent = info.houston.name;
      hcard.appendChild(hname);
      haddress.textContent = "Address: ";
      hcard.appendChild(haddress);
      hstreet.textContent = info.houston.address;
      hcard.appendChild(hstreet);
      hcity.textContent = info.houston.city + ', ' + info.houston.state + " " + info.houston.zipcode;
      hcard.appendChild(hcity);
      hcountry.textContent = info.houston.country;
      hcard.appendChild(hcountry);
      htel.textContent = info.houston.telephone;
      hcard.appendChild(htel);
      hservice.textContent = "Services Available: ";
      hcard.appendChild(hservice);
      hhouse.textContent = info.houston.services.housing;
      hcard.appendChild(hhouse);
      hclothing.textContent = info.houston.services.clothing;
      hcard.appendChild(hclothing);
      hcafeteria.textContent = info.houston.services.cafeteria;
      hcard.appendChild(hcafeteria);
      hdistro.textContent = info.houston.services.distribution;
      hcard.appendChild(hdistro);

      houston.appendChild(hcard);
/*|||||||||||||||||||||BATON ROUGE TEMPLE|||||||||||||||||||||*/
      let baton = document.createElement('div');
      let bcard = document.createElement('div');
      let bbutton = document.createElement('div');
      let bname = document.createElement('h2');
      let baddress = document.createElement('p');
      let bstreet = document.createElement('p');
      let bcity = document.createElement('p');
      let bcountry = document.createElement('p');
      let btel = document.createElement('p');
      let bservice = document.createElement('p');
      let bhouse = document.createElement('p');
      let bclothing = document.createElement('p');
      let bcafeteria = document.createElement('p');
      let bdistro = document.createElement('p');

      baton.setAttribute('class', 'temple');
      
      bcard.setAttribute('id','bDropdown');
      bcard.setAttribute('class','temple-dropdown');
      bbutton.setAttribute('onclick', 'bFunction()');
      bbutton.setAttribute('class', 'dropbtn');
      bbutton.setAttribute('id','bimage');

      bbutton.textContent = info.batonrouge.name;
      baton.appendChild(bbutton);
      bname.textContent = info.batonrouge.name;
      bcard.appendChild(bname);
      baddress.textContent = "Address: ";
      bcard.appendChild(baddress);
      bstreet.textContent = info.batonrouge.address;
      bcard.appendChild(bstreet);
      bcity.textContent = info.batonrouge.city + ', ' + info.batonrouge.state + " " + info.batonrouge.zipcode;
      bcard.appendChild(bcity);
      bcountry.textContent = info.batonrouge.country;
      bcard.appendChild(bcountry);
      btel.textContent = info.batonrouge.telephone;
      bcard.appendChild(btel);
      bservice.textContent = "Services Available: ";
      bcard.appendChild(bservice);
      bhouse.textContent = info.batonrouge.services.housing;
      bcard.appendChild(bhouse);
      bclothing.textContent = info.batonrouge.services.clothing;
      bcard.appendChild(bclothing);
      bcafeteria.textContent = info.batonrouge.services.cafeteria;
      bcard.appendChild(bcafeteria);
      bdistro.textContent = info.batonrouge.services.distribution;
      bcard.appendChild(bdistro);

      baton.appendChild(bcard);

/*|||||||||||||||||||||ALL TEMPLES|||||||||||||||||||||*/
      sections.setAttribute('id','sections')
      
      document.querySelector('main').appendChild(sections);

      sections.appendChild(provo);
      sections.appendChild(tucson);     
      sections.appendChild(houston);   
      sections.appendChild(baton);
    })
