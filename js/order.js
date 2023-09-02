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

// Назначаем обработчик события для успешной загрузки данных
xhr.onload = function () {
  if (xhr.status === 200) {
    var jsonData = JSON.parse(xhr.responseText);

    let itemsOrder = JSON.parse(localStorage.getItem("orderItems"));

    let items = "";

    // console.log(jsonData);

    // 22
    for (var i = 0; i < itemsOrder.length; i++) {
      items += `<div class="order-block-info" data-id='${jsonData[i].id}'>
                <div class="order-block-info-left-part">
                  <img class="popUpImage" src='${itemsOrder[i].imgPath.slice(
                    45
                  )}'/>
                </div>
                <div class="order-block-info-right-part">
                  <p class="orderGoodsTitle">${itemsOrder[i].name}</p>
                  <p>Розмір: <span class="orderSize">${
                    itemsOrder[i].size
                  }</span></p>
                  <p>Ціна за одиницю:
                    <span class="orderPrice1Piece">${
                      itemsOrder[i].price
                    }</span> грн
                  </p>
                  <div class="quantity-block">
                    <p>Кількість:</p>
                    <span data-action="minus"class="minus">-</span>
                    <span class="orderQuantity" data-counter>1</span>
                    <span data-action="plus" class="plus">+</span>
                    <img class='trash' src='img/order/trash.svg'/>
                  </div>
                </div>
              </div>`;
    }
    document.querySelector(".order-info-block-right-part").innerHTML = items;

    // Total price of all goods
    let orderPrices = document.querySelectorAll(".orderPrice");
    var total = [];

    orderPrices.forEach((price) => {
      total.push(parseInt(price.innerText));

      let totalValue = total.reduce((a, b) => a + b);

      totalSum.innerText = totalValue;
    });
    // Total price of all goods

    // initial order quantity in the header
    if (document.querySelectorAll(".order-block-info").length) {
      localStorage.setItem(
        "quantityOrderValue",
        document.querySelectorAll(".order-block-info").length
      );
    }
    // initial order quantity in the header

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
              itemsOrder.splice(i, 1);
              e.target.closest(".order-block-info").remove();
              totalSum.innerText = 0;
              localStorage.setItem("quantityOrderValue", 0);
              localStorage.setItem("orderItems", JSON.stringify(itemsOrder));
              location.reload();
            }
          }
        }
      }

      // click on trash icon
      if (e.target.classList.value === "trash") {
        e.target.closest(".order-block-info").remove();
        itemsOrder.splice(i, 1);
        localStorage.setItem("quantityOrderValue", 0);
        location.reload();
        localStorage.setItem("orderItems", JSON.stringify(itemsOrder));
      }
      // click on trash icon

      function calcCartPrice() {
        const cartItems = document.querySelectorAll(".order-block-info");

        let totalPrice = 0;

        cartItems.forEach((item) => {
          const amountEl = item.querySelector("[data-counter]");
          const priceEl = item.querySelector(".orderPrice1Piece");
          const currentPrice =
            parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

          totalPrice += currentPrice;
          totalSum.innerText = totalPrice;
        });
      }

      calcCartPrice();
    });
    // Calculate quantity

    // Insert total price before quantity increasing
    let totalPrice = 0;
    const cartItems = document.querySelectorAll(".order-block-info");

    cartItems.forEach((item) => {
      const amountEl = item.querySelector("[data-counter]");
      const priceEl = item.querySelector(".orderPrice1Piece");
      const currentPrice =
        parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

      totalPrice += currentPrice;
      totalSum.innerText = totalPrice;
    });

    // initial order quantity in the header
    const orderQuantity = document.querySelectorAll(".orderQuantity");
    orderQuantity.forEach((item) => {
      let amount = 0;
      amount += parseInt(item.innerText);
      totalQun.innerText = parseInt(totalQun.innerText) + amount;
      localStorage.setItem("quantityOrderValue", totalQun.innerText);
      // initial order quantity in the header
    });
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
      let needToAgreeBlock = document.querySelector(".need-to-agree-block");
      needToAgreeBlock.style.display = "none";
    });
    // Close Need To Agree Pop Up

    let api_key = "8863d60a1da94b91f4790f40aa724999";
    let api_url = "https://api.novaposhta.ua/v2.0/json/";

    let areaSelect = document.getElementById("areaSelect");
    let citySelect = document.getElementById("citySelect");
    let warehouseSelect = document.getElementById("warehouseSelect");

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
          loadCities(areaSelect.value);
        });
      });
    }

    function loadCities(areaRef) {
      citySelect.innerHTML = '<option value="">Оберіть місце</option>';
      warehouseSelect.innerHTML =
        '<option value="">Оберіть відділення або поштомат</option>';

      let cityParams = {
        AreaRef: areaRef,
      };

      makePostRequest("getCities", cityParams, (cities) => {
        cities.forEach((city) => {
          createOption(citySelect, city.Ref, city.Description);
        });

        citySelect.addEventListener("change", () => {
          loadWarehouses(citySelect.value);
        });
      });
    }

    function loadWarehouses(cityRef) {
      warehouseSelect.innerHTML =
        '<option value="">Оберіть відділення або поштомат</option>';

      let warehouseParams = {
        CityRef: cityRef,
      };

      makePostRequest("getWarehouses", warehouseParams, (warehouses) => {
        warehouses.forEach((warehouse) => {
          createOption(warehouseSelect, warehouse.Ref, warehouse.Description);
        });
      });
    }

    loadAreas();
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

  patternLatters = /^[а-яА-Яa-zA-Z]+$/;

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
  let needToAgreeBlock = document.querySelector(".need-to-agree-block");

  if (agreeConditions.checked) {
    needToAgreeBlock.style.display = "none";
    agreeConditions.checked;
  } else {
    let needToAgreeBlock = document.querySelector(".need-to-agree-block");
    needToAgreeBlock.style.display = "flex";
  }
  // Show Need to Agree Block

  // Show City Value to Delivery
  chooseCityDeliveryValue = chooseCityDelivery.value;
  // Show City Value to Delivery

  // Show if need to phone client back
  if (!noNeedToPhone.checked) {
    noNeedToPhoneLabelValue = noNeedToPhoneLabel.innerText;
  } else {
    noNeedToPhoneLabelValue = "Треба передзвонити";
  }
  // Show if need to phone client back

  if (novaPoshta.checked) {
    // Save Chosen Delivery Type
    novaPoshtaValue = novaPoshtaLabel.innerText.split(" ")[0];
    ukrPoshta.value = "";
    meest.value = "";
  } else if (ukrPoshta.checked) {
    ukrPoshtaValue = ukrPoshtaLabel.innerText.split(" ")[0];
    novaPoshta.value = "";
    meest.value = "";
  } else if (meest.checked) {
    meestaValue = meestLabel.innerText.split(" ")[0];
    novaPoshta.value = "";
    ukrPoshta.value = "";
  } else if (!novaPoshta.checked && !ukrPoshta.checked && !meest.checked) {
    alert("Треба обрати спосіб доставки");
  }
  // Save Chosen Delivery Type

  // Check form to send
  if (
    checkName == true &&
    checkSurname == true &&
    checkNumber == true &&
    checkEmail == true
  ) {
    return true;
  } else {
    return false;
  }
}
