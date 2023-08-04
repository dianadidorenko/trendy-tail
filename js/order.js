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

orderName.value = localStorage.getItem("userProfileName");
orderSurname.value = localStorage.getItem("userSurname");
orderTel.value = localStorage.getItem("phoneNumber");
orderEmail.value = localStorage.getItem("userMail");

function checkForm() {
  errorName.style.display = "none";
  errorSurname.style.display = "none";
  errorNumber.style.display = "none";
  errorMail.style.display = "none";

  var orderNameInput = document.getElementById("orderName"),
    orderSurnameInput = document.getElementById("orderSurname"),
    orderTelInput = document.getElementById("orderTel"),
    orderEmailInput = document.getElementById("orderEmail");

  checkName = true;
  checkSurname = true;
  checkNumber = true;
  checkEmail = true;

  orderNameInput.style.border = "3px solid grey";
  orderSurnameInput.style.border = "3px solid grey";
  orderTelInput.style.border = "3px solid grey";
  orderEmailInput.style.border = "3px solid grey";

  // Check Name and Surname

  patternLatters = /^[а-яА-Яa-zA-Z]+$/;

  if (!patternLatters.test(orderNameInput.value)) {
    errorName.style.display = "block";
    orderNameInput.style.border = "3px solid red";
    checkName = false;
  }
  if (!patternLatters.test(orderSurnameInput.value)) {
    errorSurname.style.display = "block";
    orderSurnameInput.style.border = "3px solid red";
    checkSurname = false;
  }

  // =================================================================

  // Check Phone Number

  patternDigit = /^\+380\d{9}$/;

  if (!patternDigit.test(orderTelInput.value)) {
    errorNumber.style.display = "block";
    orderTelInput.style.border = "3px solid red";
    checkNumber = false;
  }
  // =================================================================

  // Check Email

  patternMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  if (!patternMail.test(orderEmailInput.value)) {
    errorMail.style.display = "block";
    orderEmailInput.style.border = "3px solid red";
    checkEmail = false;
  }
  // =================================================================

  // Show Need to Agree Block
  let needToAgreeBlock = document.querySelector(".need-to-agree-block");

  if (agreeConditions.checked) {
    needToAgreeBlock.style.display = "none";
    agreeConditions.checked;
  } else {
    let needToAgreeBlock = document.querySelector(".need-to-agree-block");
    needToAgreeBlock.style.display = "flex";
  }
  // Show Need to Agree Block

  // Show City Value to Delivery
  chooseCityDeliveryValue = chooseCityDelivery.value;
  // Show City Value to Delivery

  // Show if need to phone client back
  if (!noNeedToPhone.checked) {
    noNeedToPhoneLabelValue = noNeedToPhoneLabel.innerText;
  } else {
    noNeedToPhoneLabelValue = "Треба передзвонити";
  }
  // Show if need to phone client back

  if (novaPoshta.checked) {
    // Save Chosen Delivery Type
    novaPoshtaValue = novaPoshtaLabel.innerText.split(" ")[0];
    deliveryType.innerText = novaPoshtaValue + ", " + chooseCityDeliveryValue;
    deliveryType.style.display = "flex";
  } else if (ukrPoshta.checked) {
    ukrPoshtaValue = ukrPoshtaLabel.innerText.split(" ")[0];
    deliveryType.innerText = ukrPoshtaValue + ", " + chooseCityDeliveryValue;
    deliveryType.style.display = "flex";
  } else if (meest.checked) {
    meestaValue = meestLabel.innerText.split(" ")[0];
    deliveryType.innerText = meestaValue + ", " + chooseCityDeliveryValue;
    deliveryType.style.display = "flex";
  } else if (!novaPoshta.checked && !ukrPoshta.checked && !meest.checked) {
    alert("Треба обрати спосіб доставки");
  }
  // Save Chosen Delivery Type

  // Check form to send
  if (
    checkName == true &&
    checkSurname == true &&
    checkNumber == true &&
    checkEmail == true
  ) {
    return true;
  } else {
    return false;
  }
}

// Show Empty Block in Shopping Cart
if (!localStorage.getItem("popUpGoodsTitleValue")) {
  emptyOrderBlock.style.display = "flex";
  orderBlock.style.display = "none";
} else if (localStorage.getItem("popUpGoodsTitleValue")) {
  orderBlock.style.display = "flex";
  emptyOrderBlock.style.display = "none";
}
// Show Empty Block in Shopping Cart

// Insert Chosen Values to the Order Confirm Form
orderGoodsTitle.innerText = localStorage.getItem("popUpGoodsTitleValue");
orderSize.innerText = localStorage.getItem("animalSizeProduct");
orderPrice1Piece.innerText = localStorage.getItem("animalProductPrice");
orderPrice.innerText = localStorage.getItem("animalProductPrice");
popUpImage.src = localStorage.getItem("mainPicForPopUp");

// // Quantity
number = 1;

plus.addEventListener("click", function () {
  number++;
  orderQuantity.innerText = number;
  orderPrice.innerText =
    parseInt(orderPrice.innerText) + parseInt(orderPrice1Piece.innerText);
  quantityOrderValue = localStorage.setItem("quantityOrderValue", number);
});

minus.addEventListener("click", function () {
  if (orderQuantity.innerText == 0) {
    orderQuantity.innerText = 0;
  } else {
    number--;
    orderQuantity.innerText = number;
    orderPrice.innerText =
      parseInt(orderPrice.innerText) - parseInt(orderPrice1Piece.innerText);
  }
  quantityOrderValue = localStorage.setItem("quantityOrderValue", number);
});

if (parseInt(localStorage.getItem("quantityOrderValue")) == 1) {
  headerOrderQuantity.style.display = "flex";
  quantityOrderValue = localStorage.setItem("quantityOrderValue", number);
}

// // Quantity

// // Save Chosen City to Deliver
chooseCityDelivery.addEventListener("change", () => {
  chooseCityDeliveryValue = localStorage.setItem(
    "CityDeliveryValue",
    chooseCityDelivery.value
  );
  chooseCityDeliveryValueToSend = localStorage.getItem("CityDeliveryValue");
});

// // Save Chosen City to Deliver
// Insert Chosen Values to the Order Confirm Form

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

// Close Need To Agree Pop Up

closeNeedAgreeBlock.addEventListener("click", () => {
  let needToAgreeBlock = document.querySelector(".need-to-agree-block");

  needToAgreeBlock.style.display = "none";
});

// Close Need To Agree Pop Up

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
