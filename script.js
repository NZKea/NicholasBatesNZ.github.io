var selected = "home";

if (selected === "home") {
    location = "home/home.html";
}

document.getElementById("dynamic").innerHTML = rawFile.open("GET", location, false);