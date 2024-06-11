


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
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
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



// Product Slide
$('.game-slider').slick({
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 1000,
  swipeToSlide:true,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
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



//click to selected
$(document).ready(function(){
  $('.humbtn1').on('click', function(){
     $('.humbtn1+.inner-pan').addClass('selected')
  });
  $('.humcls1').on('click', function(){
     $('.inner-pan').removeClass('selected')
  });
  $('.humbtn2').on('click', function(){
     $('.humbtn2+.inner-pan').addClass('selected')
  });
  $('.humcls2').on('click', function(){
     $('.inner-pan').removeClass('selected')
  });
  $('.humbtn3').on('click', function(){
     $('.humbtn3+.inner-pan').addClass('selected')
  });
  $('.humcls3').on('click', function(){
     $('.inner-pan').removeClass('selected')
  });
  $('.humbtn4').on('click', function(){
     $('.humbtn4+.inner-pan').addClass('selected')
  });
  $('.humcls4').on('click', function(){
     $('.inner-pan').removeClass('selected')
  });
});
