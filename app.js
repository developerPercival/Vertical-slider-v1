const sliderContainer = document.querySelector(".slider-container");

const slideRight = document.querySelector(".right-slide");

const slideLeft = document.querySelector(".left-slide");

const upButton = document.querySelector(".up-button");

const downButton = document.querySelector(".down-button");

const slidesLength = slideRight.querySelectorAll("div").length;

const _UP = "up";

const _DOWN = "down";

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = function (direction) {
  const sliderHeight = sliderContainer.clientHeight;

  //up instruction
  if (direction === "up") {
    //increment
    activeSlideIndex++;

    //Evaluate
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  }

  //down instruction
  if (direction === "down") {
    //decrement
    activeSlideIndex--;

    // Evaluate
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  //Dynamically change the images and text content

  //Right
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;

  //Left
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;

  //This rules will run simultaneously bun in opposite direction
};

upButton.addEventListener("click", () => changeSlide(_UP));
downButton.addEventListener("click", () => changeSlide(_DOWN));
