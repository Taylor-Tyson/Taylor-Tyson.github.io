function selection() {
    let opt = document.getElementById("mySelection");
    let choice = opt.options[opt.selectedIndex].value;

    switch(choice){
        case "Select Me":
            document.getElementById("demo").innerHTML = "Why did you select me?";
            break;
        case "No Select Me":
            document.getElementById("demo").innerHTML = "Thanks for selecting me. I didn't think you would do it.";
            break;
        case "You Better Select Me":
            document.getElementById("demo").innerHTML = "You made the right choice by selecting me.";
            break;
        case "":
            document.getElementById("demo").innerHTML = "";
            break;
    };
}

function clickMe() {
    alert("You pressed the Click Me button. I hope you are happy now.");
}

function answer() {
    document.getElementById("demo3").innerHTML = "Yesterday, Today, and Tomorrow";
}

function mouseOut() {
    document.getElementById("demo3").innerHTML = "";
}

function touchAnswer() {
    document.getElementById("demo4").innerHTML = "Footsteps";
}

function touchEnd() {
    document.getElementById("demo4").innerHTML = "";
}