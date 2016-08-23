function loadCode(file) {
    $("#dynamic").load(file);
}

var selected = "home";
var fileLocation = "home/home.html";

if (selected === "home") {
    fileLocation = "home/home.html";
}

loadCode(fileLocation);