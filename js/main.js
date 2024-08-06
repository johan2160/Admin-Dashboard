const themeToggler = document.querySelector("#theme-toggler");
const displayMenu = document.querySelector("#display-menu")
const hideMenu = document.querySelector("#hide-menu")
const aside = document.querySelector("aside");

// Toggling between themes
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
})

function mobileMenu() {
  if (window.innerWidth <= 765) {
    displayMenu.addEventListener('click', () => {
      aside.style.left = "0";
    })
    
    hideMenu.addEventListener('click', () => { 
      aside.style.left = "-100%";
    })
  } else {
    aside.style.left = "0";
  }  
}

mobileMenu();

window.addEventListener('resize', mobileMenu);
