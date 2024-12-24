 import data from "./data/categories.json";


const hamburger = document.querySelector(".hamber-burger");
const navbarCollapse = document.querySelector(".collapse");
const categoriesDropdown = document.getElementById("menu-top");
const categoryListContainer = document.getElementById("catgories-list"); // Add this for container selection
hamburger.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});
// Initial visibility state
let showCategories = false;
console.log(categories);
// Populate the dropdown list
data.forEach((category) => {
  const categoryList = document.createElement("li");
  categoryList.textContent = category.value;
  categoriesDropdown.appendChild(categoryList);
});
// Toggle dropdown visibility
categoryListContainer.addEventListener("click", () => {
  showCategories = !showCategories;
  if (showCategories) {
    categoriesDropdown.classList.add("show-items");
    categoriesDropdown.classList.remove("hide-items");
  } else {
    categoriesDropdown.classList.add("hide-items");
    categoriesDropdown.classList.remove("show-items");
  }
});