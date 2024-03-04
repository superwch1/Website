//set the font size to small for laptop, tablet and mobile resolution
var smallAs = document.getElementsByClassName("header_small_A");

//attach the function to all element with class name "header_small_A"
for (var i = 0; i < smallAs.length; i++) {
  smallAs[i].onclick = function() {
    //set the font size of laptop user to small
    document.documentElement.style.setProperty('--font-size-laptop-extra-small', "20px");
    document.documentElement.style.setProperty('--font-size-laptop-small', "28px");
    document.documentElement.style.setProperty('--font-size-laptop-medium', "36px");
    document.documentElement.style.setProperty('--font-size-laptop-large', "48px");

    //set the font size of tablet user to small
    document.documentElement.style.setProperty('--font-size-tablet-extra-small', "16px");
    document.documentElement.style.setProperty('--font-size-tablet-small', "20px");
    document.documentElement.style.setProperty('--font-size-tablet-medium', "26px");
    document.documentElement.style.setProperty('--font-size-tablet-large', "36px");

    //set the font size of mobile user to small
    document.documentElement.style.setProperty('--font-size-mobile-extra-small', "12px");
    document.documentElement.style.setProperty('--font-size-mobile-small', "14px");
    document.documentElement.style.setProperty('--font-size-mobile-medium', "18px");
    document.documentElement.style.setProperty('--font-size-mobile-large', "26px");
  };
}



//set the font size to large for laptop, tablet and mobile resolution
var bigAs = document.getElementsByClassName("header_big_A");

//attach the function to all element with class name "header_big_A"
for (var i = 0; i < bigAs.length; i++) {
  bigAs[i].onclick = function() {
    //set the font size of laptop user to big
    document.documentElement.style.setProperty('--font-size-laptop-extra-small', "22px");
    document.documentElement.style.setProperty('--font-size-laptop-small', "30px");
    document.documentElement.style.setProperty('--font-size-laptop-medium', "38px");
    document.documentElement.style.setProperty('--font-size-laptop-large', "50px");
  
    //set the font size of tablet user to big
    document.documentElement.style.setProperty('--font-size-tablet-extra-small', "18px");
    document.documentElement.style.setProperty('--font-size-tablet-small', "22px");
    document.documentElement.style.setProperty('--font-size-tablet-medium', "28px");
    document.documentElement.style.setProperty('--font-size-tablet-large', "38px");
  
    //set the font size of mobile user to big
    document.documentElement.style.setProperty('--font-size-mobile-extra-small', "14px");
    document.documentElement.style.setProperty('--font-size-mobile-small', "16px");
    document.documentElement.style.setProperty('--font-size-mobile-medium', "20px");
    document.documentElement.style.setProperty('--font-size-mobile-large', "28px");
  };
}