/**Phải gắn cả if else vào để kiểm tra vì nếu chỉ gắn if không thì kiểm tra index và chuyển ảnh
 * sẽ bị chậm nhau 1 nhịp dẫn đến chuyển ảnh rồi mới kiểm tra dẫn đến không chuyển được ảnh. Vì thế
 * phải dùng if else đẻ có thể check index trước rồi mới chuyển ảnh
 */

let button = document.querySelectorAll(".button__item");
let slide = document.querySelectorAll(".image__item-img");

function clearAllClass() {
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("button__active");
  }
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.remove("image__item-img--active");
  }
}

function checkIndexButton(buttonCheck) {
  let indexButton;
  for (
    indexButton = 0;
    (buttonCheck = buttonCheck.previousElementSibling);
    indexButton++
  ) {}

  return indexButton;
}

// Handle auto slide
let autoslide = setInterval(function () {
  //Option 1

  // // Call button activated
  // let buttonActive = document.querySelector(".button__active");

  // // Find index button activated
  // let indexButton = checkIndexButton(buttonActive);

  // if (indexButton < button.length - 1) {
  //   //clear class
  //   clearAllClass();

  //   //Add class to render

  //   button[indexButton + 1].classList.add("button__active");
  //   slide[indexButton + 1].classList.add("image__item-img--active");
  // } else {
  //   clearAllClass();
  //   button[0].classList.add("button__active");
  //   slide[0].classList.add("image__item-img--active");
  // }

  //Option 2
  // Call button activated
  let buttonActive = document.querySelector(".button__active");

  // Find index button activated
  let indexButton = checkIndexButton(buttonActive);
  if (indexButton == button.length - 1) {
    clearAllClass();
    button[0].classList.add("button__active");
    slide[0].classList.add("image__item-img--active");
  } else {
    //clear class
    clearAllClass();

    //Add class to render

    button[indexButton + 1].classList.add("button__active");
    slide[indexButton + 1].classList.add("image__item-img--active");
  }
}, 2000);

//Handle click
for (let i = 0; i < button.length; i++) {
  button[i].onclick = function (e) {
    clearInterval(autoslide);

    //Call button clicked
    let buttonActive = e.target;

    clearAllClass();

    //Add class for button clicked
    buttonActive.classList.add("button__active");

    //  check index button
    let indexButton = checkIndexButton(buttonActive);

    //show slide corresponding with button
    slide[indexButton].classList.add("image__item-img--active");
  };
}
