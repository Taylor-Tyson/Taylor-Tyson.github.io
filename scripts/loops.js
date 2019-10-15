let manufactuers= [
    "Ford",
    "Dodge",
    "Toyota",
    "Nissan"
];

function countDown(){
    let i = 5;
    let myText = "";

    while (i >= 0){
        myText += "<br>" + i;
        i--;
    }
    document.getElementById("cntDown").innerHTML = myText;
}

function countUp() {
    let i = 0;
    let myText = "";

    do {
        myText += "<br>" + i;
        i++;
    }
    while (i <= 5);
    document.getElementById("cntUp").innerHTML = myText;
}

function listArray() {
    let myText = "";

    for (let i = 0; i < manufactuers.length; i++) {
        myText += manufactuers[i] + ", ";
    }
    document.getElementById("listArray").innerHTML = myText;
}

function forIn() {
    let myText = "";

    for(let i in manufactuers)
        myText += manufactuers[i] + ", ";

    document.getElementById("forin").innerHTML = myText;
}

function forOf() {
    let userInput = document.getElementById("myText").value;
    let myText = "";

    if(userInput != ""){
        for(let char of userInput) {
            myText += char + " - ";
        }
        document.getElementById("iterate").innerHTML = myText;
    }
    else {
        alert("Please enter text.");
    }


    
}