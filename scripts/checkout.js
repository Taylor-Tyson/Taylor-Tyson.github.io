

//This sets the logo on the parts page on page load. 
function setPage() {
    if (sessionStorage.getItem("make") == "Ford") {
        // document.getElementById("logo").src='/media/ford_logo.png';
        document.getElementById("mainHeader").innerHTML="Ford Parts Page"
        welcomeMessage("Ford")
    }
    else if (sessionStorage.getItem("make") == "Chevrolet") {
        // document.getElementById("logo").src='/media/chevy_logo.png';
        document.getElementById("mainHeader").innerHTML="Chevrolet Parts Page"
        welcomeMessage("Chevrolet")
    }
    else if (sessionStorage.getItem("make") == "Dodge") {
        // document.getElementById("logo").src='/media/dodge_logo.png';
        document.getElementById("mainHeader").innerHTML="Dodge Parts Page"
        welcomeMessage("Dodge")
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