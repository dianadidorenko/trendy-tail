// Feedback save
date = new Date().toLocaleDateString();

const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

document.querySelector("#enter").addEventListener("click", () => {
  const userInfo = document.querySelector("#userInfo");
  createItem(userInfo);
});

if (localStorage.getItem("items")) {
  let feedback = document.querySelector(".feedback");
  leaveCommentBlock.style.display = "none";
  feedback.style.paddingBottom = "70px";
}

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
      let weatherObject = JSON.parse(request.response);
      // console.log(weatherObject.results[0]);

      var userFirstAndLastName =
        weatherObject.results[0].name.first +
        " " +
        weatherObject.results[0].name.last;

      localStorage.setItem("userFirstAndLastName", userFirstAndLastName);
    } else if (request.status == 404) {
      alret("Щось пішло не так");
    }
  };
  request.send();
}

getUserInfo();

let name = localStorage.getItem("userFirstAndLastName");

function displayItems() {
  let items = "";

  // Для того щоб юзер бачив відгуки, а не порожню сторінку
  items = `<div class="comment">
              <p class='date'>10.08.2023</p>
              <div class='items'>
                <p class='username'>${name}</p>
                <p class='comment-text'>Все було супер, я задоволена якістю.</p>
                <div class="example-star-block">
                      <img src="img/feedback/star.svg" />
                      <img src="img/feedback/star.svg" />
                      <img src="img/feedback/star.svg" />
                      <img src="img/feedback/star.svg" />
                      <img src="img/feedback/star.svg" />
                    </div>
              </div>
            </div>`;
  // Для того щоб юзер бачив відгуки, а не порожню сторінку

  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="comment">
                <p class='date'> ${date} </p>
                <div class='items'>
                  <p class='username'>${itemsArray[i].name}</p>
                  <p class='comment-text'>${itemsArray[i].comment}</p>
                  <div class="star-block">
                  ${itemsArray[i].stars}
                  </div>
                </div>
              </div>`;
  }
  document.querySelector(".comment-block").innerHTML = items;
}

function createItem(userInfo) {
  if (userInfo.value.length == "" && userComment.value.length == "") {
    alert("Введіть будь-ласка коментар.");
  } else {
    itemsArray.push({
      name: `${userInfo.value}`,
      comment: `${userComment.value}`,
      stars: `${starBlock.innerHTML}`,
    });
  }

  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

displayItems();

// Feedback save

// Anchor adding
window.addEventListener("mousemove", (e) => {
  if (e.pageY >= 1450) {
    ancorImg.style.display = "block";
  } else {
    ancorImg.style.display = "none";
  }
});
// Anchor adding

// Rating
$(function () {
  $(".star-block img").click(function (e) {
    let stars = $(".star-block").children();
    $(stars).slice(0, 5).attr("src", "img/feedback/unstar.svg");
    if (e.target == stars[0]) {
      $(stars[0]).attr("src", "img/feedback/star.svg");
    } else if (e.target == stars[1]) {
      $(stars).slice(0, 2).attr("src", "img/feedback/star.svg");
    } else if (e.target == stars[2]) {
      $(stars).slice(0, 3).attr("src", "img/feedback/star.svg");
    } else if (e.target == stars[3]) {
      $(stars).slice(0, 4).attr("src", "img/feedback/star.svg");
    } else if (e.target == stars[4]) {
      $(stars).slice(0, 5).attr("src", "img/feedback/star.svg");
    }
  });
});
// Rating
