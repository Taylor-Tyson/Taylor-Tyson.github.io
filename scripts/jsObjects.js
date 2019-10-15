
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

