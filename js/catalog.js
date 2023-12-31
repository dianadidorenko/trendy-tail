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

  petFashion.checked = false;
  harleyCho.checked = false;
  trixie.checked = false;
  collar.checked = false;

  rangeFirstPrice.checked = false;
  rangeSecondPrice.checked = false;
  rangeThirdPrice.checked = false;
  rangeFourthPrice.checked = false;
  rangeFifthPrice.checked = false;

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

  wearInput.checked = false;
  bedsInput.checked = false;
  accessoriesInput.checked = false;
  carryingInput.checked = false;

  rangeFirstPrice.checked = false;
  rangeSecondPrice.checked = false;
  rangeThirdPrice.checked = false;
  rangeFourthPrice.checked = false;
  rangeFifthPrice.checked = false;

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

// Создаем новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// Устанавливаем метод запроса (GET), URL и асинхронный флаг (true)
xhr.open("GET", "./catalog.json", true);

// Устанавливаем заголовок Content-Type (для обработки JSON)
xhr.setRequestHeader("Content-Type", "application/json");

// Назначаем обработчик события для успешной загрузки данных
xhr.onload = function () {
  if (xhr.status === 200) {
    var jsonData = JSON.parse(xhr.responseText);
    // console.log(jsonData);

    for (let i = 0; i < jsonData.length; i++) {
      let catalogueMenuBlockItems = document.querySelector(
        ".catalogue-menu-block-items"
      );

      let catalogueMenuBlockItem = document.createElement("div");

      // addind classes depends on inner features
      // without price range
      if (jsonData[i].type == "clothes") {
        catalogueMenuBlockItem.className =
          "catalogue-menu-block-item clothesCategory petFashion";
      }
      if (jsonData[i].type == "beds") {
        catalogueMenuBlockItem.className =
          "catalogue-menu-block-item bedsCategory harleyCho";
      }
      if (jsonData[i].type == "accessories") {
        catalogueMenuBlockItem.className =
          "catalogue-menu-block-item accessoriesCategory trixie";
      }
      if (jsonData[i].type == "carrying") {
        catalogueMenuBlockItem.className =
          "catalogue-menu-block-item carryingCategory collar";
      }
      // without price range

      // with price range
      if (jsonData[i].priceRange == "first") {
        catalogueMenuBlockItem.className += " first";
      }
      if (jsonData[i].priceRange == "second") {
        catalogueMenuBlockItem.className += " second";
      }
      if (jsonData[i].priceRange == "third") {
        catalogueMenuBlockItem.className += " third";
      }
      if (jsonData[i].priceRange == "fourth") {
        catalogueMenuBlockItem.className += " fourth";
      }
      if (jsonData[i].priceRange == "fifth") {
        catalogueMenuBlockItem.className += " fifth";
      }
      // with price range

      // with New and Discount sign
      if (jsonData[i].new == "NEW") {
        catalogueMenuBlockItem.className += " newItem";
      }
      if (jsonData[i].discount == "%") {
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

      link1.setAttribute("href", jsonData[i].linkOnModel);
      link2.setAttribute("href", jsonData[i].linkOnModel);
      link1.appendChild(catalogueMenuMainPic);
      link2.appendChild(dotImg);
      link2.appendChild(imgSearchIcon).className = "catalogue-menu-search-icon";

      catalogueMenuMainPic.className = "catalogue-menu-main-pic";
      catalogueMenuMainPic.setAttribute("src", "");
      catalogueMenuMainPic.src = jsonData[i].imgPath1;
      imgSearchIcon.setAttribute("src", "/");
      imgSearchIcon.src = jsonData[i].searchIcon;

      brandCatalog.innerText = jsonData[i].brand;
      catalogueMenuBlockItem.appendChild(brandCatalog).className = "brand";

      catalogueMenuBlockItem.appendChild(h3);
      h3.innerText = jsonData[i].model;

      catalogueMenuBlockItem.appendChild(sizes).className = "sizes";
      sizes.innerText = jsonData[i].sizes;

      dotImg.setAttribute("src", "");
      dotImg.src = jsonData[i].dotIcon;
      catalogueMenuBlockItem.appendChild(dotImg).className = "dot";

      catalogueMenuBlockItem.appendChild(priceCatalog).className =
        "catalogue-menu-block-item-price";
      priceCatalog.innerText = jsonData[i].price;

      catalogueMenuImage.appendChild(newTitle).className = "new";
      newTitle.innerText = jsonData[i].new;

      catalogueMenuImage.appendChild(discountTitle).className = "discount";
      discountTitle.innerText = jsonData[i].discount;
    }

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
    rangeFirstPriceLi.addEventListener("click", () => {
      sizesCatalog.forEach((price) => {
        if (parseInt(price.innerText.split(" ")[0]) < 499) {
          rangeFirstPriceBlock.forEach((first) => {
            first.style.display = "flex";
            rangeFirstPrice.checked = true;
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
    rangeSecondPriceLi.addEventListener("click", () => {
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
            rangeSecondPrice.checked = true;
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
    rangeThirdPriceLi.addEventListener("click", () => {
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
            rangeThirdPrice.checked = true;
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
    rangeFourthPriceLi.addEventListener("click", () => {
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
            rangeFourthPrice.checked = true;
          });
          rangeFifthPriceBlock.forEach((fifth) => {
            fifth.style.display = "none";
          });
        }
      });
    });
    rangeFifthPriceLi.addEventListener("click", () => {
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
            rangeFifthPrice.checked = true;
          });
        }
      });
    });
    // Filter by price

    // Filter by category, brand
    let labels = document.querySelectorAll("label");

    // console.log(lis);

    labels.forEach((label) => {
      label.addEventListener("click", (e) => {
        let catalogueMenuBlockItem = document.querySelectorAll(
          ".catalogue-menu-block-item"
        );
        if (e.target.id == "wearLi") {
          wearCategory.forEach((wear) => {
            wear.style.display = "flex";
            wearInput.checked = true;
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
        } else if (e.target.id == "bedsLi") {
          wearCategory.forEach((wear) => {
            wear.style.display = "none";
          });
          bedsCategory.forEach((beds) => {
            beds.style.display = "flex";
            bedsInput.checked = true;
          });
          accessoriesCategory.forEach((accessories) => {
            accessories.style.display = "none";
          });
          carryingCategory.forEach((carrying) => {
            carrying.style.display = "none";
          });
        } else if (e.target.id == "accessoriesLi") {
          wearCategory.forEach((wear) => {
            wear.style.display = "none";
          });
          bedsCategory.forEach((beds) => {
            beds.style.display = "none";
          });
          accessoriesCategory.forEach((accessories) => {
            accessories.style.display = "flex";
            accessoriesInput.checked = true;
          });
          carryingCategory.forEach((carrying) => {
            carrying.style.display = "none";
          });
        } else if (e.target.id == "carryingLi") {
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
            carryingInput.checked = true;
          });
        } else if (e.target.id == "petFashionLi") {
          petFashions.forEach((pf) => {
            pf.style.display = "flex";
            petFashion.checked = true;
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
        } else if (e.target.id == "harleyChoLi") {
          petFashions.forEach((pf) => {
            pf.style.display = "none";
          });
          harleyChos.forEach((hc) => {
            hc.style.display = "flex";
            harleyCho.checked = true;
          });
          collars.forEach((c) => {
            c.style.display = "none";
          });
          trixies.forEach((t) => {
            t.style.display = "none";
          });
        } else if (e.target.id == "trixieLi") {
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
            trixie.checked = true;
          });
        } else if (e.target.id == "collarLi") {
          petFashions.forEach((pf) => {
            pf.style.display = "none";
          });
          harleyChos.forEach((hc) => {
            hc.style.display = "none";
          });
          collars.forEach((c) => {
            c.style.display = "flex";
            collar.checked = true;
          });
          trixies.forEach((t) => {
            t.style.display = "none";
          });
        } else if (e.target.id == "newInputLi") {
          brandMenuCategory.style.display = "none";
          catalogueMenuCategory.style.display = "none";
          priceMenuCategory.style.display = "none";
          asideArrowCategory.style.transform = "rotate(0deg)";
          asideArrowBrand.style.transform = "rotate(0deg)";
          asideArrowPrice.style.transform = "rotate(0deg)";

          newInput.checked = true;
          discountInput.checked = false;

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
        } else if (e.target.id == "discountInputLi") {
          brandMenuCategory.style.display = "none";
          catalogueMenuCategory.style.display = "none";
          priceMenuCategory.style.display = "none";
          asideArrowCategory.style.transform = "rotate(0deg)";
          asideArrowBrand.style.transform = "rotate(0deg)";
          asideArrowPrice.style.transform = "rotate(0deg)";

          discountInput.checked = true;
          newInput.checked = false;

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
  }
};

// Назначаем обработчик события для ошибки
xhr.onerror = function () {
  console.error("Ошибка при загрузке данных.");
};

// Отправляем запрос
xhr.send();

// addind classes depends on inner features

// Плавна анімація елементів
const animItems = document.querySelectorAll(".anim-items");
// console.log(animItems);

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("active");
      } else {
        if (!animItem.classList.contains("anim-no-hide")) {
          animItem.classList.remove("active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
// Плавна анімація елементів
