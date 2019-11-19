let img = document.getElementById("myImage");
let element = document.getElementById("myP");


function hasAtt() {
    if (img.hasAttribute('src'))
        document.getElementById("demo").innerHTML = "The image tag has src defined.";
    else {
        document.getElementById("demo").innerHTML = "The image tag does not src defined.";
    }
}

function getAtt() {
    let att = img.getAttribute('src');
    if (img.hasAttribute('src'))
        document.getElementById("demo").innerHTML = "The image tag has src defined as " + att;
    else {
        document.getElementById("demo").innerHTML = "The image tag does not have src defined.";
    }
}

function setAtt() {
    img.setAttribute('src', '/media/sad_face_150.jpg');
    document.getElementById("demo").innerHTML = "He is sad now!";
}

function makeHappy() {
    img.setAttribute('src', '/media/smiley_150.jpg');
    document.getElementById("demo").innerHTML = "He is happy again!";
}

function removeAtt() {
    img.removeAttribute('src');
    document.getElementById("demo").innerHTML = "He is gone!";

}

//Used for modifying class
function addClass() {
    removeCurrent();
    element.classList.add('purple');
    document.getElementById("myP").innerHTML = "I turned you purple and made you large.";
}

function toggleClass() {
    removeCurrent();
    element.classList.toggle('blue');
}

function containClass() {
    let active = element.classList.contains('blue');
    if (active) {
        document.getElementById("demo1").innerHTML = "Class blue is active!";
    }
    else {
        document.getElementById("demo1").innerHTML = "Class blue is not active.Toggle blue and try again.";
    }
    
}

function replaceClass() {
    let current = document.getElementById("myP").className;
    if (current == "") {
        document.getElementById("demo1").innerHTML = "No class is active. Toggle blue and try again.";
    }
    else if (current == "red") {
        document.getElementById("demo1").innerHTML = "Class red is already active.";
    }
    else {
        element.classList.replace(current, 'red');
        document.getElementById("demo1").innerHTML = "Class " + current + " is has been replaced with red.";
    }
    
}

function removeAll() {
    removeCurrent();
    document.getElementById("demo1").innerHTML = "";
}

function removeCurrent() {
    let current = document.getElementById("myP").className;

    if (current != ""){
        element.classList.remove(current);
    }
}
