function addToList() {   
    let userInput = document.getElementById("myText").value;
    let li = document.createElement("li");
    let item = document.createTextNode(userInput);
    li.appendChild(item);
    document.getElementById("list").appendChild(li);
    document.getElementById('myText').value = "";
}

function remove() {
    let myList =  document.getElementById("list");
    myList.removeChild(myList.childNodes[myList.childNodes.length-1]);
    // myList.removeChild(myList.childNodes[1]);

    document.getElementById('myText').value = "";
}