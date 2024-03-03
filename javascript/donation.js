//highlight the box
var selectElement = function(element) {
  element.style.backgroundColor = "#0D6792";
  element.style.color = "#ffffff";
}

//unhighlight the box
var unselectElement = function(element) {
  element.style.backgroundColor = "#ffffff";
  element.style.color = "#000000";
}



//highlight the monthly box and unhighligh other boxes
document.getElementById("donation_choice_monthly").onclick = function() {
  selectElement(document.getElementById("donation_choice_monthly"));
  unselectElement(document.getElementById("donation_choice_oneoff"));
}

//highlight the oneoff box and unhighligh other boxes
document.getElementById("donation_choice_oneoff").onclick = function() {
  selectElement(document.getElementById("donation_choice_oneoff"));
  unselectElement(document.getElementById("donation_choice_monthly"));
}



//highlight the one hundred box, unhighlight other boxes and clear text for entering amount
document.getElementById("donation_choice_onehundred").onclick = function() {
  selectElement(document.getElementById("donation_choice_onehundred"));
  unselectElement(document.getElementById("donation_choice_fivehundred"));
  unselectElement(document.getElementById("donation_choice_onethousand"));
  document.getElementById("donation_choice_customamount").innerText = "";
}

//highlight the five hundred box, unhighlight other boxes and clear text for entering amount
document.getElementById("donation_choice_fivehundred").onclick = function() {
  selectElement(document.getElementById("donation_choice_fivehundred"));
  unselectElement(document.getElementById("donation_choice_onehundred"));
  unselectElement(document.getElementById("donation_choice_onethousand"));
  document.getElementById("donation_choice_customamount").innerText = "";
}

//highlight the one thousand box, unhighlight other boxes and clear text for entering amount
document.getElementById("donation_choice_onethousand").onclick = function() {
  selectElement(document.getElementById("donation_choice_onethousand"));
  unselectElement(document.getElementById("donation_choice_fivehundred"));
  unselectElement(document.getElementById("donation_choice_onehundred"));
  document.getElementById("donation_choice_customamount").innerText = "";
}

//unhighlight other boxes
document.getElementById("donation_choice_customamount").oninput = function() {
  unselectElement(document.getElementById("donation_choice_onehundred"));
  unselectElement(document.getElementById("donation_choice_fivehundred"));
  unselectElement(document.getElementById("donation_choice_onethousand"));
}



//show an alert for thank you the donation
document.getElementById("donation_submit_button").onclick = function() {
  alert("Thank You for Your Donation");
}