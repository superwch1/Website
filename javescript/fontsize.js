//can define 3 set of font size, laptop, table and mobile

document.getElementById("header_small_A").onclick = function() {
  document.documentElement.style.setProperty('--font-size-extra-small', "20px");
  document.documentElement.style.setProperty('--font-size-small', "28px");
  document.documentElement.style.setProperty('--font-size-medium', "36px");
  document.documentElement.style.setProperty('--font-size-large', "48px");
}

document.getElementById("header_big_A").onclick = function() {
  document.documentElement.style.setProperty('--font-size-extra-small', "22px");
  document.documentElement.style.setProperty('--font-size-small', "30px");
  document.documentElement.style.setProperty('--font-size-medium', "38px");
  document.documentElement.style.setProperty('--font-size-large', "50px");
}