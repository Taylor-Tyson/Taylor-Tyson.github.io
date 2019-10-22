// import { Truck } from './truck.js';

class Truck {
    constructor(manufacturer, model, year){
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
    }
    get getManufactuer(){
        return this.manufactuer;
    }

    get getModel(){
        return this.model;
    }

    get getYear(){
        return this.year;
    }

    get getTruck(){
        return this;
    }
}

//JavaScript Object Literal
let truck = {
    manufacturer: "Ford",
    model: "F-350",
    year: 2020
};


function getLiteral() {
    let opt = document.getElementById("selection");
    let choice = opt.options[opt.selectedIndex].value;

    switch(choice){
        case "manufacturer":
            document.getElementById("literal").innerHTML = truck.manufacturer;
            break;
        case "model":
            document.getElementById("literal").innerHTML = truck.model;
            break;
        case "year":
            document.getElementById("literal").innerHTML = truck.year;
            break;
        case "blank":
            document.getElementById("literal").innerHTML = "";
            break;
    };
}

function createTruck() {
    let manu = document.getElementById("manu").value;
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;
    let myTruck = new Truck(manu,model,year);

    document.getElementById("newTruck").innerHTML = "You want a " + myTruck.year + " " + myTruck.manufacturer + " " + myTruck.model;
}
