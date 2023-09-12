orderName.value = localStorage.getItem("userProfileName");
orderSurname.value = localStorage.getItem("userSurname");
orderTel.value = localStorage.getItem("phoneNumber");
orderEmail.value = localStorage.getItem("userMail");

// Show Empty Block in Shopping Cart
if (!localStorage.getItem("orderItems")) {
  orderBlock.style.display = "none";
  emptyOrderBlock.style.display = "flex";
} else if (localStorage.getItem("orderItems").length <= 2) {
  orderBlock.style.display = "none";
  emptyOrderBlock.style.display = "flex";
} else if (localStorage.getItem("orderItems") == "null") {
  orderBlock.style.display = "none";
  emptyOrderBlock.style.display = "flex";
} else if (localStorage.getItem("orderItems")) {
  orderBlock.style.display = "flex";
  emptyOrderBlock.style.display = "none";
}
// Show Empty Block in Shopping Cart

// Создаем новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// Устанавливаем метод запроса (GET), URL и асинхронный флаг (true)
xhr.open("GET", "./catalog.json", true);

// Устанавливаем заголовок Content-Type (для обработки JSON)
xhr.setRequestHeader("Content-Type", "application/json");

// Взяти з інпута значення про товар в корзині
let totalOrder = "";
totalOrder = localStorage.getItem("orderItems");
inputOfOrder.value = totalOrder;
// Взяти з інпута значення про товар в корзині

// Назначаем обработчик события для успешной загрузки данных
xhr.onload = function () {
  if (xhr.status === 200) {
    var jsonData = JSON.parse(xhr.responseText);

    let itemsOrder = JSON.parse(localStorage.getItem("orderItems"));

    let items = "";

    for (var i = 0; i < itemsOrder.length; i++) {
      items += `<div class="order-block-info" data-id='${jsonData[i].id}'>
                <div class="order-block-info-left-part">
                  <img class="popUpImage" src='${itemsOrder[i].imgPath}'/>
                </div>
                <div class="order-block-info-right-part">
                  <p class="orderGoodsTitle">${itemsOrder[i].name}</p>
                  <p style='display:flex; align-items:center; column-gap: 2px;'>Розмір <span class='material-symbols-outlined'>fiber_manual_record</span> Size: <span class="orderSize" style='padding-left: 5px; font-weight: bold'>${itemsOrder[i].size}</span></p>
                  <p style='display:flex; align-items:center; column-gap: 2px;'>Ціна за од. <span class='material-symbols-outlined'>fiber_manual_record</span> Item price:
                    <span class="orderPrice1Piece" style='padding-left: 5px; font-weight: bold'>${itemsOrder[i].price}</span> грн
                  </p>
                  <div class="quantity-block">
                    <p style='display:flex; align-items:center; column-gap: 2px;'>Кількість <span class='material-symbols-outlined'>fiber_manual_record</span> Quantity:</p>
                    <span data-action="minus"class="minus">-</span>
                    <span class="orderQuantity" data-counter>1</span>
                    <span data-action="plus" class="plus">+</span>
                    <img class='trash' src='img/order/trash.svg'/>
                  </div>
                </div>
              </div>`;
    }
    document.querySelector(".order-info-block-right-part").innerHTML = items;

    // Calculate quantity
    window.addEventListener("click", (e) => {
      let counter;

      if (
        e.target.dataset.action === "plus" ||
        e.target.dataset.action === "minus"
      ) {
        const quantityBlock = e.target.closest(".quantity-block");
        counter = quantityBlock.querySelector("[data-counter]");
      }

      if (e.target.dataset.action === "plus") {
        counter.innerText = ++counter.innerText;
        // location.reload();
      }

      if (e.target.dataset.action === "minus") {
        // location.reload();
        if (parseInt(counter.innerText) > 0) {
          counter.innerText = --counter.innerText;
        }

        for (var i = 0; i < itemsOrder.length; i++) {
          if (parseInt(counter.innerText) < 1) {
            if (
              i == parseInt(e.target.closest(".order-block-info").dataset.id)
            ) {
              let answer = confirm("Видалити товар?");
              if (answer === true) {
                itemsOrder.splice(i, 1);
                e.target.closest(".order-block-info").remove();
                totalSum.innerText = 0;
                localStorage.setItem("orderItems", JSON.stringify(itemsOrder));
                location.reload();
              } else {
                counter.innerText = 1;
                return false;
              }
            }
          }
        }
      }

      // click on trash icon
      if (e.target.classList.value === "trash") {
        e.target.closest(".order-block-info").remove();
        itemsOrder.splice(i, 1);
        location.reload();
        localStorage.setItem("orderItems", JSON.stringify(itemsOrder));
      }
      // click on trash icon

      function calcCartPrice() {
        const cartItems = document.querySelectorAll(".order-block-info");

        let totalPrice = 0;
        let totalQuan = 0;

        cartItems.forEach((item) => {
          const amountEl = item.querySelector("[data-counter]");
          const priceEl = item.querySelector(".orderPrice1Piece");
          const currentPrice =
            parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

          totalPrice += currentPrice;
          totalSum.innerText = totalPrice;

          totalQuan += parseInt(amountEl.innerText);
          totalQun.value = totalQuan;

          totalSumInput.value = totalPrice;
        });
      }

      calcCartPrice();
    });
    // Calculate quantity

    // Insert total price before quantity increasing
    let totalPrice = 0;
    const cartItems = document.querySelectorAll(".order-block-info");

    if (cartItems.length >= 1) {
      headerOrderQuantity.innerText = cartItems.length;
      headerOrderQuantity.style.display = "flex";
      localStorage.setItem("quantityItems", cartItems.length);
    } else {
      headerOrderQuantity.style.display = "none";
    }

    cartItems.forEach((item) => {
      const amountEl = item.querySelector("[data-counter]");
      const priceEl = item.querySelector(".orderPrice1Piece");
      const currentPrice =
        parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

      totalPrice += currentPrice;
      totalSum.innerText = totalPrice;
    });

    // initial order quantity in the header
    headerOrderQuantity.style.display = "none";

    const orderQuantity = document.querySelectorAll(".orderQuantity");

    if (orderQuantity.length >= 1) {
      orderQuantity.forEach((item) => {
        let amount = 0;
        amount += parseInt(item.innerText);
        totalQun.innerText = parseInt(totalQun.innerText) + amount;
        headerOrderQuantity.style.display = "flex";
      });
    } else {
      localStorage.removeItem("quantityItems");
      headerOrderQuantity.style.display = "none";
    }
    // initial order quantity in the header
    // Insert total price before quantity increasing

    // Anchor adding
    window.addEventListener("mousemove", (e) => {
      if (e.pageY >= 1150) {
        ancorImg.style.display = "block";
      } else {
        ancorImg.style.display = "none";
      }
    });
    // Anchor adding

    // Close Need To Agree Pop Up
    closeNeedAgreeBlock.addEventListener("click", () => {
      let needToAgreeBlock = document.querySelector(".need-to-agree-block"),
        agreeBlockOverlay = document.querySelector(".agree-block-overlay");
      needToAgreeBlock.style.display = "none";
      agreeBlockOverlay.style.display = "none";
    });
    // Close Need To Agree Pop Up

    let api_key = "8863d60a1da94b91f4790f40aa724999";
    let api_url = "https://api.novaposhta.ua/v2.0/json/";

    let areaSelect = document.getElementById("areaSelect");
    let citySelect = document.getElementById("citySelect");
    let warehouseSelect = document.getElementById("warehouseSelect");

    let area = {};
    let city = {};
    let warehouse = {};

    function makePostRequest(method, params, callback) {
      let requestData = {
        apiKey: api_key,
        modelName: "Address",
        calledMethod: method,
        methodProperties: params,
      };

      let request = new XMLHttpRequest();
      request.open("POST", api_url, true);
      request.setRequestHeader("Content-Type", "application/json");

      request.onload = function () {
        if (request.status === 200) {
          let response = JSON.parse(request.responseText);
          // console.log(response.data);
          callback(response.data);
        } else {
          console.error("Помилка при виведенні запиту:", request.statusText);
        }
      };

      request.send(JSON.stringify(requestData));
    }

    function createOption(element, value, text) {
      let option = document.createElement("option");
      option.value = value;
      option.text = text;
      element.appendChild(option);
    }

    function loadAreas() {
      makePostRequest("getAreas", {}, (areas) => {
        areas.forEach((area) => {
          createOption(areaSelect, area.Ref, area.Description);
        });

        areaSelect.addEventListener("change", () => {
          areaDescriptionInput.value =
            areaSelect.options[areaSelect.selectedIndex].text;
          loadCities(areaSelect.value);
        });
      });
    }

    function loadCities(areaRef) {
      citySelect.innerHTML =
        '<option value="">Оберіть місце | Choose city</option>';
      warehouseSelect.innerHTML =
        '<option value="">Оберіть відділення або поштомат | Choose a branch or a post office</option>';

      let cityParams = {
        AreaRef: areaRef,
      };

      makePostRequest("getCities", cityParams, (cities) => {
        cities.forEach((city) => {
          createOption(citySelect, city.Ref, city.Description);
        });

        city = cities[0];

        citySelect.addEventListener("change", () => {
          cityDescriptionInput.value =
            citySelect.options[citySelect.selectedIndex].text;
          loadWarehouses(citySelect.value);
        });
      });
    }

    function loadWarehouses(cityRef) {
      warehouseSelect.innerHTML =
        '<option value="">Оберіть відділення або поштомат | Choose a branch or a post office </option>';

      let warehouseParams = {
        CityRef: cityRef,
      };

      makePostRequest("getWarehouses", warehouseParams, (warehouses) => {
        warehouses.forEach((warehouse) => {
          createOption(warehouseSelect, warehouse.Ref, warehouse.Description);
        });

        warehouseSelect.addEventListener("change", () => {
          warehouse = warehouses.find(
            (item) => item.Ref === warehouseSelect.value
          );
          if (warehouse) {
            warehouseDescriptionInput.value = warehouse.Description;
          } else {
            warehouseDescriptionInput.value = "";
          }
        });
      });
    }

    loadAreas();

    let areaDescriptionInput = document.getElementById("areaDescription");
    let cityDescriptionInput = document.getElementById("cityDescription");
    let warehouseDescriptionInput = document.getElementById(
      "warehouseDescription"
    );

    areaDescriptionInput.value = area.Description;
    cityDescriptionInput.value = city.Description;
    warehouseDescriptionInput.value = warehouse.Description;
  }
};

// Назначаем обработчик события для ошибки
xhr.onerror = function () {
  console.error("Помилка при завантаженні даних.");
};

// Отправляем запрос
xhr.send();

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

  patternLatters = /^[А-ЯЁІЇЄа-яёіїєA-Za-z]+$/;

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
  let needToAgreeBlock = document.querySelector(".need-to-agree-block"),
    agreeBlockOverlay = document.querySelector(".agree-block-overlay");

  if (agreeConditions.checked) {
    needToAgreeBlock.style.display = "none";
    agreeBlockOverlay.style.display = "none";
    agreeConditions.checked;
  } else {
    needToAgreeBlock.style.display = "flex";
    agreeBlockOverlay.style.display = "flex";
  }
  // Show Need to Agree Block

  // Show if need to phone client back
  if (!noNeedToPhone.checked) {
    noNeedToPhoneLabelValue = noNeedToPhoneLabel.innerText;
  } else {
    noNeedToPhoneLabelValue = "Треба передзвонити";
  }
  // Show if need to phone client back

  if (!noNeedToPhone.checked) {
    callBackInp.value = "Не треба передзвонювати";
  } else if (noNeedToPhone.checked) {
    callBackInp.value = "Треба передзвонювати";
  }

  // Check form to send
  if (
    checkName == true &&
    checkSurname == true &&
    checkNumber == true &&
    checkEmail == true &&
    agreeConditions.checked
  ) {
    localStorage.clear();
    return true;
  } else {
    return false;
  }
}
