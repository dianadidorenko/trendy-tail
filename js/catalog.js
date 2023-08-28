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

// Anchor adding
window.addEventListener("mousemove", (e) => {
  if (e.pageY >= 3500) {
    ancorImg.style.display = "block";
  } else {
    ancorImg.style.display = "none";
  }
});
// Anchor adding

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

  newInput.checked = false;
  discountInput.checked = false;
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

  newInput.checked = false;
  discountInput.checked = false;
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

  newInput.checked = false;
  discountInput.checked = false;
});
// Aside Menu

// Catalog items add
import catalog from "./catalog.json" assert { type: "json" };

for (let i = 0; i < catalog.length; i++) {
  let catalogueMenuBlockItems = document.querySelector(
    ".catalogue-menu-block-items"
  );

  let catalogueMenuBlockItem = document.createElement("div");

  // addind classes depends on inner features
  // without price range
  if (catalog[i].type == "clothes") {
    catalogueMenuBlockItem.className =
      "catalogue-menu-block-item clothesCategory petFashion";
  }
  if (catalog[i].type == "beds") {
    catalogueMenuBlockItem.className =
      "catalogue-menu-block-item bedsCategory harleyCho";
  }
  if (catalog[i].type == "accessories") {
    catalogueMenuBlockItem.className =
      "catalogue-menu-block-item accessoriesCategory trixie";
  }
  if (catalog[i].type == "carrying") {
    catalogueMenuBlockItem.className =
      "catalogue-menu-block-item carryingCategory collar";
  }
  // without price range

  // with price range
  if (catalog[i].priceRange == "first") {
    catalogueMenuBlockItem.className += " first";
  }
  if (catalog[i].priceRange == "second") {
    catalogueMenuBlockItem.className += " second";
  }
  if (catalog[i].priceRange == "third") {
    catalogueMenuBlockItem.className += " third";
  }
  if (catalog[i].priceRange == "fourth") {
    catalogueMenuBlockItem.className += " fourth";
  }
  if (catalog[i].priceRange == "fifth") {
    catalogueMenuBlockItem.className += " fifth";
  }
  // with price range

  // with New and Discount sign
  if (catalog[i].new == "NEW") {
    catalogueMenuBlockItem.className += " newItem";
  }
  if (catalog[i].discount == "%") {
    catalogueMenuBlockItem.className += " discountItem";
  }
  // with New and Discount sign
  // addind classes depends on inner features
  catalogueMenuBlockItems.appendChild(catalogueMenuBlockItem);

  let catalogueMenuImage = document.createElement("div");
  catalogueMenuImage.className = "catalogue-menu-image";

  let link1 = document.createElement("a"),
    link2 = document.createElement("a"),
    catalogueMenuMainPic = document.createElement("img"),
    imgSearchIcon = document.createElement("img"),
    brandCatalog = document.createElement("p"),
    h3 = document.createElement("h3"),
    sizes = document.createElement("p"),
    dotImg = document.createElement("img"),
    priceCatalog = document.createElement("p"),
    newTitle = document.createElement("h4"),
    discountTitle = document.createElement("h4");

  catalogueMenuBlockItem.appendChild(catalogueMenuImage);
  catalogueMenuImage.appendChild(link1);
  catalogueMenuImage.appendChild(link2);

  link1.setAttribute("href", catalog[i].linkOnModel);
  link2.setAttribute("href", catalog[i].linkOnModel);
  link1.appendChild(catalogueMenuMainPic);
  link2.appendChild(dotImg);
  link2.appendChild(imgSearchIcon).className = "catalogue-menu-search-icon";

  catalogueMenuMainPic.className = "catalogue-menu-main-pic";
  catalogueMenuMainPic.setAttribute("src", "");
  catalogueMenuMainPic.src = catalog[i].imgPath1;
  imgSearchIcon.setAttribute("src", "/");
  imgSearchIcon.src = catalog[i].searchIcon;

  brandCatalog.innerText = catalog[i].brand;
  catalogueMenuBlockItem.appendChild(brandCatalog).className = "brand";

  catalogueMenuBlockItem.appendChild(h3);
  h3.innerText = catalog[i].model;

  catalogueMenuBlockItem.appendChild(sizes).className = "sizes";
  sizes.innerText = catalog[i].sizes;

  dotImg.setAttribute("src", "");
  dotImg.src = catalog[i].dotIcon;
  catalogueMenuBlockItem.appendChild(dotImg).className = "dot";

  catalogueMenuBlockItem.appendChild(priceCatalog).className =
    "catalogue-menu-block-item-price";
  priceCatalog.innerText = catalog[i].price;

  catalogueMenuImage.appendChild(newTitle).className = "new";
  newTitle.innerText = catalog[i].new;

  catalogueMenuImage.appendChild(discountTitle).className = "discount";
  discountTitle.innerText = catalog[i].discount;
}
// addind classes depends on inner features

// Filter
let bedsCategory = document.querySelectorAll(".bedsCategory"),
  wearCategory = document.querySelectorAll(".clothesCategory"),
  accessoriesCategory = document.querySelectorAll(".accessoriesCategory"),
  carryingCategory = document.querySelectorAll(".carryingCategory"),
  petFashions = document.querySelectorAll(".petFashion"),
  harleyChos = document.querySelectorAll(".harleyCho"),
  collars = document.querySelectorAll(".collar"),
  trixies = document.querySelectorAll(".trixie"),
  rangeFirstPriceBlock = document.querySelectorAll(".first"),
  rangeSecondPriceBlock = document.querySelectorAll(".second"),
  rangeThirdPriceBlock = document.querySelectorAll(".third"),
  rangeFourthPriceBlock = document.querySelectorAll(".fourth"),
  rangeFifthPriceBlock = document.querySelectorAll(".fifth"),
  newItems = document.querySelectorAll(".newItem"),
  discountItems = document.querySelectorAll(".discountItem");

let sizesCatalog = document.querySelectorAll(
  ".catalogue-menu-block-item-price"
);

wearCategory.forEach((wear) => {
  wear.style.display = "flex";
});
// Catalog items add

// New Sign Show
let newSigns = document.querySelectorAll("h4");

newSigns.forEach((newSign) => {
  if (newSign.innerText != "NEW" && newSign.innerText != "%") {
    newSign.style.display = "none";
  }
});
// New Sign Show

// Filter
// // Filter by price
rangeFirstPrice.addEventListener("click", () => {
  sizesCatalog.forEach((price) => {
    if (parseInt(price.innerText.split(" ")[0]) < 499) {
      rangeFirstPriceBlock.forEach((first) => {
        first.style.display = "flex";
      });
      rangeSecondPriceBlock.forEach((second) => {
        second.style.display = "none";
      });
      rangeThirdPriceBlock.forEach((third) => {
        third.style.display = "none";
      });
      rangeFourthPriceBlock.forEach((fourth) => {
        fourth.style.display = "none";
      });
      rangeFifthPriceBlock.forEach((fifth) => {
        fifth.style.display = "none";
      });
    }
  });
});
rangeSecondPrice.addEventListener("click", () => {
  sizesCatalog.forEach((price) => {
    if (
      parseInt(price.innerText.split(" ")[0]) >= 500 &&
      parseInt(price.innerText.split(" ")[0]) <= 999
    ) {
      rangeFirstPriceBlock.forEach((first) => {
        first.style.display = "none";
      });
      rangeSecondPriceBlock.forEach((second) => {
        second.style.display = "flex";
      });
      rangeThirdPriceBlock.forEach((third) => {
        third.style.display = "none";
      });
      rangeFourthPriceBlock.forEach((fourth) => {
        fourth.style.display = "none";
      });
      rangeFifthPriceBlock.forEach((fifth) => {
        fifth.style.display = "none";
      });
    }
  });
});
rangeThirdPrice.addEventListener("click", () => {
  sizesCatalog.forEach((price) => {
    if (
      parseInt(price.innerText.split(" ")[0]) >= 1000 &&
      parseInt(price.innerText.split(" ")[0]) <= 1499
    ) {
      rangeFirstPriceBlock.forEach((first) => {
        first.style.display = "none";
      });
      rangeSecondPriceBlock.forEach((second) => {
        second.style.display = "none";
      });
      rangeThirdPriceBlock.forEach((third) => {
        third.style.display = "flex";
      });
      rangeFourthPriceBlock.forEach((fourth) => {
        fourth.style.display = "none";
      });
      rangeFifthPriceBlock.forEach((fifth) => {
        fifth.style.display = "none";
      });
    }
  });
});
rangeFourthPrice.addEventListener("click", () => {
  sizesCatalog.forEach((price) => {
    if (
      parseInt(price.innerText.split(" ")[0]) >= 1500 &&
      parseInt(price.innerText.split(" ")[0]) <= 1999
    ) {
      rangeFirstPriceBlock.forEach((first) => {
        first.style.display = "none";
      });
      rangeSecondPriceBlock.forEach((second) => {
        second.style.display = "none";
      });
      rangeThirdPriceBlock.forEach((third) => {
        third.style.display = "none";
      });
      rangeFourthPriceBlock.forEach((fourth) => {
        fourth.style.display = "flex";
      });
      rangeFifthPriceBlock.forEach((fifth) => {
        fifth.style.display = "none";
      });
    }
  });
});
rangeFifthPrice.addEventListener("click", () => {
  sizesCatalog.forEach((price) => {
    if (parseInt(price.innerText.split(" ")[0]) >= 1999) {
      rangeFirstPriceBlock.forEach((first) => {
        first.style.display = "none";
      });
      rangeSecondPriceBlock.forEach((second) => {
        second.style.display = "none";
      });
      rangeThirdPriceBlock.forEach((third) => {
        third.style.display = "none";
      });
      rangeFourthPriceBlock.forEach((fourth) => {
        fourth.style.display = "none";
      });
      rangeFifthPriceBlock.forEach((fifth) => {
        fifth.style.display = "flex";
      });
    }
  });
});
// Filter by price

// Filter by category, brand
let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    let catalogueMenuBlockItem = document.querySelectorAll(
      ".catalogue-menu-block-item"
    );
    if (e.target.id == "wear") {
      wearCategory.forEach((wear) => {
        wear.style.display = "flex";
      });
      bedsCategory.forEach((beds) => {
        beds.style.display = "none";
      });
      accessoriesCategory.forEach((accessories) => {
        accessories.style.display = "none";
      });
      carryingCategory.forEach((carrying) => {
        carrying.style.display = "none";
      });
    } else if (e.target.id == "beds") {
      wearCategory.forEach((wear) => {
        wear.style.display = "none";
      });
      bedsCategory.forEach((beds) => {
        beds.style.display = "flex";
      });
      accessoriesCategory.forEach((accessories) => {
        accessories.style.display = "none";
      });
      carryingCategory.forEach((carrying) => {
        carrying.style.display = "none";
      });
    } else if (e.target.id == "accessories") {
      wearCategory.forEach((wear) => {
        wear.style.display = "none";
      });
      bedsCategory.forEach((beds) => {
        beds.style.display = "none";
      });
      accessoriesCategory.forEach((accessories) => {
        accessories.style.display = "flex";
      });
      carryingCategory.forEach((carrying) => {
        carrying.style.display = "none";
      });
    } else if (e.target.id == "carrying") {
      wearCategory.forEach((wear) => {
        wear.style.display = "none";
      });
      bedsCategory.forEach((beds) => {
        beds.style.display = "none";
      });
      accessoriesCategory.forEach((accessories) => {
        accessories.style.display = "none";
      });
      carryingCategory.forEach((carrying) => {
        carrying.style.display = "flex";
      });
    } else if (e.target.id == "petFashion") {
      petFashions.forEach((pf) => {
        pf.style.display = "flex";
      });
      harleyChos.forEach((hc) => {
        hc.style.display = "none";
      });
      collars.forEach((c) => {
        c.style.display = "none";
      });
      trixies.forEach((t) => {
        t.style.display = "none";
      });
    } else if (e.target.id == "harleyCho") {
      petFashions.forEach((pf) => {
        pf.style.display = "none";
      });
      harleyChos.forEach((hc) => {
        hc.style.display = "flex";
      });
      collars.forEach((c) => {
        c.style.display = "none";
      });
      trixies.forEach((t) => {
        t.style.display = "none";
      });
    } else if (e.target.id == "trixie") {
      petFashions.forEach((pf) => {
        pf.style.display = "none";
      });
      harleyChos.forEach((hc) => {
        hc.style.display = "none";
      });
      collars.forEach((c) => {
        c.style.display = "none";
      });
      trixies.forEach((t) => {
        t.style.display = "flex";
      });
    } else if (e.target.id == "collar") {
      petFashions.forEach((pf) => {
        pf.style.display = "none";
      });
      harleyChos.forEach((hc) => {
        hc.style.display = "none";
      });
      collars.forEach((c) => {
        c.style.display = "flex";
      });
      trixies.forEach((t) => {
        t.style.display = "none";
      });
    } else if (e.target.id == "newInput") {
      brandMenuCategory.style.display = "none";
      catalogueMenuCategory.style.display = "none";
      priceMenuCategory.style.display = "none";
      asideArrowCategory.style.transform = "rotate(0deg)";
      asideArrowBrand.style.transform = "rotate(0deg)";
      asideArrowPrice.style.transform = "rotate(0deg)";
      catalogueMenuBlockItem.forEach((item) => {
        if (!item.classList.contains("newItem")) {
          item.style.display = "none";
        }
      });
      newItems.forEach((ni) => {
        ni.style.display = "flex";
      });
      discountItems.forEach((di) => {
        di.style.display = "none";
      });
    } else if (e.target.id == "discountInput") {
      brandMenuCategory.style.display = "none";
      catalogueMenuCategory.style.display = "none";
      priceMenuCategory.style.display = "none";
      asideArrowCategory.style.transform = "rotate(0deg)";
      asideArrowBrand.style.transform = "rotate(0deg)";
      asideArrowPrice.style.transform = "rotate(0deg)";
      catalogueMenuBlockItem.forEach((item) => {
        if (!item.classList.contains("discountItem")) {
          item.style.display = "none";
        }
      });
      newItems.forEach((ni) => {
        ni.style.display = "none";
      });
      discountItems.forEach((di) => {
        di.style.display = "flex";
      });
    }
  });
});
// Filter by category, brand
// Filter
