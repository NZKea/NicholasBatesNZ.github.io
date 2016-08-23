var selected = "home";

if (selected === "home") {
    location = "home/home.html";
}

function FileHelper()
{}
{
    FileHelper.readStringFromPath = function(path)
    {
        var request = new XMLHttpRequest();
        request.open("GET", path, false);
        request.send(null);
        return request.responseText;
    }
}

document.getElementById("dynamic").innerHTML = FileHelper.readStringFromPath(location);