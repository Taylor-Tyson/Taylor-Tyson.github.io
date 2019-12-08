

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
    if (typeof(Storage) !== "undefined") {

        let myCart = JSON.parse(sessionStorage.getItem("cart"));
        console.log(myCart[0].cost);

        

    } else {
        document.getElementById("cart").innerHTML = "Sorry! No Web Storage support."
      }
}