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

// Insert values to the in the form

profileBtn.addEventListener("click", (e) => {
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

if (localStorage.getItem("userPhoto").length > 1) {
  img1.src = localStorage.getItem("userPhoto");
} else {
  img1.style.display = "none";
}

// Insert user image to Profile

// Insert profile name in the header

userName.innerText = localStorage.getItem("userProfileName");

if (profileUsername.innerText.length > 1) {
  arrow.style.display = "flex";
}

// Insert profile name in the header
