function hideTab(tab) {
  console.log("AHAHAHA1");
  switch (tab) {
    case "1":
      document.getElementById("tab-hamb-1").style.display = "none";
      document.getElementById("tab-hamb-1").style.display = "none";
      break;
    case "2":
      document.getElementById("tab-hamb-2").style.display = "none";
      break;
    case "3":
      document.getElementById("tab-hamb-3").style.display = "none";
      break;
    case "4":
      document.getElementById("tab-hamb-4").style.display = "none";
      break;
  }
}
function showTab(tab) {
  console.log("AHAHAHA2");
  switch (tab) {
    case "1":
      document.getElementById("tab-hamb-1").style.display = "block";
      break;
    case "2":
      document.getElementById("tab-hamb-2").style.display = "block";
      break;
    case "3":
      document.getElementById("tab-hamb-3").style.display = "block";
      break;
    case "4":
      document.getElementById("tab-hamb-4").style.display = "block";
      break;
  }
}
