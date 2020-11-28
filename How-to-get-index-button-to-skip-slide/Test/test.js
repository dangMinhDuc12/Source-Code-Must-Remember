let button = document.querySelectorAll("li");
console.log(button);

for (let i = 0; i < button.length; i++) {
  button[i].onclick = function (e) {
    for (let i = 0; i < button.length; i++) {
      button[i].classList.remove("active");
    }
    let buttonActive = e.target;
    buttonActive.classList.add("active");

    let indexButton;

    for (
      indexButton = 0;
      (buttonActive = buttonActive.previousElementSibling);
      indexButton++
    ) {}
    console.log(indexButton);
  };
}
