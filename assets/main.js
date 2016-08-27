function init() {

    if (document.getElementById("home").checked) {
        fileLocation = "home/home.html";
        mainImage = "home/hobbiton.jpg";
    }
    else if (document.getElementById("projects").checked) {
        fileLocation = "projects/projects.html";
        mainImage = "projects/coding.jpg";
    }
    else if (document.getElementById("contact").checked) {
        fileLocation = "contact/contact.html";
        mainImage = "contact/orchestra.jpg";
    }
    else {
        fileLocation = "error/oobe.html";
        mainImage = "error/Me.jpg";
    }
    $("#mainImg").attr("src", mainImage)
    $("#dynamic").load(fileLocation);
}

window.onload = init();