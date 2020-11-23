// const requestURL = '/practice/json/person.json';

const requestURL = 'https://www.ahfx.com/person.php';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    
    const person = jsonObject['person']
    const marriage  = person['marriage'];
    const personal  = person['personal'];
    const online  = person['online_info'];

      let card = document.createElement('section');
      let fname = document.createElement('h2');
      let lname = document.createElement('h2');
      let pass = document.createElement('p');
      let eye = document.createElement('p');
      let city = document.createElement('p');
      let country = document.createElement('p');
      let children = document.createElement('p');
      let ip = document.createElement('p');
      let image = document.createElement('img');


      fname.textContent = personal.name;
      lname.textContent = personal.last_name;
      eye.textContent = personal.eye_color;
      city.textContent = personal.city;
      country.textContent = personal.country;

      children.textContent = marriage.children;

      ip.textContent = online.ip_address;

      image.setAttribute('src', 'https://thispersondoesnotexist.com/image');
      // p1.textContent = "Date of Birth: " + prophets[i].birthdate
      // p2.textContent = "Place of Birth: " + prophets[i].birthplace


      card.appendChild(fname);
      card.appendChild(lname);
      card.appendChild(pass);
      card.appendChild(eye);
      card.appendChild(city);
      card.appendChild(children);
      card.appendChild(ip);
      card.appendChild(country);
      card.appendChild(image);


      document.querySelector('div.cards').appendChild(card);
      // image.setAttribute('src', prophets[i].imageurl);
      // image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + i)

    })
