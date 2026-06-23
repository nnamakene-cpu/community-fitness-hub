const membershipForm = document.getElementById("membershipForm");
const membershipMessage = document.getElementById("membershipMessage");

if (membershipForm) {
  membershipForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const membershipPlan = document.getElementById("membershipPlan").value;
    const comments = document.getElementById("comments").value.trim();
    const level = document.querySelector('input[name="level"]:checked');
    const goals = document.querySelectorAll('input[name="goals"]:checked');
    const preferredDay = document.getElementById("preferredDay").selectedOptions;

    let errors = [];

    if (fullName === "") {
      errors.push("Full name is required.");
    }

    if (email === "" || !validateEmail(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (phone === "") {
      errors.push("Phone number is required.");
    }

    if (!level) {
      errors.push("Please select your training level.");
    }

    if (goals.length === 0) {
      errors.push("Please choose at least one fitness goal.");
    }

    if (membershipPlan === "") {
      errors.push("Please select a membership type.");
    }

    if (preferredDay.length === 0) {
      errors.push("Please choose a preferred training day.");
    }

    if (comments.length < 10) {
      errors.push("Please enter at least 10 characters in the health notes/goals box.");
    }

    if (errors.length > 0) {
      membershipMessage.style.color = "red";
      membershipMessage.innerHTML = errors.join("<br>");
    } else {
      membershipMessage.style.color = "green";
      membershipMessage.innerHTML = "Form submitted successfully.";
    }
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
