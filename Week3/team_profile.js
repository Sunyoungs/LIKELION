const modal = document.querySelectorAll('.modal');
const btnOpenModal = document.querySelectorAll('.modal-click');
const closeButton = document.querySelectorAll('.modal-close');

btnOpenModal.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modal[i].style.display = "flex";
    btn.style.cssText = 'border-color: transparent';
  });
});

closeButton.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modal[i].style.display = "none";
    btnOpenModal[i].style.cssText = 'border-color: black';
  });
});