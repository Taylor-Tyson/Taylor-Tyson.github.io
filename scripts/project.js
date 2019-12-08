class Item {
    constructor(itemName, number, cost){
        this.itemName = itemName;
        this.number = number;
        this.cost = cost;
    }
    get getItemName(){
        return this.itemName;
    }

    get getNumber(){
        return this.number;
    }

    get getCost(){
        return this.cost;
    }

    get getItem(){
        return this;
    }
}

//JavaScript Object Items Array
let items = [
    new Item('Fuel Filter', 'FF55412', '$29.99'),
    new Item('Alternator', 'ALT4715', '$99.99'),
    new Item('Starter', 'CS87459', '$149.99')
]




//This makes sure that user input has been input and routes to the parts page. 
function submit(){
    let make = document.getElementById("make").value;
    let year = document.getElementById("year").value;
    let name = document.getElementById("name").value;

    if ( make == 'blank') {
        alert("Please select make of vehicle.")
    }
    else if (year < 1980 || year > 2020 ) {
        alert("Please enter year between 1980 and 2020. ")
    }
    else if (name == "") {
        alert("Please enter your name. ")
    }
    else {
        loadLocal(make, year, name);
        location.replace("parts.html")
    }
}

//Loads local storage:
function loadLocal(m, y, n) {
    if (typeof(Storage) !== "undefined") {
        //This will put the details in the local storage in the browser. 
        sessionStorage.setItem("make", m);
        sessionStorage.setItem("year", y);
        sessionStorage.setItem("name", n);
    } else {
        alert("Sorry! No Web Storage support.")
    };
}

//This sets the logo on the parts page on page load. 
function setPage() {

    localStorage.setItem("items", JSON.stringify(items));
    
    // localStorage.setItem(parts, items);

    if (sessionStorage.getItem("make") == "Ford") {
        document.getElementById("logo").src='/media/ford_logo.png';
        document.getElementById("mainHeader").innerHTML="Ford Parts Page"
        welcomeMessage("Ford")
    }
    else if (sessionStorage.getItem("make") == "Chevrolet") {
        document.getElementById("logo").src='/media/chevy_logo.png';
        document.getElementById("mainHeader").innerHTML="Chevrolet Parts Page"
        welcomeMessage("Chevrolet")
    }
    else if (sessionStorage.getItem("make") == "Dodge") {
        document.getElementById("logo").src='/media/dodge_logo.png';
        document.getElementById("mainHeader").innerHTML="Dodge Parts Page"
        welcomeMessage("Dodge")
    }
    else {
        location.replace("project.html")
    }
}

//Sets the welcome message.
function welcomeMessage(m) {
    document.getElementById("welcome").innerHTML="Welcome " + sessionStorage.getItem("name") 
    + ", we have a growing list of parts for your " + sessionStorage.getItem("year") + " "  + m + "."
}

//This is to select and show the items. 
function itemSelect() {
    let opt = document.getElementById("item");
    let choice = opt.options[opt.selectedIndex].value;

    switch(choice){
        case "fuelFilter":
            document.getElementById("product").src='/media/fuel_filter.jpg';
            document.getElementById("partNumber").innerHTML="Part Number: " + items[0].number;
            document.getElementById("itemCost").innerHTML="Cost " + items[0].cost;
            break;
        case "alternator":
            document.getElementById("product").src='/media/alternator.jpg';
            document.getElementById("partNumber").innerHTML="Part Number: " + items[1].number;
            document.getElementById("itemCost").innerHTML="Cost " + items[1].cost;
            break;
        case "starter":
            document.getElementById("product").src='/media/starter.png';
            document.getElementById("partNumber").innerHTML="Part Number: " + items[2].number;
            document.getElementById("itemCost").innerHTML="Cost " + items[2].cost;
            break;
        case "blank":
            document.getElementById("product").src='';
            document.getElementById("partNumber").innerHTML="";
            document.getElementById("itemCost").innerHTML="";
            break;
    };
}

//This adds items to the cart
let cart = [];
let qty = 0;
function addToCart() {
    let opt = document.getElementById("item");
    let item = opt.options[opt.selectedIndex].value; 
    
    if (typeof(Storage) !== "undefined" && item != 'blank') {
        cart.push(item);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        qty = qty + 1;
        document.getElementById("cartQty").innerHTML="Cart quantity: " + qty;
    } else {
        alert("Please select item to add to cart.")
    };
}

//This clears the cart
function clearCart() {
    cart = [];
    qty =0;
    document.getElementById("cartQty").innerHTML='';
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

//This will take you to the check out page
function checkout() {
    location.replace("checkout.html")
}


