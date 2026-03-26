const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.modal-click');

const closeButton = document.querySelector('.modal-close');
const popupContainer = document.getElementById("popupContainer");

btnOpenModal.addEventListener("click", () => {
  popupContainer.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  popupContainer.style.display = "none";
});