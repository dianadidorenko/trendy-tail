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

date = new Date().toLocaleDateString();

const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

document.querySelector("#enter").addEventListener("click", () => {
  const userInfo = document.querySelector("#userInfo");
  createItem(userInfo);
});

document.querySelector("#userInfo").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const userInfo = document.querySelector("#userInfo");
    createItem(userInfo);
  }
});

function displayItems() {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="comment">
                  <p class='date'> ${date} </p>
                  <p class='items'> ${itemsArray[i]} </p>
              </div>`;
  }
  document.querySelector(".comment-block").innerHTML = items;
}

function createItem(userInfo) {
  if (userInfo.value.length == "" && userComment.value.length == "") {
    alert("Введіть будь-ласка коментар.");
  } else {
    itemsArray.push(userInfo.value + ", <br> " + userComment.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
  }
}

window.onload = function () {
  displayItems();
};
