// Aside Menu
price.addEventListener("click", () => {
  if (priceMenuCategory.style.display == "none") {
    priceMenuCategory.style.display = "flex";
    asideArrowPrice.style.transform = "rotate(180deg)";
  } else {
    priceMenuCategory.style.display = "none";
    asideArrowPrice.style.transform = "rotate(0deg)";
  }
  asideArrowPrice.style.transform = "rotate(0deg)";
});
// Aside Menu

// Catalog items add
import catalog from "./catalog.json" assert { type: "json" };
// console.log(catalog);

for (let i = 0; i < catalog.length; i++) {
  if (catalog[i].new == "NEW") {
    let catalogueMenuBlockItems = document.querySelector(
      ".catalogue-menu-block-items"
    );

    let catalogueMenuBlockItem = document.createElement("div");

    // addind classes depends on inner features
    // without price range
    if (catalog[i].new == "NEW") {
      catalogueMenuBlockItem.className = "catalogue-menu-block-item newItem";
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
      newTitle = document.createElement("h4");

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
  }
  // addind classes depends on inner features

  // Filter
  let accessoriesCategory = document.querySelectorAll(".accessoriesCategory"),
    rangeFirstPriceBlock = document.querySelectorAll(".first"),
    rangeSecondPriceBlock = document.querySelectorAll(".second"),
    rangeThirdPriceBlock = document.querySelectorAll(".third"),
    rangeFourthPriceBlock = document.querySelectorAll(".fourth"),
    rangeFifthPriceBlock = document.querySelectorAll(".fifth"),
    newItems = document.querySelectorAll(".newItem");

  let sizesCatalog = document.querySelectorAll(
    ".catalogue-menu-block-item-price"
  );

  accessoriesCategory.forEach((accessories) => {
    accessories.style.display = "flex";
  });
  // Catalog items add

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
  // Filter
}
