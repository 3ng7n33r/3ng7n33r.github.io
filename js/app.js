function scrollto(y) {
    var elmnt = document.getElementById(y);
    elmnt.scrollIntoView({behavior: 'smooth'});
}

function makevis(y) {
    var elmnt = document.getElementById(y);
    elmnt.style.display = "table";
}

function makeinvis(y) {
    var elmnt = document.getElementById(y);
    elmnt.style.display = "none";
}
