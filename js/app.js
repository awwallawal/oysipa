let navBar = document.querySelector (".navLink");
let menuBar = document.getElementById("menuBtn");
menuBar.addEventListener ("click", ()=>{
    navBar.classList.toggle('active');
});

// Swiper JS 

  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop:true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
