const imageContainerEl = document.querySelector(".slider__container");
const textElements = document.querySelectorAll(".slider__container__item span");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let degrees = 0;
let timer;
let index = textElements.length - 1;

textElements[index].classList.add("show");

prevEl.addEventListener("click", () => {
  degrees = degrees + 45;
  clearTimeout(timer);
  moveSlider();

  hideText();

  index--;
  checkIndex();
  displayText();
});

nextEl.addEventListener("click", () => {
  degrees = degrees - 45;
  clearTimeout(timer);
  moveSlider();

  hideText();

  index++;
  checkIndex();
  displayText();
});

function moveSlider() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;

  timer = setTimeout(() => {
    degrees = degrees - 45;

    moveSlider();

    hideText();

    index++;
    checkIndex();
    displayText();
  }, 2850);
}

moveSlider();

function hideText() {
  textElements.forEach((text) => {
    text.classList.remove("show");
  });
}

function checkIndex() {
  if(index > textElements.length - 1) {
    index = 0;
  }
  else if(index < 0) {
    index = textElements.length - 1;
  }
}

function displayText() {
  textElements[index].classList.add("show");
}