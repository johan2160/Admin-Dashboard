const themeToggler = document.querySelector("#theme-toggler");
const displayMenu = document.querySelector("#display-menu")
const hideMenu = document.querySelector("#hide-menu")
const aside = document.querySelector("aside")

// Toggling between themes
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
})

// Prevent aside menu not showing on screen larger than phones
function isMobileScreen() {
  return window.innerWidth <= 765; // You can adjust this threshold according to your design needs
}

function updateAsideDisplay() {
  if (isMobileScreen()) {
    aside.style.display = "none";
  } else {
    aside.style.display = "flex";
  }
}

// Initial check
updateAsideDisplay();

window.addEventListener('resize', updateAsideDisplay);

// Display/hide aside menu
displayMenu.addEventListener('click', () => {
  aside.style.display = "block";
});

hideMenu.addEventListener('click', () => {
  aside.style.display = "none";
});