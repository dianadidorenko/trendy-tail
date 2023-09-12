const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (navigator.geolocation) {
    // якщо браузер дозволяє знаходити міцеположення
    button.innerText = "Дозвольте знайти місцезнаходження";

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    button.innerText = "Ваш браузер не підтримує";
  }
});

function onSuccess(position) {
  button.innerText = "Визначення вашого місцезнаходження...";
  let { latitude, longitude } = position.coords;

  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=444c277fd5384fad96646f69c8db76b4`
  )
    .then((response) => response.json())
    .then((response) => {
      let allDetails = response.results[0].components;
      // console.table(allDetails);
      let { shop, road, borough, city, district, country, continent } =
        allDetails;

      if (shop === "undefined" || shop === undefined) {
        button.innerHTML = `${road}, ${borough}, ${city},  </br> ${district}, ${country}, ${continent}`;
      } else {
        button.innerHTML = `${shop}, ${road}, ${borough}, </br> ${city}, ${district}, ${country}, ${continent}`;
      }
    })

    .catch(() => {
      // якщо сталася помилка
      button.innerText = "Щось пішло не так";
    });
}

function onError(error) {
  if (error.code == 1) {
    // якщо юзер відзилив запит
    button.innerText = "Ви відхилили запит / You have rejected the request";
  } else if (error.code == 2) {
    // якщо локація недостуна
    button.innerText = "Місцезнаходження недоступне / Location is unavailable";
  } else {
    // якщо сталася помилка
    button.innerText = "Щось пішло не так / Something went wrong";
  }
  button.setAttribute("disabled", "true"); // вимкнути кнопку якщо сталася помилка
}
