document.addEventListener("DOMContentLoaded", function () {

  //Add/Remove Class in header on user scroll
  let scrollpos = window.scrollY;
  const header = document.querySelector(".header");
  const headerLogo = document.querySelector(".header .logo img");
  const header_height = 1;

  const add_class_on_scroll = () => header.classList.add("scroll");
  const remove_class_on_scroll = () => header.classList.remove("scroll");

  window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;
    if (scrollpos >= header_height) {
      add_class_on_scroll();
      headerLogo.src = "/img/dark-logo.svg";
    } else {
      remove_class_on_scroll();
      headerLogo.src = "/img/white-logo.svg";
    }
  });

  //Opens MegaMenu when user clicks to menu 
  const menuButton = document.querySelector('#menu');
  const menuText = document.querySelector('#menu span');
  const megaMenu = document.querySelector('.megamenu'); 
  const body = document.querySelector('body');

  menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(megaMenu.classList.contains("hidden")) {
      megaMenu.classList.remove('hidden');
      body.style.overflowY = "hidden";
      add_class_on_scroll();
      headerLogo.src = "/img/dark-logo.svg";
      menuText.textContent = 'Cerrar';
    } else {
      megaMenu.classList.add('hidden');
      menuText.textContent = 'Menú';
      body.style.overflowY = "auto";
    }
  
  })

  // // Scroll Reveal 
  // ScrollReveal().reveal('h1, h2, .clientes-logo .logo', {
  //   reset: true,
  //   distance: '100%',
  //   delay: 375,
  //   duration: 1000,
  //   origin: 'bottom',
  //   opacity: null
  // });

});
