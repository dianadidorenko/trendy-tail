// Show sizes table
sizesTable.addEventListener("click", () => {
  sizesTable = document.querySelector(".sizes-table");
  sizesTable.style.display = "flex";
});

closeSizesTable.addEventListener("click", () => {
  sizesTable.style.display = "none";
});
// Show sizes table

// Smooth  scrolling behavior
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  if (anchor.id == "sizesTable") {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const blockID = anchor.getAttribute("href");
      document
        .querySelector("" + blockID)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}
// Smooth  scrolling behavior
