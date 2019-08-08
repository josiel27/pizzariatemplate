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
