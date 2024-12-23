const hamburger = document.querySelector('.hamber-burger');
const navbarCollapse = document.querySelector('.collapse')

hamburger.addEventListener('click', () =>{
    navbarCollapse.classList.toggle('show')
})  

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.hamber-burger');
//     const dropdown = document.querySelector('.navbar-collapse');
//     hamburger.addEventListener('click', function() {
//         // Toggle the display of the dropdown
//         if (dropdown.style.display === 'block') {
//             dropdown.style.display = 'none';
//         } else {
//             dropdown.style.display = 'block';
//         }
//     });
//     // Optional: Close the dropdown if clicked outside
//     window.addEventListener('click', function(event) {
//         if (!hamburger.contains(event.target) && !dropdown.contains(event.target)) {
//             dropdown.style.display = 'none';
//         }
//     });
// });