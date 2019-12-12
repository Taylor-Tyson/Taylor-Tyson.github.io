let myCart = JSON.parse(sessionStorage.getItem("cart"));
var table = document.getElementById("cartTable");

//This sets the page on page load. 
function setPage() {
    if (sessionStorage.getItem("make") == "Ford") {
        document.getElementById("mainHeader").innerHTML="Ford Parts Checkout Page"
        welcomeMessage("Ford");
        showCart();
    }
    else if (sessionStorage.getItem("make") == "Chevrolet") {
        document.getElementById("mainHeader").innerHTML="Chevrolet Parts Checkout Page"
        welcomeMessage("Chevrolet");
        showCart();
    }
    else if (sessionStorage.getItem("make") == "Dodge") {
        document.getElementById("mainHeader").innerHTML="Dodge Parts Checkout Page"
        welcomeMessage("Dodge");
        showCart();
    }
    else {
        location.replace("project.html")
    }
}

//This sets the welcome message
function welcomeMessage(m) {
    document.getElementById("welcome").innerHTML=sessionStorage.getItem("name") 
    + ", a couple more steps and your " + sessionStorage.getItem("make") 
    + " parts will be on the way."
}

function showCart() {
    // let myCart = JSON.parse(sessionStorage.getItem("cart"));
    // var table = document.getElementById("cartTable");
    // var row = table.insertRow(1);
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // let row = '';
    // let cell1 = '';
    // let cell2 = '';
    console.log(myCart.length);
    

    for (var i = 0; i < myCart.length; i++) {
        // table.insertRow(i);
        // cell1 = row.insertCell(i);
        // cell1.innerHTML = myCart[i].itemName;
        // cell2 = row.insertCell(i + 1);
        // cell2.innerHTML = myCart[i].cost;
        console.log(myCart[i].number);
        addRow(myCart[i].itemName, myCart[i].number, myCart[i].cost);
    }
}

function addRow(item, num, cost) {
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = item;
    cell2.innerHtml = num;
    cell3.innerHTML = cost;
}

