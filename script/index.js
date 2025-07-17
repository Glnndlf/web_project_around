let buttonEdit = document.querySelector(".main__button_edit");
let buttonClose = document.querySelector(".popup__button_close");
let popup = document.querySelector(".popup");
let form = document.querySelector(".popup__container");
let inName = document.querySelector(".main__text_name");
let inAbout = document.querySelector(".main__text_about");
let inpName = document.querySelector(".popup__input_name");
let inpAbout = document.querySelector(".popup__input_about");

function openEdit() {
  inpName.value = inName.textContent;
  inpAbout.value = inAbout.textContent;
  popup.classList.toggle("popup_opened");
}

buttonEdit.addEventListener("click", openEdit);
buttonClose.addEventListener("click", openEdit);

function saveChange(e) {
  e.preventDefault();
  inName.textContent = inpName.value;
  inAbout.textContent = inpAbout.value;
  openEdit();
}

form.addEventListener("submit", saveChange);
