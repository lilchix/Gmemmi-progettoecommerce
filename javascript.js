function menuOnClick() {
  var menuBar = document.getElementById("menu-bar");
  var nav = document.getElementById("nav");
  var menuBg = document.getElementById("menu-bg");

  menuBar.classList.toggle("change");
  nav.classList.toggle("change");
  menuBg.classList.toggle("change-bg");
}


function aggiungiAlCarrello() {
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.textContent);
  numero++;
  carrello.textContent = numero;
}

function rimuoviDalCarrello() {
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.textContent);
  numero--;
  carrello.textContent = numero;
}

function svuotaCarrello() {
  var carrello = document.getElementById("carrello");
  carrello.textContent = 0;
}

/* Swiper */
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
