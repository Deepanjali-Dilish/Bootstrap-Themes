import data1 from "./data/categories.json" with {type: 'json'};


const hamburger = document.querySelector(".hamber-burger");
const navbarCollapse = document.querySelector(".collapse");
const categoriesDropdown = document.getElementById("menu-top");
const categoryListContainer = document.getElementById("catgories-list"); 
hamburger.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});
console.log(data1);

let showCategories = false;
const categoriesData = data1

categoriesData.categories.forEach((category) => {
  const categoryList = document.createElement("li");
  categoryList.textContent = category.value;
  categoriesDropdown.appendChild(categoryList);
});

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


// cards

import data2 from "./data/cards.json" with{type: 'json'}

const data = data2
console.log(data2)
  
function cards(option) {

    const container = document.querySelector('.cards');
    container.innerHTML = ""; 
  
    if (!data.sortOptions[option]) {
      console.error(`Invalid option "${option}"`);
      return;
    }
  
    const selectedData = data.sortOptions[option];
  
    selectedData.forEach(item => {
      const listItems = document.createElement('li');
      listItems.classList.add('cards-list');
      
      listItems.innerHTML = `
        <div class="theme-card-body">
            <div class="theme-card">
                <a class="d-block" href="#"> 
                    <img src="${item.images[0]}" class="card2">
                    <img src="${item.images[1]}" class="card3">
                </a>
                 <a class="theme-card-overlay btn btn-brand btn-sm">${item.overlayText}</a>
            </div>
  
            <div class="theme-card-footer">
                <div class="theme-card-footer-item">
                    <a class="card-title" href="#">${item.title}</a>
                    <ul class="card-lists">
                        <li><a href="#">${item.category}</a></li>
                    </ul>
                </div>
  
                <div class="theme-card-footer-item">
                    <p class="theme-card-price">
                        <span class="amount">
                            <span class="symbol">${item.price}</span>
                        </span>
                    </p>
                    <ul class="rating"></ul>
                </div>
            </div>
        </div>`;
  
      const ratingList = listItems.querySelector('.rating');
      
        for (let i = 0; i < 5; i++) {
          const ratingItem = document.createElement('li');
          ratingItem.classList.add('rating-item');
          
          
          if (i < item.rating) {
              ratingItem.classList.add('rating-item-active'); 
          }
          
          ratingList.appendChild(ratingItem);
        }
        
        container.appendChild(listItems);
    });
  }
  
  document.querySelector('.sort').addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    cards(selectedOption);
  });
  
  cards("newness");
  
 