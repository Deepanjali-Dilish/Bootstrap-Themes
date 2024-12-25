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

import data from "./data/card.json" with {type: 'json'};

const cardsData = {
    "cards": [
        {
            "title": "FreshCart – Next Js eCommerce Website Template",
            "images": ["img/caed.jpg", "img/card3.webp"],
            "price": "$49.00",
            "category": "E-Commerce & Retail",
            "rating": 5
        }
    ]
};
function createCard(card) {
     const listItem = document.createElement('li');
     listItem.classList.add('cards-list');

    listItem.innerHTML = `
        <div class="theme-card-body">
            <div class="theme-card">
                <a class="d-block" href="#"> 
                    <img src="${card.images[0]}" class="card2">
                    <img src="${card.images[1]}" class="card3">
                </a>
            </div>
    
            <div class="theme-card-footer">
                <div class="theme-card-footer-item">
                    <a class="card-title" href="#">${card.title}</a>
                    <p class="theme-card-info"></p>
                    <ul class="card-lists">
                        <li><a href="#">${card.category}</a></li>
                    </ul>
                </div>
    
                <div class="theme-card-footer-item">
                    <p class="theme-card-price">
                        <span class="amount">
                            <span class="symbol">${card.price}</span>
                        </span>
                    </p>
                    <ul class="rating">
                        ${Array(card.rating).fill('<li class="rating-item"></li>').join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    return listItem;
}


const container = document.querySelector('ul'); 
cardsData.cards.forEach(card => {
    const cardElement = createCard(card);
    container.appendChild(cardElement);
});
