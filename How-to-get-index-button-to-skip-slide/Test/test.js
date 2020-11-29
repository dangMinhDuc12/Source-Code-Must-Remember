let button = document.querySelectorAll(".button__item");
let slide = document.querySelectorAll(".image__item-img");

for (let i = 0; i < button.length; i++) {
  button[i].onclick = function (e) {
    let buttonActive = e.target;
    let indexButton;
    for (let i = 0; i < button.length; i++) {
      button[i].classList.remove("button__active");
    }
    for (let i = 0; i < slide.length; i++) {
      slide[i].classList.remove("image__item-img--active");
    }

    buttonActive.classList.add("button__active");

    for (
      indexButton = 0;
      (buttonActive = buttonActive.previousElementSibling);
      indexButton++
    ) {}

    slide[indexButton].classList.add("image__item-img--active");
  };
}
