function docLoad() {
    let url = "https://api.chucknorris.io/jokes/random?category=history";
    let request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = response.value;
      }
    };
    request.open("GET", url, true);
    request.send();
  }