//can define 3 set of font size, laptop, table and mobile

//set the font size to small for laptop, tablet and mobile resolution
document.getElementById("header_small_A").onclick = function() {
  document.documentElement.style.setProperty('--font-size-laptop-extra-small', "20px");
  document.documentElement.style.setProperty('--font-size-laptop-small', "28px");
  document.documentElement.style.setProperty('--font-size-laptop-medium', "36px");
  document.documentElement.style.setProperty('--font-size-laptop-large', "48px");
}

//set the font size to large for laptop, tablet and mobile resolution
document.getElementById("header_big_A").onclick = function() {
  document.documentElement.style.setProperty('--font-size-laptop-extra-small', "22px");
  document.documentElement.style.setProperty('--font-size-laptop-small', "30px");
  document.documentElement.style.setProperty('--font-size-laptop-medium', "38px");
  document.documentElement.style.setProperty('--font-size-laptop-large', "50px");
}