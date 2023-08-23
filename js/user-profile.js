// Check Form
function checkForm() {
  errorName.style.display = "none";
  errorSurname.style.display = "none";
  errorNumber.style.display = "none";
  errorMail.style.display = "none";
  errorCity.style.display = "none";

  var profileUsername = document.getElementById("profileUsername"),
    surname = document.getElementById("surname"),
    userNumber = document.getElementById("tel"),
    userMail = document.getElementById("email"),
    userCity = document.getElementById("city");

  checkName = true;
  checkSurname = true;
  checkNumber = true;
  checkMail = true;
  checkCity = true;

  profileUsername.style.border = "3px solid white";
  surname.style.border = "3px solid white";
  userNumber.style.border = "3px solid white";
  userMail.style.border = "3px solid white";
  userCity.style.border = "3px solid white";

  // Check Name

  patternLatters = /^[а-яА-Яa-zA-Z]+$/;

  if (!patternLatters.test(profileUsername.value)) {
    errorName.style.display = "block";
    profileUsername.style.border = "3px solid red";
    checkName = false;
  }
  if (!patternLatters.test(surname.value)) {
    errorSurname.style.display = "block";
    surname.style.border = "3px solid red";
    checkSurname = false;
  }
  if (!patternLatters.test(userCity.value)) {
    errorCity.style.display = "block";
    userCity.style.border = "3px solid red";
    checkCity = false;
  }

  // Check Phone Number

  patternDigit = /^\+380\d{9}$/;

  if (!patternDigit.test(userNumber.value)) {
    errorNumber.style.display = "block";
    userNumber.style.border = "3px solid red";
    checkNumber = false;
  }
  // =================================================================

  // Check Email

  patternMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  if (!patternMail.test(userMail.value)) {
    errorMail.style.display = "block";
    userMail.style.border = "3px solid red";
    checkMail = false;
  }
  // =================================================================

  // Check form to send

  if (
    checkName == true &&
    checkSurname == true &&
    checkNumber == true &&
    checkMail == true &&
    checkCity == true
  ) {
    return true;
  } else {
    return false;
  }
}
// Check Form

// Insert values to the in the form
profileBtn.addEventListener("click", () => {
  username = localStorage.setItem("userProfileName", profileUsername.value);
  userSurname = localStorage.setItem("userSurname", surname.value);
  phoneNumber = localStorage.setItem("phoneNumber", tel.value);
  userMail = localStorage.setItem("userMail", email.value);
  userCity = localStorage.setItem("userCity", city.value);
});

profileUsername.value = localStorage.getItem("userProfileName");
surname.value = localStorage.getItem("userSurname");
tel.value = localStorage.getItem("phoneNumber");
email.value = localStorage.getItem("userMail");
city.value = localStorage.getItem("userCity");
// Insert values to the in the form

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

if (localStorage.getItem("userPhoto")) {
  img1.src = localStorage.getItem("userPhoto");
} else {
  img1.style.display = "none";
}
// Insert user image to Profile

exit.addEventListener("click", () => {
  localStorage.clear();
});

// Insert profile name in the header
userName.innerText = localStorage.getItem("userProfileName");
// Insert profile name in the header

// Anchor adding
window.addEventListener("mousemove", (e) => {
  if (e.pageY >= 1150) {
    ancorImg.style.display = "block";
  } else {
    ancorImg.style.display = "none";
  }
});
// Anchor adding
