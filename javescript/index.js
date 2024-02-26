document.getElementById("services_family").onmouseenter = function() {
  document.getElementById("services_family_logo").src = "media/index/color_family_logo.png";
};

document.getElementById("services_family").onmouseleave = function() {
  document.getElementById("services_family_logo").src = "media/index/family_logo.png";
};

document.getElementById("services_children").onmouseenter = function() {
  document.getElementById("services_children_logo").src = "media/index/color_children_logo.png";
};

document.getElementById("services_children").onmouseleave = function() {
  document.getElementById("services_children_logo").src = "media/index/children_logo.png";
};

document.getElementById("services_school").onmouseenter = function() {
  document.getElementById("services_school_logo").src = "media/index/color_school_logo.png";
};

document.getElementById("services_school").onmouseleave = function() {
  document.getElementById("services_school_logo").src = "media/index/school_logo.png";
};



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


