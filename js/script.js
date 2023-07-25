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

// Main Slider

const swiperMain = new Swiper(".main-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: ".main-swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-swiper-button-next",
    prevEl: ".main-swiper-button-prev",
  },
});

// V trendy Slider

const swiperVTrendy = new Swiper(".vtrendy-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // autoplay: true,

  // If we need pagination
  pagination: {
    el: ".vtrendy-swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".vtrendy-swiper-button-next",
    prevEl: ".vtrendy-swiper-button-prev",
  },
});

// Form Validation

function checkForm() {
  errorName.style.display = "none";
  errorEmail.style.display = "none";
  errorQuestion.style.display = "none";

  let footerFormUserName = document.getElementById("footerFormUserName"),
    footerFormUserNameValue =
      document.getElementById("footerFormUserName").value,
    footerFormEmail = document.getElementById("footerFormEmail"),
    footerFormEmailValue = document.getElementById("footerFormEmail").value,
    footerFormTextarea = document.getElementById("footerFormTextarea"),
    footerFormTextareaValue =
      document.getElementById("footerFormTextarea").value,
    sendFooterBtn = document.getElementById("sendFooterBtn");

  footerFormUserName.style.border = "none";
  footerFormEmail.style.border = "none";
  footerFormTextarea.style.border = "none";

  sendFooterBtn.addEventListener("click", () => {
    localStorage.setItem("username", footerFormUserName.value);
    localStorage.setItem("usermail", footerFormEmail.value);
  });

  checkName = true;
  checkEmail = true;
  checkQuestion = true;

  // Check Name

  patternName = /^[а-яА-Яa-zA-Z]+$/; // щоб були лише букви від і до

  if (!patternName.test(footerFormUserNameValue)) {
    errorName.style.display = "block";
    footerFormUserName.style.border = "1px solid red";
    checkName = false;
  }
  // =================================================================
  // Check Email

  patternMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  if (!patternMail.test(footerFormEmailValue)) {
    errorEmail.style.display = "block";
    footerFormEmail.style.border = "1px solid red";
    checkEmail = false;
  }
  // =================================================================
  // Check Question

  if (footerFormTextareaValue.length < 10) {
    errorQuestion.style.display = "block";
    footerFormTextarea.style.border = "1px solid red";
    checkQuestion = false;
  }
  // =================================================================

  // Check form to send
  if (checkName == true && checkEmail == true && checkQuestion == true) {
    return true;
  } else {
    return false;
  }
  //
}

// Insert profile name in the header

userName.innerText = localStorage.getItem("userProfileName");

if (userName.innerText.length > 1) {
  arrow.style.display = "flex";
}

// Insert profile name in the header
