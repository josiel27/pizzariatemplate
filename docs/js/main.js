function hideTab(tab) {
  console.log("AHAHAHA1");
  switch (tab) {
    case "1":
      document.getElementById("tab-hamb-1").style.display = "none";
      document.getElementById("icon-1-off").style.display = "none";
      document.getElementById("icon-1-on").style.display = "flex";
      break;
    case "2":
      document.getElementById("tab-hamb-2").style.display = "none";
      document.getElementById("icon-2-off").style.display = "none";
      document.getElementById("icon-2-on").style.display = "flex";
      break;
    case "3":
      document.getElementById("tab-hamb-3").style.display = "none";
      document.getElementById("icon-3-off").style.display = "none";
      document.getElementById("icon-3-on").style.display = "flex";
      break;
    case "4":
      document.getElementById("tab-hamb-4").style.display = "none";
      document.getElementById("icon-4-off").style.display = "none";
      document.getElementById("icon-4-on").style.display = "flex";
      break;
  }
}
function showTab(tab) {
  console.log("AHAHAHA2");
  switch (tab) {
    case "1":
      document.getElementById("tab-hamb-1").style.display = "block";
      document.getElementById("icon-1-off").style.display = "flex";
      document.getElementById("icon-1-on").style.display = "none";
      break;
    case "2":
      document.getElementById("tab-hamb-2").style.display = "block";
      document.getElementById("icon-2-off").style.display = "flex";
      document.getElementById("icon-2-on").style.display = "none";
      break;
    case "3":
      document.getElementById("tab-hamb-3").style.display = "block";
      document.getElementById("icon-3-off").style.display = "flex";
      document.getElementById("icon-3-on").style.display = "none";
      break;
    case "4":
      document.getElementById("tab-hamb-4").style.display = "block";
      document.getElementById("icon-4-off").style.display = "flex";
      document.getElementById("icon-4-on").style.display = "none";
      break;
  }
}

//mosta o menu para o modo mobile
function showMenu() {
  var x = document.getElementById("navSmall");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// seleciona o menu de pizzas
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-green", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-green";
}
document.getElementById("myLink").click();



function boderGreen(evt) {
  var tablinksg;

  tablinksg = document.getElementsByClassName("tablinkg");
  for (var i = 0; i < tablinksg.length; i++) {
    tablinksg[i].className = tablinksg[i].className.replace(
      " w3-border-green",
      ""
    );
  }
  evt.currentTarget.firstElementChild.className += " w3-border-green";
}


function hideMenu(){
  document.getElementById('navSmall').classList.remove("w3-show");
  console.log('asjdios')
}


// 
// DROPDOWN MENU
// 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log('asrfa')
}
function myFunctionTwo() {
  document.getElementById("myDropdownTwo").classList.toggle("show");
  console.log('asrfa')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}