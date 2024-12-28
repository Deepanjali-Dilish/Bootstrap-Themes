import data3 from "./data/pagination.json" with{type: 'json'}



const data = data3
console.log(data3)
  
function renderCards(option) {
    const container = document.querySelector('.cards');
    container.innerHTML = ""; // Clear the container
  
    // Ensure the selected data exists
    if (!data.sortOptions[option]) {
      console.error(`Invalid option "${option}"`);
      return;
    }
  
    const selectedData = data.sortOptions[option];
  
    selectedData.forEach(item => {
      const listItems = document.createElement('li'); // Create an <li> element
      listItems.classList.add('cards-list'); // Add the class
  
      // Create the card content
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
        </div>
      `;
  
      const ratingList = listItems.querySelector('.rating');
    
      // Loop through 5 rating positions
      for (let i = 0; i < 5; i++) {
          const ratingItem = document.createElement('li');
          ratingItem.classList.add('rating-item');
          
          // Check if current position (i) is less than the card's rating
          if (i < item.rating) {
              ratingItem.classList.add('rating-item-active'); // Make the rating active
          }
          
          ratingList.appendChild(ratingItem);
      }
  

      // Append the <li> to the <ul>
      container.appendChild(listItems);
    });
  }
  
  // Event listener for the dropdown
  document.querySelector('.sort select').addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    renderCards(selectedOption);
  });
  
  // Initial render for the default option
  renderCards("date");
  



