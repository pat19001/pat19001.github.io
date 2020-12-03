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

function adjustRating(rating) {
  document.getElementById("rangevalue").innerHTML = rating;
}


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    // Loop through the list of towns.
    for (i = 0; i < towns.length; i++) {
      // Only Use the Fish Haven, Preston, and Soda Springs.
      if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {

        /*####################################### PRESTON ###################################*/
        let prestonlink = document.createElement('a');
        let preston = document.createElement('section');
        let t1 = document.createElement('h2');
        let m1 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        let pimage = document.createElement('img');

        prestonlink.setAttribute('href','https://pat19001.github.io/Lesson11/preston.html')
        prestonlink.setAttribute('class', "clink");
        preston.setAttribute('class', "preston");
        t1.setAttribute('class', 't1');
        m1.setAttribute('class', 'm1');
        p1.setAttribute('class', 'p1');
        p2.setAttribute('class', 'p2');
        p3.setAttribute('class', 'p3');
        pimage.setAttribute('src', towns[5].photo);
        pimage.setAttribute('class', "pimage");

        t1.textContent = towns[5].name;
        m1.textContent = '"' + towns[5].motto + '"';
        p1.textContent = "Year Founded: " + towns[5].yearFounded;
        p2.textContent = "Current Population: " + towns[5].currentPopulation;
        p3.textContent = "Average Rainfall: " + towns[5].averageRainfall;

        prestonlink.appendChild(preston);
        preston.appendChild(t1);
        preston.appendChild(m1);
        preston.appendChild(p1);
        preston.appendChild(p2);
        preston.appendChild(p3);
        preston.appendChild(pimage);

        document.querySelector('div.cards').appendChild(prestonlink);


        /*####################################### FISH HAVEN ###################################*/
        let fishlink = document.createElement('a');
        let fish = document.createElement('section');
        let t2 = document.createElement('h2');
        let m2 = document.createElement('h3');
        let f1 = document.createElement('p');
        let f2 = document.createElement('p');
        let f3 = document.createElement('p');

        fishlink.setAttribute('href','https://pat19001.github.io/Lesson11/fishhaven.html')
        fishlink.setAttribute('class', "clink");
        let fimage = document.createElement('img');
        fish.setAttribute('class', "fish");
        t2.setAttribute('class', 't2');
        m2.setAttribute('class', 'm2');
        f1.setAttribute('class', 'f1');
        f2.setAttribute('class', 'f2');
        f3.setAttribute('class', 'f3');
        fimage.setAttribute('src', towns[1].photo);
        fimage.setAttribute('class', "fimage")


        t2.textContent = towns[1].name;
        m2.textContent = '"' + towns[1].motto + '"';
        f1.textContent = "Year Founded: " + towns[1].yearFounded;
        f2.textContent = "Current Population: " + towns[1].currentPopulation;
        f3.textContent = "Average Rainfall: " + towns[1].averageRainfall;

        fishlink.appendChild(fish);
        fish.appendChild(t2);
        fish.appendChild(m2);
        fish.appendChild(f1);
        fish.appendChild(f2);
        fish.appendChild(f3);
        fish.appendChild(fimage);

        document.querySelector('div.cards').appendChild(fishlink);

        /*####################################### SODA SPRINGS ###################################*/
        let soda = document.createElement('section');
        let sodalink = document.createElement('a');
        let t3 = document.createElement('h2');
        let m3 = document.createElement('h3');
        let s1 = document.createElement('p');
        let s2 = document.createElement('p');
        let s3 = document.createElement('p');

        let simage = document.createElement('img');

        soda.setAttribute('class', "soda");
        sodalink.setAttribute('href','https://pat19001.github.io/Lesson11/sodasprings.html')
        sodalink.setAttribute('class', "clink");
        t3.setAttribute('class', 't3');
        m3.setAttribute('class', 'm3');
        s1.setAttribute('class', 's1');
        s2.setAttribute('class', 's2');
        s3.setAttribute('class', 's3');
        simage.setAttribute('src', towns[5].photo);
        simage.setAttribute('class', "simage")

        t3.textContent = towns[6].name;
        m3.textContent = '"' + towns[6].motto + '"';
        s1.textContent = "Year Founded: " + towns[6].yearFounded;
        s2.textContent = "Current Population: " + towns[6].currentPopulation;
        s3.textContent = "Average Rainfall: " + towns[6].averageRainfall;

        sodalink.appendChild(soda);
        soda.appendChild(t3);
        soda.appendChild(m3);
        soda.appendChild(s1);
        soda.appendChild(s2);
        soda.appendChild(s3);
        soda.appendChild(simage);
      
        document.querySelector('div.cards').appendChild(sodalink);

      // Set the link for the cards.
      if (towns[i].name == 'Fish Haven') {
        link.setAttribute('href', 'fish-haven.html');
      } else if (towns[i].name == 'Preston') {
        link.setAttribute('href', 'preston.html');
      } else if (towns[i].name == 'Soda Springs') {
        link.setAttribute('href', 'soda-springs.html');
        simage.setAttribute('src', 'sodasprings.jpg');
      } else {
        link.setAttribute('#');
      }
    }

      // image.setAttribute('src', prophets[i].imageurl);
      // image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + i)
  }

  
  })