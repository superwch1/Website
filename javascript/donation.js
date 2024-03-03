var selectElement = function(element) {
  element.style.backgroundColor = "#0D6792";
  element.style.color = "#ffffff";
}

var unselectElement = function(element) {
  element.style.backgroundColor = "#ffffff";
  element.style.color = "#000000";
}



document.getElementById("donation_choice_monthly").onclick = function() {
  selectElement(document.getElementById("donation_choice_monthly"));
  unselectElement(document.getElementById("donation_choice_oneoff"));
}

document.getElementById("donation_choice_oneoff").onclick = function() {
  selectElement(document.getElementById("donation_choice_oneoff"));
  unselectElement(document.getElementById("donation_choice_monthly"));
}



document.getElementById("donation_choice_onehundred").onclick = function() {
  selectElement(document.getElementById("donation_choice_onehundred"));
  unselectElement(document.getElementById("donation_choice_fivehundred"));
  unselectElement(document.getElementById("donation_choice_onethousand"));
  document.getElementById("donation_choice_customamount").innerText = "";
}

document.getElementById("donation_choice_fivehundred").onclick = function() {
  selectElement(document.getElementById("donation_choice_fivehundred"));
  unselectElement(document.getElementById("donation_choice_onehundred"));
  unselectElement(document.getElementById("donation_choice_onethousand"));
  document.getElementById("donation_choice_customamount").innerText = "";
}

document.getElementById("donation_choice_onethousand").onclick = function() {
  selectElement(document.getElementById("donation_choice_onethousand"));
  unselectElement(document.getElementById("donation_choice_fivehundred"));
  unselectElement(document.getElementById("donation_choice_onehundred"));
  document.getElementById("donation_choice_customamount").innerText = "";
}

document.getElementById("donation_choice_customamount").oninput = function() {
  unselectElement(document.getElementById("donation_choice_onehundred"));
  unselectElement(document.getElementById("donation_choice_fivehundred"));
  unselectElement(document.getElementById("donation_choice_onethousand"));
}

document.getElementById("donation_submit_button").onclick = function() {
  alert("Thank You for Your Donation");
}


