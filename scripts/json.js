const myObj = {"make":"Ford","model":"Super Duty","year":2019};

function jsonParseDemo () {
    var obj = JSON.parse(document.getElementById("string").innerHTML);
    document.getElementById("demo").innerHTML = obj.make + ", " + obj.model + ", " + obj.year;
}

function jsonStringifyDemo () {
    var myText = JSON.stringify(myObj);
    document.getElementById("demo1").innerHTML = myText;
}