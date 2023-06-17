function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function openFile() {
    document.getElementById("top-open-file").click();
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("top-dropbtn-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
      }
    } 
}
