const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (navigator.geolocation) {
    //if browser support geolocation api
    button.innerText = "Дозвольте знайти місцезнаходження";
    // geolocation.getCurrentPosition method is used to get current position of the device
    // it takes three paramaters success, error, options. If everything is right then success
    // callback function will call else error callback function will call. We don't need third paramater for this project
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    button.innerText = "Ваш браузер не підтримує";
  }
});

function onSuccess(position) {
  button.innerText = "Визначення вашого місцезнаходження...";
  let { latitude, longitude } = position.coords; //getting latitude and longitude properties value from coords obj
  //sending get request to the api with passing latitude and longitude coordinates of the user position
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=444c277fd5384fad96646f69c8db76b4`
  )
    //parsing json data into javascript object and returning it and in another then function receiving the object that is sent by the api
    .then((response) => response.json())
    .then((response) => {
      let allDetails = response.results[0].components; //passing components object to allDetails variable
      console.table(allDetails);
      let { shop, road, borough, city, district, country, continent } =
        allDetails; //getting country, postcode, country properties value from allDetails obj
      button.innerHTML = `${shop}, ${road}, ${borough}, </br> ${city}, ${district}, ${country}, ${continent}`; //passing these value to the button innerText
    })
    .catch(() => {
      //if error any error occured
      button.innerText = "Щось пішло не так";
    });
}

function onError(error) {
  if (error.code == 1) {
    //if user denied the request
    button.innerText = "Ви відхилили запит";
  } else if (error.code == 2) {
    //if location in not available
    button.innerText = "Місцезнаходження недоступне";
  } else {
    //if other error occured
    button.innerText = "Щось пішло не так";
  }
  button.setAttribute("disabled", "true"); //disbaled the button if error occured
}
