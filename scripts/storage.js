class Truck {
    constructor(manufacturer, model, year){
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
    }
}

let trucks = [
    new Truck('Ford', 'Bronco', '1970'),
    new Truck('Ford', 'F-350', '2020'),
    new Truck('Ford', 'F-250', '2004')
];

// console.table(trucks);


//Local Storage:
function loadLocal() {
    if (typeof(Storage) !== "undefined") {
        //This will put the trucks in the local storage in the browser. 
        localStorage.setItem("trucks", JSON.stringify(trucks));
        document.getElementById("demo").innerHTML = "The trucks array was loaded to local storage."
    } else {
        document.getElementById("demo").innerHTML = "Sorry! No Web Storage support."
    };
}

function getLocal() {
    // This will get the trucks back from storage as an object. 
    let storedTrucks = JSON.stringify(localStorage.getItem("trucks"));
    // let storedTrucks = JSON.parse(localStorage.getItem("trucks"));
    let myTrucks = [storedTrucks];
    let myText = "";
    
    for(let i in myTrucks)
        myText += myTrucks[i] + ", ", + "\n";

    document.getElementById("demo1").innerHTML = myText;
    console.table(myText);
}

function clearLocal() {
    localStorage.clear();
    document.getElementById("demo").innerHTML = "Local storage has been cleared."
}

// console.table(storedTrucks);


//Session Storage:
function loadSession() {
    let userInput = document.getElementById("myText").value;
    
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("name", userInput);
        document.getElementById("demo2").innerHTML = "Name is now set to " + userInput;
    } else {
        document.getElementById("demo2").innerHTML = "Sorry! No Web Storage support."
      }
}

function getSession() {
    if (typeof(Storage) !== "undefined") {
        let name = sessionStorage.getItem("name");
        document.getElementById("demo3").innerHTML = name;
    } else {
        document.getElementById("demo3").innerHTML = "Sorry! No Web Storage support."
      }
}


