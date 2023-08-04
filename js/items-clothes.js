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

// Click for full image view

function fullView(ImgLink) {
  document.getElementById("FullImage").src = ImgLink;
  document.getElementById("FullImageView").style.display = "block";
}
function closeFullView() {
  document.getElementById("FullImageView").style.display = "none";
}

// Click for full image view

// Exact price depends on the size click

sizes.addEventListener("mousedown", (e) => {
  xsGroup.style.background = "rgba(128, 180, 182, 0.1)";
  sGroup.style.background = "rgba(128, 180, 182, 0.1)";
  mGroup.style.background = "rgba(128, 180, 182, 0.1)";
  lGroup.style.background = "rgba(128, 180, 182, 0.1)";
  xlGroup.style.background = "rgba(128, 180, 182, 0.1)";

  if (
    e.target.id == "xs" &&
    e.srcElement.parentElement.className == "check-group"
  ) {
    e.srcElement.parentElement.style.background = "rgba(128, 180, 182, 0.4)";
    price.innerText = "829";
  } else if (
    e.target.id == "s" &&
    e.srcElement.parentElement.className == "check-group"
  ) {
    e.srcElement.parentElement.style.background = "rgba(128, 180, 182, 0.4)";
    price.innerText = "879";
  } else if (
    e.target.id == "m" &&
    e.srcElement.parentElement.className == "check-group"
  ) {
    e.srcElement.parentElement.style.background = "rgba(128, 180, 182, 0.4)";
    price.innerText = "929";
  } else if (
    e.target.id == "l" &&
    e.srcElement.parentElement.className == "check-group"
  ) {
    e.srcElement.parentElement.style.background = "rgba(128, 180, 182, 0.4)";
    price.innerText = "979";
  } else if (
    e.target.id == "xl" &&
    e.srcElement.parentElement.className == "check-group"
  ) {
    e.srcElement.parentElement.style.background = "rgba(128, 180, 182, 0.4)";
    price.innerText = "1029";
  }
});

// Exact price depends on the size click

// Pop Up Added Item To The Shopping Cart

buy.addEventListener("click", () => {
  let checked = document.querySelectorAll('input[type="radio"]:checked'),
    wrapper = document.querySelector(".wrapper");

  popUpShoppingCart.style.display = "flex";
  wrapper.style.opacity = "0.3";

  document.getElementById("popUpImage").src = mainPicForPopUp.src;

  mainPicForPopUp = localStorage.setItem(
    "mainPicForPopUp",
    mainPicForPopUp.src
  );

  popUpGoodsTitle.innerText = h1.innerText;

  popUpGoodsTitleValue = localStorage.setItem(
    "popUpGoodsTitleValue",
    popUpGoodsTitle.innerText
  );

  for (check of checked) {
    if (check.id == "xs") {
      popUpSize.innerText = check.id;
      popUpQuantity.innerText = "1";
      popUpPrice.innerText = price.innerText;
    } else if (check.id == "s") {
      popUpSize.innerText = check.id;
      popUpQuantity.innerText = "1";
      popUpPrice.innerText = price.innerText;
    } else if (check.id == "m") {
      popUpSize.innerText = check.id;
      popUpQuantity.innerText = "1";
      popUpPrice.innerText = price.innerText;
    } else if (check.id == "l") {
      popUpSize.innerText = check.id;
      popUpQuantity.innerText = "1";
      popUpPrice.innerText = price.innerText;
    } else if (check.id == "xl") {
      popUpSize.innerText = check.id;
      popUpQuantity.innerText = "1";
      popUpPrice.innerText = price.innerText;
    }
  }

  animalSizeProduct = localStorage.setItem("animalSizeProduct", check.id);
  animalProductPrice = localStorage.setItem(
    "animalProductPrice",
    popUpPrice.innerText
  );

  closePopUp.addEventListener("click", () => {
    popUpShoppingCart.style.display = "none";
    wrapper.style.opacity = "1";
  });

  continueBtn.addEventListener("click", () => {
    popUpShoppingCart.style.display = "none";
    wrapper.style.opacity = "1";
  });
});

// Pop Up Added Item To The Shopping Cart

// Anchor adding

window.addEventListener("mousemove", (e) => {
  if (e.pageY >= 1500) {
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

// Show sizes table

sizesTable.addEventListener("click", () => {
  sizesTable = document.querySelector(".sizes-table");
  sizesTable.style.display = "flex";
});

closeSizesTable.addEventListener("click", () => {
  sizesTable.style.display = "none";
});

// Show sizes table

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
