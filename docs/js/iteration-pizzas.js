(function() {
  var x = document.getElementById("imgPizza1");
  x.addEventListener("mouseover", mouseover);
  x.addEventListener("mouseout", ouseout);

  function mouseover() {
    var x = document.getElementsByClassName("w3-display-topleft");
    x[0].style.width = "100%";
    x[0].style.borderTopRightRadius = "2px";
  }

  function ouseout() {
    var x = document.getElementsByClassName("w3-display-topleft");
    x[0].style.width = "50%";
    x[0].style.borderTopRightRadius = "0px";
  }
})();

(function() {
  var x = document.getElementById("imgPizza2");
  x.addEventListener("mouseover", mouseover);
  x.addEventListener("mouseout", ouseout);

  function mouseover() {
    document.getElementsByClassName("w3-display-topleft")[1].style.width =
      "100%";
    document.getElementsByClassName(
      "w3-display-topleft"
    )[1].style.borderTopRightRadius = "2px";
  }

  function ouseout() {
    document.getElementsByClassName("w3-display-topleft")[1].style.width =
      "50%";
    document.getElementsByClassName(
      "w3-display-topleft"
    )[1].style.borderTopRightRadius = "0px";
  }
})();

(function() {
  var x = document.getElementById("imgPizza3");
  x.addEventListener("mouseover", mouseover);
  x.addEventListener("mouseout", ouseout);

  function mouseover() {
    var x = document.getElementsByClassName("w3-display-topleft");
    x[2].style.width = "100%";
    x[2].style.borderTopRightRadius = "2px";
  }

  function ouseout() {
    var x = document.getElementsByClassName("w3-display-topleft");
    x[2].style.width = "50%";
    x[2].style.borderTopRightRadius = "0px";
  }
})();