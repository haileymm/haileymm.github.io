/*Footer year and last modified*/
let year = new Date().getFullYear();
let modified = document.lastModified;
document.getElementById("year").innerHTML = "&#169; " + year + " Hailey Mundt | Nevada | ";
document.getElementById("output").innerHTML = "Last updated: " + modified;


