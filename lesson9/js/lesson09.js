
  // Menu

function toggleMenu() {
    console.log(document.getElementById('primaryNav').classList);
    document.getElementById('primaryNav').classList.toggle('hide');
}


/*Footer year and last modified*/
let year = new Date().getFullYear();
let day = new Date().getDay();
let dayNum = new Date().getDate();
let month = new Date().getMonth();


if (month == 0) {
    month = "January"
}
if (month == 1) {
    month = "February"
}
if (month == 2) {
    month = "March"
}
if (month == 3) {
    month = "April"
}
if (month == 4) {
    month = "May"
}
if (month == 5) {
    month = "June"
}
if (month == 6) {
    month = "July"
}
if (month == 7) {
    month = "August"
}
if (month == 8) {
    month = "September"
}
if (month == 9) {
    month = "October"
}
if (month == 10) {
    month = "November"
}
if (month == 11) {
    month = "December"
}



if (day == 1) {
    day = "Monday";
}
if (day == 2) {
    day = "Tuesday";
}
if (day == 3) {
    day = "Wednesday";
}
if (day == 4) {
    day = "Thursday";
}
if (day == 5) {
    day = "Friday";
}
if (day == 6) {
    day = "Saturday";
}
if (day == 7) {
    day = "Sunday";
}

document.getElementById("year").innerHTML = "&#169; " + year + " Hailey Mundt";
document.getElementById("output").innerHTML = day + ', ' + dayNum + ' ' + month + ' ' + year;

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
        
        
        let card = document.createElement('section');
        let article = document.createElement('div');
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h5');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        
        h4.textContent = towns[i].name;
        h5.textContent = towns[i].motto;
        p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
        p2.textContent = 'Population: ' + towns[i].currentPopulation;
        p3.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', towns[i].name);


        card.appendChild(article)
        article.appendChild(h4);
        article.appendChild(h5);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        card.appendChild(image);
        
        
        

        document.querySelector('div.cards').appendChild(card);
        }
    }
    
  });

