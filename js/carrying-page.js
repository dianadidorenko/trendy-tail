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

// Anchor adding
window.addEventListener("mousemove", (e) => {
  if (e.pageY >= 1000) {
    ancorImg.style.display = "block";
  } else {
    ancorImg.style.display = "none";
  }
});
// Anchor adding

// Catalog items add
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
      if (jsonData[i].type == "carrying") {
        let catalogueMenuBlockItems = document.querySelector(
          ".catalogue-menu-block-items"
        );

        let catalogueMenuBlockItem = document.createElement("div");

        // adding classes depends on inner features
        // without price range
        if (jsonData[i].type == "carrying") {
          catalogueMenuBlockItem.className =
            "catalogue-menu-block-item carryingCategory";
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
          priceCatalog = document.createElement("p");

        catalogueMenuBlockItem.appendChild(catalogueMenuImage);
        catalogueMenuImage.appendChild(link1);
        catalogueMenuImage.appendChild(link2);

        link1.setAttribute("href", jsonData[i].linkOnModel);
        link2.setAttribute("href", jsonData[i].linkOnModel);
        link1.appendChild(catalogueMenuMainPic);
        link2.appendChild(dotImg);
        link2.appendChild(imgSearchIcon).className =
          "catalogue-menu-search-icon";

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
      }
      // addind classes depends on inner features

      // Filter
      let carryingCategory = document.querySelectorAll(".carryingCategory"),
        rangeFirstPriceBlock = document.querySelectorAll(".first"),
        rangeSecondPriceBlock = document.querySelectorAll(".second"),
        rangeThirdPriceBlock = document.querySelectorAll(".third"),
        rangeFourthPriceBlock = document.querySelectorAll(".fourth"),
        rangeFifthPriceBlock = document.querySelectorAll(".fifth");

      let sizesCatalog = document.querySelectorAll(
        ".catalogue-menu-block-item-price"
      );

      carryingCategory.forEach((carrying) => {
        carrying.style.display = "flex";
      });
      // Catalog items add

      // Filter
      // // Filter by price
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
      // Filter
    }
  }
};

// Назначаем обработчик события для ошибки
xhr.onerror = function () {
  console.error("Ошибка при загрузке данных.");
};

// Отправляем запрос
xhr.send();

// addind classes depends on inner features
