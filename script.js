var selected = "home";
var fileLocation = "home/home.html";
var htmlCode = "<p>An error has occured. Please reload the page.</p>";

if (selected === "home") {
    fileLocation = "home/home.html";
}

function loadCode(file) {
    $("#dynamic").load(file);
}

loadCode(fileLocation);
loadCode("bio.html");


//$.get(fileLocation, function(data) {
//    htmlCode = data;
//});

//document.getElementById("dynamic").innerHTML = htmlCode;