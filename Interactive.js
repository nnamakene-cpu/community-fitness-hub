function pageLoaded() {
  alert("Welcome to the Interactive Features page.");
}

function changeText() {
  const text = document.getElementById("demoText");
  text.innerHTML = "The text has been changed using JavaScript.";
  text.style.color = "green";
  text.style.fontWeight = "bold";
}

function hideImage() {
  document.getElementById("fitnessImage").style.display = "none";
}

function showImage() {
  document.getElementById("fitnessImage").style.display = "block";
}

let isMoving = false;

function moveBox() {
  const box = document.getElementById("movingBox");
  if (isMoving) return;

  isMoving = true;
  let position = parseInt(box.style.left) || 0;

  const interval = setInterval(function () {
    if (position >= 300) {
      clearInterval(interval);
      isMoving = false;
    } else {
      position += 5;
      box.style.left = position + "px";
    }
  }, 20);
}

function hoverEffect() {
  const hoverText = document.getElementById("hoverText");
  hoverText.style.color = "blue";
  hoverText.style.fontSize = "22px";
  hoverText.style.fontWeight = "bold";
}

function validateForm() {
  const name = document.getElementById("memberName").value.trim();
  const membership = document.getElementById("membershipType").value;
  const formMessage = document.getElementById("formMessage");

  if (name === "" || membership === "") {
    formMessage.innerHTML = "Please complete all form fields.";
    formMessage.style.color = "red";
    return false;
  }

  formMessage.innerHTML = "Form submitted successfully.";
  formMessage.style.color = "green";
  return false;
}

function textSelected() {
  alert("You selected the text in the input field.");
}
