
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



function windChill(temperature, windSpeed) {

    if (temperature <= 50) {
        var windChill = Math.round(35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));
        return windChill
    }

    else {
        return "N/A";
    }

}