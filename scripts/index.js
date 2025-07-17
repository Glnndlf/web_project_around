const buttonopen = document.querySelector(".main__button_add");
const buttonclose = document.querySelector(".popup__button_close");
const popup = document.querySelector(".popup");
buttonopen.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

buttonclose.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});
