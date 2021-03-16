
function toggleMenu() {
    console.log(document.getElementById('primaryNav').classList);
    document.getElementById('primaryNav').classList.toggle('hide');
}

// lazy load

let imagesToLoad = document.querySelectorAll('img[data-src]');


const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px 100px 0px'
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach(item => {
            if (!item.isIntersecting) {
                return;
            }   else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach(image => {
        imgObserver.observe(image);
    });
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



const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8330069d5a1cb43a8d6a255083eddf1b";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    temperature = jsObject.main.temp;
    windspeed = jsObject.wind.speed;
    
    document.getElementById('current').textContent = jsObject.weather[0].description;
    document.getElementById('temperature').textContent = temperature.toFixed(0);
    document.getElementById('windchill').textContent = windChill(temperature, windspeed).toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = windspeed.toFixed(0);


});

const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8330069d5a1cb43a8d6a255083eddf1b'
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']
    
    
    

    for (i=0; i < jsObject.list.length; i++) {
        if (jsObject.list[i].dt_txt.includes("18:00:00") == true) {
            
            let section = document.createElement('section');
            let h5 = document.createElement('h5');
            let p = document.createElement('p');
            let image = document.createElement('img');
            
            var d = new Date(jsObject.list[i].dt_txt);
            var dayName = days[d.getDay()];
            console.log(d)
           
            
            
        

        
            h5.textContent = dayName;
            p.textContent = jsObject.list[i].main.temp.toFixed(0) + "\xB0" + " F";
           
            image.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
            image.setAttribute('alt', "weather icon");
            
           
        

            
        
            section.appendChild(h5);
            section.appendChild(p);
            section.appendChild(image);
            
            
            document.querySelector('div.forecast').appendChild(section);
            
        }
    }



});

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



function windChill(temperature, windSpeed) {

    if (temperature <= 50) {
        var windChill = Math.round(35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));
        return windChill
    }

    else {
        return "N/A";
    }

}