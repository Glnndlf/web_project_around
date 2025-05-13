const OpenPoput = document.querySelector("#Open-Poput");
const ClosePoput = document.querySelector("#Close-Popup");
const Popup = document.querySelector("#editProfilePopup");

OpenPopup.addEventListener("click", () => {
  Popup.showModal();
});

ClosePoput.addEventListener("click", () => {
  Popup.close();
});

let formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.getElementById("popup-name");
  let occupationInput = document.getElementById("popup-about");

  const newName = nameInput.value;
  const NewOccupation = occupationInput.value;

  const profileName = document.querySelector(".profile__name");
  const profileOccupation = document.querySelector(".profile__occupation");

  profileName.textContent = newName;
  profileOccupation.textContent = NewOccupation;

  const popup = document.getElementById("editProfilePopup");
  popup.close();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
