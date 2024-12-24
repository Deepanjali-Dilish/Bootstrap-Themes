import data from "./data/categories.json" with {type: 'json'};


const hamburger = document.querySelector(".hamber-burger");
const navbarCollapse = document.querySelector(".collapse");
const categoriesDropdown = document.getElementById("menu-top");
const categoryListContainer = document.getElementById("catgories-list"); // Add this for container selection
hamburger.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});
console.log(data);
// Initial visibility state
let showCategories = false;
const categoriesData = data
// Populate the dropdown list
categoriesData.categories.forEach((category) => {
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

// import data from "./data/card.json" with {type: 'json'};
