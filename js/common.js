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
const imgLogoPath = document.querySelector(".header-logo");

var checked = JSON.parse(localStorage.getItem("toggle")),
  checkbox = document.querySelector("#toggle");

// Change logo depending on web site theme
if (checked) {
  imgPathLogo = localStorage.setItem("imgPathLogo", "img/logo-white.svg");
  imgLogoPath.src = localStorage.getItem("imgPathLogo");
} else {
  imgPathLogo = localStorage.setItem("imgPathLogo", "img/logo.svg");
  imgLogoPath.src = localStorage.getItem("imgPathLogo");
}
// Change logo depending on web site theme

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
    imgPathLogo = localStorage.setItem("imgPathLogo", "img/logo-white.svg");
    imgLogoPath.src = localStorage.getItem("imgPathLogo");

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
    imgPathLogo = localStorage.setItem("imgPathLogo", "img/logo.svg");
    imgLogoPath.src = localStorage.getItem("imgPathLogo");

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

// initial order quantity in the header
headerOrderQuantity.style.display = "none";

if (parseInt(localStorage.getItem("quantityItems") == 0)) {
  headerOrderQuantity.style.display = "none";
} else {
  if (localStorage.getItem("quantityItems")) {
    headerOrderQuantity.innerText = localStorage.getItem("quantityItems");
    headerOrderQuantity.style.display = "flex";
  }
}
// initial order quantity in the header

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

// Smooth  scrolling behavior
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchorItem of anchors) {
  if (anchorItem.id == "top") {
    anchorItem.addEventListener("click", (e) => {
      e.preventDefault();
      const blockID = anchorItem.getAttribute("href");
      document
        .querySelector("" + blockID)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}
// Smooth  scrolling behavior

// Preloader
$(function () {
  setTimeout(function () {
    $(`body`).addClass("loaded");
  }, 1000);
});
// Preloader
