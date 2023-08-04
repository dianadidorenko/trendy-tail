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
const swiperCategoryMain = new Swiper(".main-swiper", {
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
// Main Slider

// Aside Menu
category.addEventListener("click", () => {
  if (catalogueMenuCategory.style.display == "none") {
    catalogueMenuCategory.style.display = "flex";
    asideArrowCategory.style.transform = "rotate(180deg)";
  } else {
    catalogueMenuCategory.style.display = "none";
    asideArrowCategory.style.transform = "rotate(0deg)";
  }
  brandMenuCategory.style.display = "none";
  priceMenuCategory.style.display = "none";
  asideArrowBrand.style.transform = "rotate(0deg)";
  asideArrowPrice.style.transform = "rotate(0deg)";
});

brand.addEventListener("click", () => {
  if (brandMenuCategory.style.display == "none") {
    brandMenuCategory.style.display = "flex";
    asideArrowBrand.style.transform = "rotate(180deg)";
  } else {
    brandMenuCategory.style.display = "none";
    asideArrowBrand.style.transform = "rotate(0deg)";
  }
  catalogueMenuCategory.style.display = "none";
  priceMenuCategory.style.display = "none";
  asideArrowCategory.style.transform = "rotate(0deg)";
  asideArrowPrice.style.transform = "rotate(0deg)";
});

price.addEventListener("click", () => {
  if (priceMenuCategory.style.display == "none") {
    priceMenuCategory.style.display = "flex";
    asideArrowPrice.style.transform = "rotate(180deg)";
  } else {
    priceMenuCategory.style.display = "none";
    asideArrowPrice.style.transform = "rotate(0deg)";
  }
  catalogueMenuCategory.style.display = "none";
  brandMenuCategory.style.display = "none";
  asideArrowPrice.style.transform = "rotate(0deg)";
  asideArrowCategory.style.transform = "rotate(0deg)";
});
// Aside Menu

// Filter
let inputs = document.querySelectorAll("input"),
  bedsCategory = document.querySelectorAll(".beds-category"),
  wearCategory = document.querySelectorAll(".wear-category"),
  accessoriesCategory = document.querySelectorAll(".accessories-category"),
  carryingCategory = document.querySelectorAll(".carrying-category"),
  petFashions = document.querySelectorAll(".pet-fashion"),
  harleyChos = document.querySelectorAll(".harleyCho"),
  collars = document.querySelectorAll(".collar"),
  trixies = document.querySelectorAll(".trixie"),
  rangeFirstPriceBlock = document.querySelectorAll(".range-first-price"),
  rangeSecondPriceBlock = document.querySelectorAll(".range-second-price"),
  rangeThirdPriceBlock = document.querySelectorAll(".range-third-price"),
  rangeFourthPriceBlock = document.querySelectorAll(".range-fourth-price"),
  rangeFifthPriceBlock = document.querySelectorAll(".range-fifth-price");

let sizesCatalog = document.querySelectorAll(
  ".catalogue-menu-block-item-price"
);

// Filter by price
rangeFirstPrice.addEventListener("click", (e) => {
  for (i of sizesCatalog) {
    if (parseInt(i.innerText.split(" ")[0]) <= 499) {
      for (i of rangeFirstPriceBlock) {
        i.style.display = "flex";
      }
      for (i of rangeSecondPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeThirdPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeFourthPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeFifthPriceBlock) {
        i.style.display = "none";
      }
    }
  }
});
rangeSecondPrice.addEventListener("click", (e) => {
  for (i of sizesCatalog) {
    if (
      parseInt(i.innerText.split(" ")[0]) >= 500 ||
      parseInt(i.innerText.split(" ")[0]) <= 999
    ) {
      for (i of rangeFirstPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeSecondPriceBlock) {
        i.style.display = "flex";
      }
      for (i of rangeThirdPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeFourthPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeFifthPriceBlock) {
        i.style.display = "none";
      }
    }
  }
});
rangeThirdPrice.addEventListener("click", (e) => {
  for (i of sizesCatalog) {
    if (
      parseInt(i.innerText.split(" ")[0]) >= 1000 ||
      parseInt(i.innerText.split(" ")[0]) <= 1499
    ) {
      for (i of rangeFirstPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeSecondPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeThirdPriceBlock) {
        i.style.display = "flex";
      }
      for (i of rangeFourthPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeFifthPriceBlock) {
        i.style.display = "none";
      }
    }
  }
});
rangeFourthPrice.addEventListener("click", (e) => {
  for (i of sizesCatalog) {
    if (
      parseInt(i.innerText.split(" ")[0]) >= 1500 ||
      parseInt(i.innerText.split(" ")[0]) <= 1999
    ) {
      for (i of rangeFirstPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeSecondPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeThirdPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeFourthPriceBlock) {
        i.style.display = "flex";
      }
      for (i of rangeFifthPriceBlock) {
        i.style.display = "none";
      }
    }
  }
});
rangeFifthPrice.addEventListener("click", (e) => {
  for (i of sizesCatalog) {
    if (parseInt(i.innerText.split(" ")[0]) >= 1999) {
      for (i of rangeFirstPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeSecondPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeThirdPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeFourthPriceBlock) {
        i.style.display = "none";
      }
      for (i of rangeFifthPriceBlock) {
        i.style.display = "flex";
      }
    }
  }
});
// Filter by price

// Filter by category, brand
for (input of inputs) {
  input.addEventListener("click", (e) => {
    if (e.target.id == "wear") {
      for (wear of wearCategory) {
        wear.style.display = "flex";
      }
      for (bed of bedsCategory) {
        bed.style.display = "none";
      }
      for (accessorice of accessoriesCategory) {
        accessorice.style.display = "none";
      }
      for (carry of carryingCategory) {
        carry.style.display = "none";
      }
    } else if (e.target.id == "beds") {
      for (bed of bedsCategory) {
        bed.style.display = "flex";
      }
      for (wear of wearCategory) {
        wear.style.display = "none";
      }
      for (accessorice of accessoriesCategory) {
        accessorice.style.display = "none";
      }
      for (carry of carryingCategory) {
        carry.style.display = "none";
      }
    } else if (e.target.id == "accessories") {
      for (accessorice of accessoriesCategory) {
        accessorice.style.display = "flex";
      }
      for (wear of wearCategory) {
        wear.style.display = "none";
      }
      for (carry of carryingCategory) {
        carry.style.display = "none";
      }
      for (bed of bedsCategory) {
        bed.style.display = "none";
      }
    } else if (e.target.id == "carrying") {
      for (carry of carryingCategory) {
        carry.style.display = "flex";
      }
      for (wear of wearCategory) {
        wear.style.display = "none";
      }
      for (accessorice of accessoriesCategory) {
        accessorice.style.display = "none";
      }
      for (bed of bedsCategory) {
        bed.style.display = "none";
      }
    } else if (e.target.id == "petFashion") {
      for (petFashion of petFashions) {
        petFashion.style.display = "flex";
      }
      for (harleyCho of harleyChos) {
        harleyCho.style.display = "none";
      }
      for (trixie of trixies) {
        trixie.style.display = "none";
      }
      for (collar of collars) {
        collar.style.display = "none";
      }
    } else if (e.target.id == "harleyCho") {
      for (petFashion of petFashions) {
        petFashion.style.display = "none";
      }
      for (harleyCho of harleyChos) {
        harleyCho.style.display = "flex";
      }
      for (trixie of trixies) {
        trixie.style.display = "none";
      }
      for (collar of collars) {
        collar.style.display = "none";
      }
    } else if (e.target.id == "trixie") {
      for (petFashion of petFashions) {
        petFashion.style.display = "none";
      }
      for (harleyCho of harleyChos) {
        harleyCho.style.display = "none";
      }
      for (trixie of trixies) {
        trixie.style.display = "flex";
      }
      for (collar of collars) {
        collar.style.display = "none";
      }
    } else if (e.target.id == "collar") {
      for (petFashion of petFashions) {
        petFashion.style.display = "none";
      }
      for (harleyCho of harleyChos) {
        harleyCho.style.display = "none";
      }
      for (trixie of trixies) {
        trixie.style.display = "none";
      }
      for (collar of collars) {
        collar.style.display = "flex";
      }
    }
  });
}
// Filter by category, brand
// Filter

// Anchor adding
window.addEventListener("mousemove", (e) => {
  if (e.pageY >= 3850) {
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

// Insert profile name in the header
userName.innerText = localStorage.getItem("userProfileName");

if (userName.innerText.length > 1) {
  arrow.style.display = "flex";
}
// Insert profile name in the header

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
