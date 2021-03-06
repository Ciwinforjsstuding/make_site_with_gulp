let slideIndex = 1;

const urlLeftArrow = "../img/leftArrow.svg";
const urlRightArrow = "../img/rightArrow.svg";

const slides = document.querySelectorAll(".section-review-user-slider-item");
const rightArrow = document.querySelector(".section-review-user-slider-setting-control__right");
const leftArrow = document.querySelector(".section-review-user-slider-setting-control__left");
const circlesIndexSlide = document.querySelectorAll(".index-circle-passive");

const addAnimationOnCircle = (i) => {
  circlesIndexSlide[i].classList.remove("index-circle-passive");
  circlesIndexSlide[i].classList.add("animation-active-circle");
  circlesIndexSlide[i].classList.add("index-circle-active");
}

const closeAnimationCircle = () => {
  circlesIndexSlide.forEach(circleIndex => {
    if (circleIndex.classList.contains("animation-active-circle")) {
      circleIndex.classList.remove("animation-active-circle");
      circleIndex.classList.remove("index-circle-active");
      circleIndex.classList.add("animation-passev-circle");
      circleIndex.classList.add("index-circle-passive");
      setTimeout(() => circleIndex.classList.remove("animation-passev-circle"), 1500);
    }
  });
}



const changeSlid = (i) => {
  if (i > slides.length)
    slideIndex = 1;
  if (i < 1) 
    slideIndex = slides.length;
  slides.forEach(slide => {
    slide.classList.remove("card-border-active");
  });
  closeAnimationCircle();
  addAnimationOnCircle(slideIndex -1);
  slides[slideIndex -1].classList.add("card-border-active");
}

const nextSlid = (event) => {
  const btn = event.target;
  changeSlid(slideIndex += 1);
  if (btn.classList.contains("arrow-right")) {
    btn.src = urlRightArrow;
    btn.classList.remove("arrow-right");
    btn.classList.add("arrow_active");
    return;
  }
  btn.src = urlLeftArrow;
  btn.classList.add("arrow-right");
  btn.classList.remove("arrow_active");
}

const prevSlid = (event) => {
  const btn = event.target;
  
  changeSlid(slideIndex -= 1);
  if (btn.classList.contains("arrow_active-left")) {
    btn.src = urlLeftArrow;
    btn.classList.add("arrow");
    btn.classList.remove("arrow_active-left");
    return;
  }
  btn.src = urlRightArrow;
  btn.classList.add("arrow_active-left");
  btn.classList.remove("arrow");
}

leftArrow.addEventListener("click", prevSlid);
rightArrow.addEventListener("click", nextSlid);

changeSlid(slideIndex);