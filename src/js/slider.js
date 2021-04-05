let slideIndex = 1;

const slides = document.querySelectorAll(".section-review-user-slider-item");
const rightArrow = document.querySelector(".section-review-user-slider-setting-control__right");
const leftArrow = document.querySelector(".section-review-user-slider-setting-control__left");

const changeSlid = (i) => {
  
}

const nextSlid = () => {
  changeSlid(slideIndex += 1);
}

const prevSlid = () => {
  changeSlid(slideIndex -= 1);
}

rightArrow.addEventListener("click", nextSlid);
leftArrow.addEventListener("click", prevSlid);