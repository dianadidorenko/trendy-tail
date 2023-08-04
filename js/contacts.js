// Burger menu

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu__button");
  let links = menu.find(".burger-menu__link");
  let overlay = menu.find(".burger-menu__overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu_active");
    if (menu.hasClass("burger-menu_active")) {
      // calling burger menu
      $("body").css("overflow", "hidden");
      $(".burger-header-menu").css("display", "flex");
    } else {
      // when clicking outside the burger menu
      $("body").css("overflow", "visible");
      $(".burger-header-menu").css("display", "none");
    }
  }
}
burgerMenu(".burger-menu");

// Burger menu

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

// Changing theme

const toggle = document.querySelector(".toggle");
let root = document.documentElement;

var checked = JSON.parse(localStorage.getItem("toggle")),
  checkbox = document.querySelector("#toggle");

inputThemeText.innerText = "Зробити темніше?";

if (checked == true) {
  checkbox.checked = true;
  root.style.setProperty("--background", localStorage.getItem("background"));
  root.style.setProperty("--background-color", "#795555");
  root.style.setProperty("--primary-color", "white");
  root.style.setProperty("--secondary-color", "white");
  root.style.setProperty("--footer-bg", "#218287");
  root.style.setProperty("--footer-text-color", "white");
  root.style.setProperty("--thirdly-color", "white");
  root.style.setProperty("--search-background-color", "#cacaca");
  root.style.setProperty("--search-text-color", "#333");
  root.style.setProperty("--not-active-link", "#e9e9e9");

  inputThemeText.innerText = "Зробити світліше?";
} else {
  localStorage.removeItem("toggle");
  root.style.setProperty("--background", "white");
  root.style.setProperty("--background-color", "white");
  root.style.setProperty("--primary-color", "#000");
  root.style.setProperty("--secondary-color", "#000");
  root.style.setProperty("--button-color", "white");
  root.style.setProperty("--footer-bg", "#d2e5dc");
  root.style.setProperty("--footer-text-color", "#333");
  root.style.setProperty("--search-background-color", "white");
  root.style.setProperty("--search-text-color", "white");
  root.style.setProperty("--not-active-link", "#757575");

  inputThemeText.innerText = "Зробити темніше?";
}

toggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    localStorage.setItem("toggle", checkbox.checked);

    localStorage.setItem("background", "#795555");
    root.style.setProperty("--background", localStorage.getItem("background"));
    root.style.setProperty("--background-color", "white");
    root.style.setProperty("--primary-color", "white");
    root.style.setProperty("--secondary-color", "white");
    root.style.setProperty("--button-color", "white");
    root.style.setProperty("--footer-bg", "#218287");
    root.style.setProperty("--footer-text-color", "white");
    root.style.setProperty("--search-background-color", "#cacaca");
    root.style.setProperty("--search-text-color", "#333");
    root.style.setProperty("--not-active-link", "#e9e9e9");

    inputThemeText.innerText = "Зробити світліше?";
  } else {
    localStorage.removeItem("toggle");
    root.style.setProperty("--background", "white");
    root.style.setProperty("--background-color", "white");
    root.style.setProperty("--primary-color", "#000");
    root.style.setProperty("--secondary-color", "#000");
    root.style.setProperty("--button-color", "white");
    root.style.setProperty("--footer-bg", "#d2e5dc");
    root.style.setProperty("--footer-text-color", "#333");
    root.style.setProperty("--search-background-color", "white");
    root.style.setProperty("--search-text-color", "white");
    root.style.setProperty("--not-active-link", "#757575");

    inputThemeText.innerText = "Зробити темніше?";
  }
});

// Changing theme

// Insert Product Quantity to the Header Shopping Cart
if (
  parseInt(localStorage.getItem("quantityOrderValue")) == 0 ||
  !localStorage.getItem("quantityOrderValue")
) {
  headerOrderQuantity.style.display = "none";
} else {
  headerOrderQuantity.style.display = "flex";
  headerOrderQuantity.innerText = localStorage.getItem("quantityOrderValue");
}
// Insert Product Quantity to the Header Shopping Cart

// Insert profile name in the header

userName.innerText = localStorage.getItem("userProfileName");

if (userName.innerText.length > 1) {
  arrow.style.display = "flex";
}

// Insert profile name in the header
