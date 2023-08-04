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

// Check Form
function checkForm() {
  errorName.style.display = "none";
  errorSurname.style.display = "none";
  errorNumber.style.display = "none";
  errorMail.style.display = "none";
  errorCity.style.display = "none";

  var profileUsername = document.getElementById("profileUsername"),
    surname = document.getElementById("surname"),
    userNumber = document.getElementById("tel"),
    userMail = document.getElementById("email"),
    userCity = document.getElementById("city");

  checkName = true;
  checkSurname = true;
  checkNumber = true;
  checkMail = true;
  checkCity = true;

  profileUsername.style.border = "3px solid white";
  surname.style.border = "3px solid white";
  userNumber.style.border = "3px solid white";
  userMail.style.border = "3px solid white";
  userCity.style.border = "3px solid white";

  // Check Name

  patternLatters = /^[а-яА-Яa-zA-Z]+$/;

  if (!patternLatters.test(profileUsername.value)) {
    errorName.style.display = "block";
    profileUsername.style.border = "3px solid red";
    checkName = false;
  }
  if (!patternLatters.test(surname.value)) {
    errorSurname.style.display = "block";
    surname.style.border = "3px solid red";
    checkSurname = false;
  }
  if (!patternLatters.test(userCity.value)) {
    errorCity.style.display = "block";
    userCity.style.border = "3px solid red";
    checkCity = false;
  }

  // Check Phone Number

  patternDigit = /^\+380\d{9}$/;

  if (!patternDigit.test(userNumber.value)) {
    errorNumber.style.display = "block";
    userNumber.style.border = "3px solid red";
    checkNumber = false;
  }
  // =================================================================

  // Check Email

  patternMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  if (!patternMail.test(userMail.value)) {
    errorMail.style.display = "block";
    userMail.style.border = "3px solid red";
    checkMail = false;
  }
  // =================================================================

  // Check form to send

  if (
    checkName == true &&
    checkSurname == true &&
    checkNumber == true &&
    checkMail == true &&
    checkCity == true
  ) {
    return true;
  } else {
    return false;
  }
}
// Check Form

// Insert values to the in the form
profileBtn.addEventListener("click", () => {
  username = localStorage.setItem("userProfileName", profileUsername.value);
  userSurname = localStorage.setItem("userSurname", surname.value);
  phoneNumber = localStorage.setItem("phoneNumber", tel.value);
  userMail = localStorage.setItem("userMail", email.value);
  userCity = localStorage.setItem("userCity", city.value);
});

profileUsername.value = localStorage.getItem("userProfileName");
surname.value = localStorage.getItem("userSurname");
tel.value = localStorage.getItem("phoneNumber");
email.value = localStorage.getItem("userMail");
city.value = localStorage.getItem("userCity");
// Insert values to the in the form

// Insert user image to Profile
myImg.onchange = function (event) {
  var target = event.target;

  if (!FileReader) {
    alert("FileReader не підтримується");
    return;
  }

  if (!target.files.length) {
    alert("Нічого не завантажено");
    return;
  }

  var fileReader = new FileReader();

  profileBtn.addEventListener("click", () => {
    localStorage.setItem("userPhoto", fileReader.result);
    img1.src = localStorage.getItem("userPhoto");
  });

  // fileReader.onload = function() {
  //     img1.src = fileReader.result;
  // }

  fileReader.readAsDataURL(target.files[0]);
};

if (localStorage.getItem("userPhoto")) {
  img1.src = localStorage.getItem("userPhoto");
} else {
  img1.style.display = "none";
}
// Insert user image to Profile

// Insert profile name in the header
userName.innerText = localStorage.getItem("userProfileName");

if (userName.innerText.length > 1) {
  arrow.style.display = "flex";
}
// Insert profile name in the header

// Anchor adding
window.addEventListener("mousemove", (e) => {
  if (e.pageY >= 1150) {
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
