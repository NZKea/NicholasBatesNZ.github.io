var fileLocation, mainImage, heading;

function init() {

    if (document.getElementById("home").checked) {
        fileLocation = "home/home.html";
        mainImage = "home/hobbiton.jpg";
        heading = "Blog";
    }
    else if (document.getElementById("projects").checked) {
        fileLocation = "projects/projects.html";
        mainImage = "projects/coding.jpg";
        heading = "Projects";
    }
    else if (document.getElementById("contact").checked) {
        fileLocation = "contact/contact.html";
        mainImage = "contact/rosie.jpg";
        heading = "Contact Me";
    }
    else {
        fileLocation = "error/oobe.html";
        mainImage = "error/Me.jpg";
        heading = "Error";
    }
    $("#mainImg").attr("src", mainImage)
    $("#dynamic").load(fileLocation);
    document.getElementById("heading").innerHTML = heading;
}

window.onload = init();