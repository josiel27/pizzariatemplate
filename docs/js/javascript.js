function myFunction() {
    var x = document.getElementById("navSmall");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

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
  var  tablinksg;
  
  tablinksg = document.getElementsByClassName("tablinkg");
  for (var i = 0; i < tablinksg.length; i++) {
     tablinksg[i].className = tablinksg[i].className.replace(" w3-border-green", "");
  }
  evt.currentTarget.firstElementChild.className += " w3-border-green";
}


(function(){
    var x = document.getElementById("imgPizza1");
    x.addEventListener("mouseover", mouseover);
    x.addEventListener("mouseout", ouseout);
    
    function mouseover() {
        var x = document.getElementsByClassName("w3-display-topleft");
        x[0].style.width = '100%';
        x[0].style.borderTopRightRadius = '2px';
    }

    function ouseout() {
        var x = document.getElementsByClassName("w3-display-topleft");
        x[0].style.width = '50%';
        x[0].style.borderTopRightRadius = '0px';
    }
})();


(function(){
var x = document.getElementById("imgPizza2");
x.addEventListener("mouseover", mouseover);
x.addEventListener("mouseout", ouseout);
    
function mouseover() { 
    document.getElementsByClassName("w3-display-topleft")[1].style.width = '100%';
    document.getElementsByClassName("w3-display-topleft")[1].style.borderTopRightRadius = '2px';
}

function ouseout() {
    document.getElementsByClassName("w3-display-topleft")[1].style.width = '50%';
    document.getElementsByClassName("w3-display-topleft")[1].style.borderTopRightRadius = '0px';
}
})();

(function(){
    var x = document.getElementById("imgPizza3");
    x.addEventListener("mouseover", mouseover);
    x.addEventListener("mouseout", ouseout);
    
    function mouseover() {
        var x = document.getElementsByClassName("w3-display-topleft");
        x[2].style.width = '100%';
        x[2].style.borderTopRightRadius = '2px';
    }

    function ouseout() {
        var x = document.getElementsByClassName("w3-display-topleft");
        x[2].style.width = '50%';
        x[2].style.borderTopRightRadius = '0px';
    }
})();