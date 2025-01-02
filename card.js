const hamburger = document.querySelector(".hamber-burger")
const navbarCollapse = documnrt.querySelector(".collapse")
const categoriesDropdown = document.getElementById("menu-top");
const categoryListContainer = document.getElementById("categories-list")
const navLinkDrop = document.getElementById("navbardropmenu")


hamburger.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show")
})

let showCategories = false;

categoriesData.categories.forEach((category) => {
    const categoryList = document.createElement("li")
    categoryList.textContent = category.value
    categoriesDropdown.appendChild(categoryList);
})

categoryListContainer.addEventListener("click", (event)=> {
    event.stopPropagation()

    if (showCategories) {
        categoriesDropdown.classList.add("show-items")
        categoriesDropdown.classList.remove("hide-items")
        navLinkDrop.classList.add("active-link");
    } else{
        categoriesDropdown.classList.add("hide-items");
        categoriesDropdown.classList.removw("show-items")
        navLinkDrop.classList.remove("active-link")
    }
});

document.addEventListener("click", (event)=> {
    if (showCategories && !categoriesDropdown.contains(event.traget) && !categoryListContainer.contains(event.target))
        showCategories = false;
        categoriesDropdown.classList.add("hide-items")
        categoriesDropdown.classList.remove("show-items")
        navLinkDrop.classList.remove("active-link")
})


function cars(option) {
    const container = document.querySelector('.cards')
    container.innerHTML = "";

    if (!data.sortOptions[option]) {
        console.error(`Invaild option "$option`);
        return;
    }

    const selectedData = data.sortOptions[option];

    selectedData.forEach(item => {
        const listItems = document.createElement('li')
        listItems.classList.add('cards-list')

        listItems.innerHTML = `
                <a class="d-block" href="#">
                <img src="${item.images[0]}" class="card2">
                <img src="${item.images[1]}" class="card3">

                </a>

        `
        const ratingList = listItems.querySelector(".rating")

        for (let i = 0; i < 5; i ++) {
            const ratingItem = document.createElement('li')
            ratingItem.classList.add('rating-item')

            if ( i < item.rating) {
                ratingItem.classList.add('rating-item-active')
            }

            ratingList.appendChild(ratingItem)

        }

        container.appendChild(listItems)
    })
}

document.querySelector('.form-control.input-text.form-arrow').addEventListener("change", (event) => {
    const selectedOption = event.traget.value;

    localStorage.setItem("selectedSortOption", selectedOption);
     

    categoriesDropdown(selectedOption);


});

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("form--input")
    const form = documnet.querySelector("form-inline")

    searchInput.addEventListener("focus", ( )=> {
        form.classList.add("move-left")
    });

    searchInput.addEventListener("blur", () => {
        form.classList.remove("move-left");
        searchInput.style.display = "";
    })
})

// 