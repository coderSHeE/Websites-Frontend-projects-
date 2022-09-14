var modal = document.getElementById('id01');                // we can make only one Id with same name !   


window.onclick = function(event) {                          
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
