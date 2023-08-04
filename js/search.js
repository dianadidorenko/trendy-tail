// Search Pop Up Form

let searchButton = document.getElementById("searchButton"),
  FormSearch = document.querySelector(".search-form"),
  FormClose = document.querySelector(".search-close-overlay"),
  wrapper = document.querySelector(".wrapper"),
  leadToSearchPage = document.getElementById("leadToSearchPage"),
  searchValue = document.querySelector("#searchValue"),
  closePopUpSearch = document.getElementById("closePopUpSearch");

searchButton.addEventListener("click", () => {
  searchValue.value = "";
  FormSearch.style.display = "block";
  wrapper.style.opacity = "0.3";
  FormClose.style.display = "block";
  closePopUpSearch.style.display = "block";

  closePopUpSearch.addEventListener("click", () => {
    FormSearch.style.display = "none";
    wrapper.style.opacity = "1";
  });

  leadToSearchPage.addEventListener("click", () => {
    searchValue.value = searchValue.value.toLowerCase();

    if (searchValue.value == "") {
      alert("Введіть запит");
    } else if (searchValue.value == "ariel") {
      leadToSearchPage.setAttribute("href", "raincoat-ariel.html");
    } else if (searchValue.value == "delicate") {
      leadToSearchPage.setAttribute("href", "sweatshirt-delicate.html");
    } else if (searchValue.value == "bright") {
      leadToSearchPage.setAttribute("href", "collar-bright.html");
    } else if (searchValue.value == "ascold") {
      leadToSearchPage.setAttribute("href", "bed-ascold.html");
    } else if (
      searchValue.value == "ліжка" ||
      searchValue.value == "ліжко" ||
      searchValue.value == "ліжаки"
    ) {
      leadToSearchPage.setAttribute("href", "beds.html");
    } else if (
      searchValue.value == "аксесуари" ||
      searchValue.value == "аксессуари"
    ) {
      leadToSearchPage.setAttribute("href", "accessories.html");
    } else if (searchValue.value == "одяг") {
      leadToSearchPage.setAttribute("href", "clothes.html");
    } else if (
      searchValue.value == "перенесення" ||
      searchValue.value == "сумки"
    ) {
      leadToSearchPage.setAttribute("href", "carrying.html");
    } else if (searchValue.value == "знижки" || searchValue.value == "знижка") {
      leadToSearchPage.setAttribute("href", "discount.html");
    } else {
      // Search Not Found
      let notFound = document.querySelector(".search-not-found"),
        notFoundInput = document.getElementById("notFoundInput"),
        formNotFoundClose = document.querySelector(
          ".search-page-close-not-found-overlay"
        );

      console.log(searchValue.value);

      // notFoundInput.value = "";

      notFound.style.display = "block";
      formNotFoundClose.style.display = "block";
      FormSearch.style.display = "none";
      wrapper.style.opacity = "0.3";

      formNotFoundClose.addEventListener("click", () => {
        notFound.style.display = "none";
        wrapper.style.opacity = "1";
      });

      leadToSearchPageFromNotFound.addEventListener("click", () => {
        notFoundInput.value = notFoundInput.value.toLowerCase();

        if (notFoundInput.value == "") {
          alert("Введіть запит");
        } else if (notFoundInput.value == "ariel") {
          leadToSearchPageFromNotFound.setAttribute(
            "href",
            "raincoat-ariel.html"
          );
        } else if (notFoundInput.value == "delicate") {
          leadToSearchPageFromNotFound.setAttribute(
            "href",
            "sweatshirt-delicate.html"
          );
        } else if (notFoundInput.value == "bright") {
          leadToSearchPageFromNotFound.setAttribute(
            "href",
            "collar-bright.html"
          );
        } else if (notFoundInput.value == "ascold") {
          leadToSearchPageFromNotFound.setAttribute("href", "bed-ascold.html");
        } else if (
          notFoundInput.value == "ліжка" ||
          notFoundInput.value == "ліжко" ||
          notFoundInput.value == "ліжаки"
        ) {
          leadToSearchPageFromNotFound.setAttribute("href", "beds.html");
        } else if (
          notFoundInput.value == "аксессуари" ||
          notFoundInput.value == "аксесуари"
        ) {
          leadToSearchPageFromNotFound.setAttribute("href", "accessories.html");
        } else if (notFoundInput.value == "одяг") {
          leadToSearchPageFromNotFound.setAttribute("href", "clothes.html");
        } else if (
          notFoundInput.value == "перенесення" ||
          notFoundInput.value == "сумки"
        ) {
          leadToSearchPageFromNotFound.setAttribute("href", "carrying.html");
        } else if (
          notFoundInput.value == "знижки" ||
          notFoundInput.value == "знижка"
        ) {
          leadToSearchPageFromNotFound.setAttribute("href", "discounts.html");
        } else {
          notFoundInput.value = "";
          alert("Нічого не було знайдено");
        }
      });
      // Search Not Found
    }
  });
});

// Search Pop Up Form

// Search Pop Up Form Close

FormClose.addEventListener("click", () => {
  FormSearch.style.display = "none";
  wrapper.style.opacity = "1";
});

closePopUpSearch.addEventListener("click", () => {
  FormSearch.style.display = "none";
  wrapper.style.opacity = "1";
});

// Search Pop Up Form Close
