const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 1; i < towns.length; i++ ) {
        
        let card = document.createElement('section');
        let h4 = document.createElement('h4');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        h4.textContent = towns[i].name;
        p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
        p2.textContent = 'Population: ' + towns[i].currentPopulation;
        p2.textContent = towns[i].averageRainfall;
        image.setAttribute('src', towns[i].photo);
        image.setAttribute('alt', towns[i].name);

        
        card.appendChild(h4);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);
    }
    
  });