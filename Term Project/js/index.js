// ---------------------Menu Toggle--------------------------

function toggleMenu() {
    console.log(document.getElementById('primaryNav').classList);
    document.getElementById('primaryNav').classList.toggle('hide');
}

// ---------------------------grid/list view---------------------------------------

function displaylist() {
  document.getElementById('directory')?.classList.remove('directoryl');
  document.getElementById('directory')?.classList.add('directoryg');

}

function displaygrid() {
  document.getElementById('directory')?.classList.add('directoryl');
  document.getElementById('directory')?.classList.remove('directoryg');

}

document.getElementById('gridview')?.addEventListener("click", displaylist);
document.getElementById('listview')?.addEventListener("click", displaygrid);




/*Footer year and last modified*/
let year = new Date().getFullYear();
let modified = document.lastModified;
document.getElementById("year").innerHTML = "&#169; " + year + " Reno Chamber of Commerce | Nevada | ";
document.getElementById("output").innerHTML = "Last updated: " + modified;

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5511077&units=imperial&APPID=8330069d5a1cb43a8d6a255083eddf1b";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {


    document.getElementById('current').textContent = jsObject.weather[0].description;
    document.getElementById('temperature').textContent = jsObject.main.temp.toFixed(0) + "\xB0 F";
    document.getElementById('humidity').textContent = jsObject.main.humidity + "% Humidity";

});

const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5511077&units=imperial&APPID=8330069d5a1cb43a8d6a255083eddf1b'
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {


    var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']
    
    day_count = 0;
    

    for (i=0; i < jsObject.list.length; i++) {
        if (jsObject.list[i].dt_txt.includes("21:00:00") == true && day_count < 3) {
            
            let section = document.createElement('section');
            let h5 = document.createElement('h5');
            let p = document.createElement('p');
            let image = document.createElement('img');
            
            var d = new Date(jsObject.list[i].dt_txt);
            var dayName = days[d.getDay()];
           
            
            
        

        
            h5.textContent = dayName;
            p.textContent = jsObject.list[i].main.temp.toFixed(0) + "\xB0" + " F";
           
            image.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
            image.setAttribute('alt', "weather icon");

        
            
           
        

            
        
            section.appendChild(h5);
            section.appendChild(p);
            section.appendChild(image);
            
            
            document.querySelector('div.forecast')?.appendChild(section);
            
            day_count += 1
        }
    }



});

const requestURL = 'directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    

    const directory = jsonObject['directory'];


    for (let i = 0; i < directory.length; i++ ) {
    
        
        
    let card = document.createElement('section');
    let article = document.createElement('div');
    let image = document.createElement('img');
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    

    image.setAttribute('src', 'images/' + directory[i].logo);
    image.setAttribute('alt', directory[i].name);
    h4.textContent = directory[i].name;
    h5.textContent = directory[i].phone;
    p1.textContent = directory[i].address;
    p2.textContent = directory[i].website;



    card.appendChild(image);
    card.appendChild(article)
    article.appendChild(h4);
    article.appendChild(h5);
    article.appendChild(p1);
    article.appendChild(p2);
    
    

    document.querySelector('div#directory')?.appendChild(card);
    }
    
  });

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    

    const directory = jsonObject['directory'];


    for (let i = 0; i < 3; i++ ) {
    
        
        
    let card = document.createElement('section');
    let article = document.createElement('div');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let image = document.createElement('img');

    
    h2.textContent = directory[i].name;
    h3.textContent = directory[i].phone;
    p1.textContent = directory[i].address;
    p2.textContent = directory[i].website;
    p3.textContent = directory[i].ad_text;
    image.setAttribute('src', 'images/' + directory[i].logo);
    image.setAttribute('alt', directory[i].name);


    card.appendChild(article)
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    card.appendChild(image);
    
    
    

    document.querySelector('div.ads')?.appendChild(card);
    }
    
  });