//toggle the visibility of navigation menu by clicking the menu button in mobile device
document.getElementById("header_menu_button").onclick = function() {
  var nav = document.getElementById("header_nav_mobile");

  //if the navigation menu is displaying, change the display to none
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } 
  
  //if the navigation menu is hiding, change it to visibile
  else {
    nav.style.display = "flex";
  }
}