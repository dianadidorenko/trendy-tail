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

// Anchor adding
window.addEventListener("mousemove", (e) => {
  if (e.pageY >= 3850) {
    ancorImg.style.display = "block";
  } else {
    ancorImg.style.display = "none";
  }
});
// Anchor adding

// Addind name to the Feedback page
function getUserInfo() {
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  request.open("GET", "https://randomuser.me/api/");
  request.onload = function () {
    if (request.status === 200) {
      let usernameObject = JSON.parse(request.response);

      let userFirstAndLastName =
        usernameObject.results[0].name.first +
        " " +
        usernameObject.results[0].name.last;

      localStorage.setItem("username", userFirstAndLastName);
    } else if (request.status == 404) {
      alret("Щось пішло не так");
    }
  };
  request.send();
}

getUserInfo();
// Addind name to the Feedback page
