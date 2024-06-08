


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
