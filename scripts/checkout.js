let myCart = JSON.parse(sessionStorage.getItem("cart"));
let table = document.getElementById("cartTable");
let taxRate;

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

//This diplays the contents of the cart. 
function showCart() {
    // console.log(myCart.length);
    for (var i = 0; i < myCart.length; i++) {
        // console.log(myCart[i].number);
        addRow(myCart[i].itemName, myCart[i].number, myCart[i].cost);
    }
}

//This adds rows to the table. 
function addRow(item, num, cost) {
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = item;
    cell2.innerHtml = num;
    cell3.innerHTML = cost;
}

//This calculates the total cost. 
function calculateTotal() {
    let zip = document.getElementById("userZip").value;
    let subTotal = 0;
    let total = 0;
    let salesTax = 0;

    if (document.getElementById("userZip").value == "") {
        alert("Please enzer zip code.")
    }
    else {
        for (var i = 0; i < myCart.length; i++) {
            subTotal += parseFloat(myCart[i].cost.replace(/[^0-9.-]+/g,""));
        }

        document.getElementById("subTotal").innerHTML = "Subtotal: " + subTotal.toFixed(2);
        getTax();
        document.getElementById("tax").innerHTML = "Tax rate: " + taxRate;
        salesTax = (subTotal * taxRate);
        total = subTotal + salesTax; 
        sessionStorage.setItem("totalCost", parseFloat(total).toFixed(2));
        document.getElementById("total").innerHTML = "Total Cost: $" + parseFloat(total).toFixed(2);
    }
}

//This calls an API to get tax rate by zip code. 
function getTax () {
    let zip = document.getElementById("userZip").value;
    let url = `https://trial.serviceobjects.com/ft/web.svc/JSON/GetBestMatch?&Zip=${zip}&TaxType=sales&LicenseKey=%20WS19-VOS2-URQ3%20`;
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(this.responseText);
          sessionStorage.setItem("taxRate", response.TaxInfoItems[0].TaxRate);
          taxRate = response.TaxInfoItems[0].TaxRate;
        }
      };
      request.open("GET", url, false);
      request.send();
    }

//This will take you to the order page
function submitOrder() {
    location.replace("order.html")
}
