checkNotRobotNumber1.innerText = number1 = Math.round(Math.random() * 10) + 1;
checkNotRobotNumber2.innerText = number2 = Math.round(Math.random() * 10) + 1;

var total = number1 + number2;

function checkContactsForm() {
  errorName.style.display = "none";
  errorNumber.style.display = "none";
  errorMail.style.display = "none";
  errorCountry.style.display = "none";
  errorCity.style.display = "none";
  errorSum.style.display = "none";
  errorTextArea.style.display = "none";

  var clientName = document.getElementById("clientName"),
    userNumber = document.getElementById("telephone"),
    userMail = document.getElementById("email"),
    userCountry = document.getElementById("country"),
    userCity = document.getElementById("city"),
    userCheckEquivalence = document.getElementById("sum"),
    userTextArea = document.getElementById("text");

  checkName = true;
  checkNumber = true;
  checkMail = true;
  checkCountry = true;
  checkCity = true;
  checkEquivalence = true;
  checkTextAreaText = true;

  clientName.style.borderBottom = "3px solid white";
  userNumber.style.borderBottom = "3px solid white";
  userMail.style.borderBottom = "3px solid white";
  userCountry.style.borderBottom = "3px solid white";
  userCity.style.borderBottom = "3px solid white";
  userCheckEquivalence.style.borderBottom = "3px solid white";
  userTextArea.style.border = "3px solid white";

  // Check Name

  patternLatters = /^[а-яА-Яa-zA-Z]+$/;

  if (!patternLatters.test(clientName.value)) {
    errorName.style.display = "block";
    clientName.style.borderBottom = "3px solid red";
    checkName = false;
  }
  if (!patternLatters.test(userCountry.value)) {
    errorCountry.style.display = "block";
    userCountry.style.borderBottom = "3px solid red";
    checkCountry = false;
  }
  if (!patternLatters.test(userCity.value)) {
    errorCity.style.display = "block";
    userCity.style.borderBottom = "3px solid red";
    checkCity = false;
  }

  // Check Phone Number

  patternDigit = /^\+380\d{9}$/;

  if (!patternDigit.test(userNumber.value)) {
    errorNumber.style.display = "block";
    userNumber.style.borderBottom = "3px solid red";
    checkNumber = false;
  }
  // =================================================================

  // Check Email

  patternMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  if (!patternMail.test(userMail.value)) {
    errorMail.style.display = "block";
    userMail.style.borderBottom = "3px solid red";
    checkMail = false;
  }
  // =================================================================

  // Check Total Sum Equivalence

  if (userCheckEquivalence.value != total) {
    errorSum.style.display = "block";
    userCheckEquivalence.style.borderBottom = "3px solid red";
    checkEquivalence = false;
  }

  // =================================================================

  if (userTextArea.value.length < 10) {
    errorTextArea.style.display = "block";
    userTextArea.style.border = "3px solid red";
    checkTextAreaText = false;
  }

  // Check form to send

  if (
    checkName == true &&
    checkNumber == true &&
    checkMail == true &&
    checkCountry == true &&
    checkCity == true &&
    checkEquivalence == true &&
    checkTextAreaText == true
  ) {
    return true;
  } else {
    return false;
  }
}

// Anchor adding

window.addEventListener("mousemove", (e) => {
  if (e.pageY >= 1850) {
    ancorImg.style.display = "block";
  } else {
    ancorImg.style.display = "none";
  }
});

// Anchor adding
