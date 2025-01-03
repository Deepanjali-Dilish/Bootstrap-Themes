import data1 from "./data/categories.json" with {type: 'json'};

const hamburger = document.querySelector(".hamber-burger");
const navbarCollapse = document.querySelector(".collapse");
const categoriesDropdown = document.getElementById("menu-top");
const categoryListContainer = document.getElementById("catgories-list");
const navLinkDrop = document.getElementById("navbardropmenu"); 

hamburger.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});

console.log(data1);

let showCategories = false;
const categoriesData = data1;

categoriesData.categories.forEach((category) => {
  const categoryList = document.createElement("li");
  categoryList.textContent = category.value;
  categoriesDropdown.appendChild(categoryList);
});

categoryListContainer.addEventListener("click", (event) => {
  event.stopPropagation(); 
  showCategories = !showCategories;
  
  if (showCategories) {
    categoriesDropdown.classList.add("show-items");
    categoriesDropdown.classList.remove("hide-items");
    navLinkDrop.classList.add("active-link");
  } else {
    categoriesDropdown.classList.add("hide-items");
    categoriesDropdown.classList.remove("show-items");
    navLinkDrop.classList.remove("active-link"); 
  }
});
document.addEventListener("click", (event) => {
  if (showCategories && !categoriesDropdown.contains(event.target) && !categoryListContainer.contains(event.target)) {
    showCategories = false;
    categoriesDropdown.classList.add("hide-items");
    categoriesDropdown.classList.remove("show-items");
    navLinkDrop.classList.remove("active-link"); 
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
 
  document.querySelector('.form-control.input-text.form-arrow').addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    localStorage.setItem("selectedSortOption", selectedOption);

    cards(selectedOption);
});

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector('.form-control.input-text.form-arrow');
    const savedOption = localStorage.getItem("selectedSortOption") || "newness";

    dropdown.value = savedOption;

    console.log(`Dropdown value on load: ${dropdown.value}`);

    cards(savedOption);
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".form-input"); 
  const form = document.querySelector(".form-inline");

  searchInput.addEventListener("focus", () => {
      form.classList.add("move-left"); 

      // setTimeout(() => {
      //     form.classList.remove("move-left"); 
      //     searchInput.style.display = "none"; 
      // }, 1000); 
  });

  searchInput.addEventListener("blur", () => {
      form.classList.remove("move-left"); 
      searchInput.style.display = ""; 
  });
});


// import page from "./data/pagination.json" with{type: 'json'}
// import page from "./data/page.json" with{type: 'json}
// import page from "./data/page.json" with{type: 'json}

// const pages = page
// console.log(pages)

// function cardse(page) {
//   const container = document.querySelector('.cards');
//   container.innerHTML = ""; 

//   if (!pages.pagination[page]) {
//     console.error(`Invalid page "${page}"`);
//     return;
//   }

//   const selectedData = pages.pagination[page];

//   selectedData.forEach(item => {
//     const listItems = document.createElement('li');
//     listItems.classList.add('cards-list');

//     listItems.innerHTML = `
//       <div class="theme-card-body">
//           <div class="theme-card">
//               <a class="d-block" href="#"> 
//                   <img src="${item.images[0]}" class="card2">
//                   <img src="${item.images[1]}" class="card3">
//               </a>
//                <a class="theme-card-overlay btn btn-brand btn-sm">${item.overlayText}</a>
//           </div>

//           <div class="theme-card-footer">
//               <div class="theme-card-footer-item">
//                   <a class="card-title" href="#">${item.title}</a>
//                   <ul class="card-lists">
//                       <li><a href="#">${item.category}</a></li>
//                   </ul>
//               </div>

//               <div class="theme-card-footer-item">
//                   <p class="theme-card-price">
//                       <span class="amount">
//                           <span class="symbol">${item.price}</span>
//                       </span>
//                   </p>
//                   <ul class="rating"></ul>
//               </div>
//           </div>
//       </div>`;

//     const ratingList = listItems.querySelector('.rating');

//     for (let i = 0; i < 5; i++) {
//       const ratingItem = document.createElement('li');
//       ratingItem.classList.add('rating-item');

//       if (i < item.rating) {
//         ratingItem.classList.add('rating-item-active'); 
//       }

//       ratingList.appendChild(ratingItem);
//     }

//     container.appendChild(listItems);
//   });
// }


// function handlePagination() {
//   const paginationLinks = document.querySelectorAll('.pagination .page-item a.page-numbers');

//   paginationLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//       event.preventDefault();

//       const selectedPage = link.textContent.trim();
//       localStorage.setItem('selectedPage', selectedPage);

//       cardse(`page${selectedPage}`);

//       // Update active class
//       document.querySelectorAll('.pagination .page-item').forEach(item => {
//         item.classList.remove('active');
//       });
//       link.parentElement.classList.add('active');
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const savedPage = localStorage.getItem('selectedPage') || '1';

//   
//   cardse(`page${savedPage}`);

//   cardse(`pages{savedPage})
//   const activepagelink = document.qureySelector('.pagination .page-item). forEach(item => {

    // if(activepagelink.length > 0){

     // if (activepagelink){
        // activeLInk.parentElement.classList.add('active)
     //}
    //}
  //})
//   const activePageLink = document.querySelector(`.page-numbers:contains("${savedPage}")`);
//   if (activePageLink) {
//     activePageLink.parentElement.classList.add('active');
//   }

//  
//   handlePagination();
// });

