var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", dir + "/" + file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}