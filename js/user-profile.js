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

// Insert profile name in the header

profileBtn.addEventListener("click", () => {
  username = localStorage.setItem("userProfileName", profileUsername.value);
});

// Insert profile name in the header

// Insert user image to Profile

myImg.onchange = function (event) {
  var target = event.target;

  if (!FileReader) {
    alert("FileReader не підтримується");
    return;
  }

  if (!target.files.length) {
    alert("Нічого не завантажено");
    return;
  }

  var fileReader = new FileReader();

  profileBtn.addEventListener("click", () => {
    localStorage.setItem("userPhoto", fileReader.result);
    img1.src = localStorage.getItem("userPhoto");
  });

  // fileReader.onload = function() {
  //     img1.src = fileReader.result;
  // }

  fileReader.readAsDataURL(target.files[0]);
};

if (localStorage.getItem("userPhoto").length > 1) {
  img1.src = localStorage.getItem("userPhoto");
} else {
  img1.style.display = "none";
}

// Insert user image to Profile

// Insert profile name in the header

userName.innerText = localStorage.getItem("userProfileName");

if (userName.innerText.length > 1) {
  arrow.style.display = "flex";
}
profileUsername.value = localStorage.getItem("userProfileName");

// Insert profile name in the header
