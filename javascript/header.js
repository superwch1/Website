//toggle the visibility of the navigation menu by clicking the menu button
document.getElementById("header_menu_button").onclick = function() {
  var nav = document.getElementById("header_nav_mobile");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}