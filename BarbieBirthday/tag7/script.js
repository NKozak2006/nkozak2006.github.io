function enter() {
  if (document.getElementById("text").value.toLowerCase() == "24") {
      success();
  } else {
      alert("That is incorrect! Please try again!");
      y = 0;
      document.getElementById("text").value = "";
  }
}

function setup() {
  document.getElementById("f1").value = "Upstairs Closet";
  document.getElementById("f2").value = 7;
  document.getElementById("f3").value = "Reverse Message";
}

function success() {
  document.getElementById("container").style.visibility = "hidden";
  document.getElementById("container").style.display = "none";
  document.getElementById("cont").style.visibility = "visible";
  document.getElementById("cont").style.display = "block";
  typeWriter();
}

var i = 0;
var txt = "Wow, after all of this running around you must be absolutely famished!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
  document.getElementById("res").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}

function hint() {
  document.getElementById("enter").innerHTML = "Reversed";
}