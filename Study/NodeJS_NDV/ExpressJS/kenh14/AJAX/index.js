
function loadAjax() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.container').innerHTML =
    this.responseText;
    
  }
};
xhttp.open("GET", "http://localhost:3000/ajax", true);
xhttp.send();
}

document.querySelector('button').onclick = loadAjax;