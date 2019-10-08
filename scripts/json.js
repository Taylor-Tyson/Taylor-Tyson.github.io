function jsonParseDemo () {
    var myObj = JSON.parse(document.getElementById("string").innerHTML);
    document.getElementById("demo").innerHTML = myObj.make + ", " + myObj.model + ", " + myObj.year;
}

function jsonStringifyDemo () {
    
}