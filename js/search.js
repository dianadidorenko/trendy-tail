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
});

leadToSearchPage.addEventListener("click", () => {
  getSearchResult();
});

searchValue.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    getSearchResult();
  }
});

function getSearchResult() {
  searchValue.value = searchValue.value.toLowerCase();

  if (searchValue.value == "") {
    alert("Введіть запит");
  } else if (searchValue.value == "одяг" || searchValue.value == "clothes") {
    window.location.href = "clothes-page.html";
    leadToSearchPage.setAttribute("href", "clothes-page.html");
  } else if (
    searchValue.value == "ліжко" ||
    searchValue.value == "ліжка" ||
    searchValue.value == "ліжаки" ||
    searchValue.value == "bed" ||
    searchValue.value == "beds"
  ) {
    window.location.href = "beds-page.html";
    leadToSearchPage.setAttribute("href", "beds-page.html");
  } else if (
    searchValue.value == "аксесуари" ||
    searchValue.value == "аксессуари" ||
    searchValue.value == "accessories"
  ) {
    window.location.href = "accessories-page.html";
    leadToSearchPage.setAttribute("href", "accessories-page.html");
  } else if (
    searchValue.value == "перенесення" ||
    searchValue.value == "сумки" ||
    searchValue.value == "сумки-переноски" ||
    searchValue.value == "carrying" ||
    searchValue.value == "carrying-bags" ||
    searchValue.value == "bags"
  ) {
    window.location.href = "carrying-page.html";
    leadToSearchPage.setAttribute("href", "carrying-page.html");
  } else if (
    searchValue.value == "знижки" ||
    searchValue.value == "знижка" ||
    searchValue.value == "sale" ||
    searchValue.value == "discount"
  ) {
    window.location.href = "sale-page.html";
    leadToSearchPage.setAttribute("href", "sale-page.html");
  } else if (
    searchValue.value == "новинка" ||
    searchValue.value == "нова" ||
    searchValue.value == "новий" ||
    searchValue.value == "new"
  ) {
    window.location.href = "new-page.html";
    leadToSearchPage.setAttribute("href", "new-page.html");
  } else {
    // Search Not Found
    let notFound = document.querySelector(".search-not-found"),
      notFoundInput = document.getElementById("notFoundInput"),
      formNotFoundClose = document.querySelector(
        ".search-page-close-not-found-overlay"
      );

    notFoundInput.value = "";

    notFound.style.display = "block";
    formNotFoundClose.style.display = "block";
    FormSearch.style.display = "none";
    wrapper.style.opacity = "0.3";

    formNotFoundClose.addEventListener("click", () => {
      notFound.style.display = "none";
      wrapper.style.opacity = "1";
    });

    notFoundInput.addEventListener("keypress", (e) => {
      if (e.keyCode == 13) {
        searchFromNotFound();
      }
    });

    leadToSearchPageFromNotFound.addEventListener("click", () => {
      searchFromNotFound();
    });
    // Search Not Found

    function searchFromNotFound() {
      notFoundInput.value = notFoundInput.value.toLowerCase();

      if (notFoundInput.value == "") {
        alert("Введіть запит");
      } else if (
        notFoundInput.value == "одяг" ||
        notFoundInput.value == "clothes"
      ) {
        window.location.href = "clothes-page.html";
        leadToSearchPageFromNotFound.setAttribute("href", "clothes-page.html");
      } else if (
        notFoundInput.value == "ліжко" ||
        notFoundInput.value == "ліжка" ||
        notFoundInput.value == "ліжаки" ||
        notFoundInput.value == "bed" ||
        notFoundInput.value == "beds"
      ) {
        window.location.href = "beds-page.html";
        leadToSearchPageFromNotFound.setAttribute("href", "beds-page.html");
      } else if (
        notFoundInput.value == "аксессуари" ||
        notFoundInput.value == "аксесуари" ||
        notFoundInput.value == "accessories"
      ) {
        window.location.href = "accessories-page.html";
        leadToSearchPageFromNotFound.setAttribute(
          "href",
          "accessories-page.html"
        );
      } else if (
        notFoundInput.value == "перенесення" ||
        notFoundInput.value == "сумки" ||
        notFoundInput.value == "carrying" ||
        notFoundInput.value == "carrying-bags" ||
        notFoundInput.value == "bags"
      ) {
        window.location.href = "carrying-page.html";
        leadToSearchPageFromNotFound.setAttribute("href", "carrying-page.html");
      } else if (
        notFoundInput.value == "знижки" ||
        notFoundInput.value == "знижка" ||
        notFoundInput.value == "sale" ||
        notFoundInput.value == "discount"
      ) {
        window.location.href = "sale-page.html";
        leadToSearchPageFromNotFound.setAttribute("href", "sale-page.html");
      } else if (
        notFoundInput.value == "новинка" ||
        notFoundInput.value == "нова" ||
        notFoundInput.value == "новий" ||
        notFoundInput.value == "new"
      ) {
        window.location.href = "new-page.html";
        leadToSearchPage.setAttribute("href", "new-page.html");
      } else {
        notFoundInput.value = "";
        alert("Нічого не було знайдено");
      }
    }
  }
}
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
