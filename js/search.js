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
  } else if (searchValue.value == "одяг") {
    window.location.href = "clothes-page.html";
    leadToSearchPage.setAttribute("href", "clothes-page.html");
  } else if (
    searchValue.value == "ліжко" ||
    searchValue.value == "ліжка" ||
    searchValue.value == "ліжаки"
  ) {
    window.location.href = "beds-page.html";
    leadToSearchPage.setAttribute("href", "beds-page.html");
  } else if (
    searchValue.value == "аксесуари" ||
    searchValue.value == "аксессуари"
  ) {
    window.location.href = "accessories-page.html";
    leadToSearchPage.setAttribute("href", "accessories-page.html");
  } else if (
    searchValue.value == "перенесення" ||
    searchValue.value == "сумки" ||
    searchValue.value == "сумки-переноски"
  ) {
    window.location.href = "carrying-page.html";
    leadToSearchPage.setAttribute("href", "carrying-page.html");
  } else if (searchValue.value == "знижки" || searchValue.value == "знижка") {
    window.location.href = "sale-page.html";
    leadToSearchPage.setAttribute("href", "sale-page.html");
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

    leadToSearchPageFromNotFound.addEventListener("click", () => {
      notFoundInput.value = notFoundInput.value.toLowerCase();

      if (notFoundInput.value == "") {
        alert("Введіть запит");
      } else if (notFoundInput.value == "одяг") {
        window.location.href = "clothes-page.html";
        leadToSearchPageFromNotFound.setAttribute("href", "clothes-page.html");
      } else if (
        notFoundInput.value == "ліжко" ||
        notFoundInput.value == "ліжка" ||
        notFoundInput.value == "ліжаки"
      ) {
        window.location.href = "beds-page.html";
        leadToSearchPageFromNotFound.setAttribute("href", "beds-page.html");
      } else if (
        notFoundInput.value == "аксессуари" ||
        notFoundInput.value == "аксесуари"
      ) {
        window.location.href = "accessories-page.html";
        leadToSearchPageFromNotFound.setAttribute(
          "href",
          "accessories-page.html"
        );
      } else if (
        notFoundInput.value == "перенесення" ||
        notFoundInput.value == "сумки"
      ) {
        window.location.href = "carrying-page.html";
        leadToSearchPageFromNotFound.setAttribute("href", "carrying-page.html");
      } else if (
        notFoundInput.value == "знижки" ||
        notFoundInput.value == "знижка"
      ) {
        window.location.href = "sale-page.html";
        leadToSearchPageFromNotFound.setAttribute("href", "sale-page.html");
      } else {
        notFoundInput.value = "";
        alert("Нічого не було знайдено");
      }
    });
    // Search Not Found
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
