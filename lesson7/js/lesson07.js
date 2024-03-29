// Menu

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

if (day == "Friday") {
    document.getElementById("announcement").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
}

if (day != "Friday") {
    document.getElementById("announcement").style.display = 'none';

}







