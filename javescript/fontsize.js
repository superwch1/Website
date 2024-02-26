document.getElementById("header_small_A").onclick = function() {
  document.documentElement.style.setProperty('--font-size-extra-small', "20px");
  document.documentElement.style.setProperty('--font-size-small', "28px");
  document.documentElement.style.setProperty('--font-size-medium', "36px");
  document.documentElement.style.setProperty('--font-size-large', "48px");
}

document.getElementById("header_big_A").onclick = function() {
  document.documentElement.style.setProperty('--font-size-extra-small', "24px");
  document.documentElement.style.setProperty('--font-size-small', "32px");
  document.documentElement.style.setProperty('--font-size-medium', "40px");
  document.documentElement.style.setProperty('--font-size-large', "52px");
}