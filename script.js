function init() {

    if (document.getElementById("home").checked) {
        fileLocation = "home/home.html";
    }
    else if (document.getElementById("projects").checked) {
        fileLocation = "projects/projects.html";
    }
    else if (document.getElementById("contact").checked) {
        fileLocation = "contact/contact.html";
    }
    else {
        fileLocation = "error/oobe.html";
    }

    $("#dynamic").load(fileLocation);
}