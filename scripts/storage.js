import { Truck } from './truck.js';

let trucks = [
    new Truck('Ford', 'Bronco', '1970'),
    new Truck('Ford', 'F-350', '2020'),
    new Truck('Ford', 'F-250', '2004')
];

console.table(trucks);

//This will put the trucks in the local storage in the browser. 
localStorage.setItem("trucks", JSON.stringify(trucks));


//This will get the truks back from storage as an object. 
let storedTrucks = JSON.parse(localStorage.getItem("trucks"));

console.table(storedTrucks);

