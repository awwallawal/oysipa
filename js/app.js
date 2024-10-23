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
      autoplay: {
        delay: 5000,
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
  });

  /**COunter Section Starts */
  let valueDisplay = document.querySelectorAll(".num");
  let interval = 1000;

  valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue){
        clearInterval(counter);
      }
    }, duration)
  });

  (function () {
    
  }) ();