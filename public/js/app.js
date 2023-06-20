document.addEventListener("DOMContentLoaded", function () {
  //Add/Remove Class in header on user scroll
  let scrollpos = window.scrollY;
  const header = document.querySelector(".header");
  const headerLogo = document.querySelector(".header .logo img");
  const header_height = 1;

  const add_class_on_scroll = () => header.classList.add("scroll");
  const remove_class_on_scroll = () => header.classList.remove("scroll");

  checkHeaderPosition();

  window.addEventListener("scroll", function () {
    checkHeaderPosition();
  });

  function checkHeaderPosition() {
    scrollpos = window.scrollY;
    if (scrollpos >= header_height) {
      add_class_on_scroll();
      headerLogo.src = "/img/dark-logo.svg";
    } else {
      remove_class_on_scroll();
      headerLogo.src = "/img/white-logo.svg";
    }
  }

  //Opens MegaMenu when user clicks to menu
  const menuButton = document.querySelector("#menu");
  const menuText = document.querySelector("#menu span");
  const megaMenu = document.querySelector(".megamenu");
  const body = document.querySelector("body");

  menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (megaMenu.classList.contains("hidden")) {
      megaMenu.classList.remove("hidden");
      body.style.overflowY = "hidden";
      add_class_on_scroll();
      headerLogo.src = "/img/dark-logo.svg";
      menuText.textContent = "Cerrar";
    } else {
      megaMenu.classList.add("hidden");
      menuText.textContent = "Menú";
      body.style.overflowY = "auto";
    }
  });

  //Home Slider
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 4000,
    },
  });

  //About Us Slider
  var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    // autoplay: {
    //   delay: 4000,
    // },
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 32,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 32
      },
      // when window width is >= 480px
      744: {
        slidesPerView: 2,
        spaceBetween: 32
      },
      // when window width is >= 1025px
      1025: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    },
  });

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
