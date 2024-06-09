


// Preloader
window.addEventListener('load', function() {
    var pageLoader = document.querySelector('.page-loader');
    if (pageLoader) {
        pageLoader.style.display = 'none';
    }
});



// Slide
let sliders = document.querySelectorAll(".slide");

sliders.forEach((slide) => {
  slide.addEventListener("click", function () {
    removeClassActive();
    slide.classList.add("active");
  });
});

function removeClassActive() {
  sliders.forEach((slide) => {
    slide.classList.remove("active");
  });
}



// Product Slide
$('.test-slider').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 1000,
  swipeToSlide:true,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});