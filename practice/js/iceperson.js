const requestURL = '/Users/hollypatterson77/Downloads/Local_Repository/pat19001.github.io/practice/json/person.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    
    const person = jsonObject['person']
    const marriage  = jsonObject['marriage'];
    const personal  = jsonObject['personal'];
    const online  = jsonObject['online_info'];

    var list = [marriage, personal, online];

    for (i = 0; i < list.length; i++){
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let pass = document.createElement('p');
      let eye = document.createElement('p');
      let city = document.createElement('p');
      let children = document.createElement('p');
      let ip = document.createElement('p');
      let image = document.createElement('img');


      // h2.textContent = prophets[i].name + ' ' + person[i].;
      // p1.textContent = "Date of Birth: " + prophets[i].birthdate
      // p2.textContent = "Place of Birth: " + prophets[i].birthplace


      card.appendChild(name);
      card.appendChild(pass);
      card.appendChild(eye);
      card.appendChild(city);
      card.appendChild(children);
      card.appendChild(city);
      card.appendChild(city);

      document.querySelector('div.cards').appendChild(card);
      // image.setAttribute('src', prophets[i].imageurl);
      // image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + i)

    }
  console.log(person);
  })
