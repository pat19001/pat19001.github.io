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
      let ident = document.createElement('h2')
      let fname = document.createElement('p');
      let lname = document.createElement('p');
      let pass = document.createElement('p');
      let eye = document.createElement('p');
      let city = document.createElement('p');
      let country = document.createElement('p');
      let children = document.createElement('p');
      let ip = document.createElement('p');
      let image = document.createElement('img');

      ident.textContent = "Identification";
      fname.textContent = "First Name: " + personal.name;
      lname.textContent = "Last Name: " + personal.last_name;
      eye.textContent = "Eye Color: " + personal.eye_color;
      city.textContent = "City: " + personal.city;
      country.textContent = "Country: " + personal.country;
      pass.textContent = "Password: " + online.password;
      children.textContent = "Children: " + marriage.children;
      ip.textContent = "IP: " + online.ip_address;

      image.setAttribute('src', 'https://thispersondoesnotexist.com/image');
      image.setAttribute('class', 'picture');
      city.setAttribute('class', 'city')
      country.setAttribute('class', 'country');
      ip.setAttribute('class', 'ip');
      pass.setAttribute('class', 'pass');
      fname.setAttribute('class', 'fname');
      lname.setAttribute('class', 'lname');
      eye.setAttribute('class', 'eye');
      children.setAttribute('class', 'children');

      card.appendChild(ident);
      card.appendChild(image);
      card.appendChild(city);
      card.appendChild(country);
      card.appendChild(ip);
      card.appendChild(pass);
      card.appendChild(fname);
      card.appendChild(lname);
      card.appendChild(eye);
      card.appendChild(children);
      
      
      


      document.querySelector('div.cards').appendChild(card);
    })
