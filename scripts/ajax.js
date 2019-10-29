function docLoad() {
    let url = "http://numbersapi.com/random/year?json";
    let request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = response.text;
      }
    };
    request.open("GET", url, true);
    request.send();
  }