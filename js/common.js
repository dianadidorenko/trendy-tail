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

// Changing theme
const toggle = document.querySelector(".toggle");
let root = document.documentElement;

var checked = JSON.parse(localStorage.getItem("toggle")),
  checkbox = document.querySelector("#toggle");

if (checked == true) {
  checkbox.checked = true;
  root.style.setProperty("--background", localStorage.getItem("background"));
  root.style.setProperty("--background-color", "#1e595c");
  root.style.setProperty("--primary-color", "white");
  root.style.setProperty("--secondary-color", "white");
  root.style.setProperty("--footer-bg", "#218287");
  root.style.setProperty("--thirdly-color", "white");
  root.style.setProperty("--search-background-color", "#cacaca");
  root.style.setProperty("--search-text-color", "#333");
  root.style.setProperty("--not-active-link", "#e9e9e9");

  inputThemeText.innerText = "Зробити світліше?";
  inputThemeText.setAttribute("data-lang", "home_page-41");
} else {
  localStorage.removeItem("toggle");
  root.style.setProperty("--background", "white");
  root.style.setProperty("--background-color", "white");
  root.style.setProperty("--primary-color", "#5c5757");
  root.style.setProperty("--secondary-color", "#000");
  root.style.setProperty("--footer-bg", "#d2e5dc");
  root.style.setProperty("--search-background-color", "white");
  root.style.setProperty("--search-text-color", "white");
  root.style.setProperty("--not-active-link", "#757575");

  inputThemeText.innerText = "Зробити темніше?";
  inputThemeText.setAttribute("data-lang", "home_page-40");
}

toggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    localStorage.setItem("toggle", checkbox.checked);

    localStorage.setItem("background", "#1e595c");
    root.style.setProperty("--background", localStorage.getItem("background"));
    root.style.setProperty("--primary-color", "white");
    root.style.setProperty("--secondary-color", "white");
    root.style.setProperty("--footer-bg", "#218287");
    root.style.setProperty("--search-background-color", "#cacaca");
    root.style.setProperty("--search-text-color", "#333");
    root.style.setProperty("--not-active-link", "#e9e9e9");

    inputThemeText.innerText = "Зробити світліше?";
    inputThemeText.setAttribute("data-lang", "home_page-41");
  } else {
    localStorage.removeItem("toggle");
    root.style.setProperty("--background", "white");
    root.style.setProperty("--background-color", "white");
    root.style.setProperty("--primary-color", "#5c5757");
    root.style.setProperty("--secondary-color", "#000");
    root.style.setProperty("--footer-bg", "#d2e5dc");
    root.style.setProperty("--search-background-color", "white");
    root.style.setProperty("--search-text-color", "white");
    root.style.setProperty("--not-active-link", "#757575");

    inputThemeText.innerText = "Зробити темніше?";
    inputThemeText.setAttribute("data-lang", "home_page-40");
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
// Insert profile name in the header

// Aside slider language and theme change menu
$(function () {
  $(".btn-slide").click(function () {
    $("#panel").slideToggle("fast");
    $("#panel").css("display", "flex");
  });
});
// Aside slider language and theme change menu
