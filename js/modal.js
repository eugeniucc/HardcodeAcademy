const popupWindow = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup_overlay");
const popupButton = document.querySelector(".popup_form-btn");

const popupForm = document.querySelector(".popup_form");

popupForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

function showModal() {
  popupWindow.classList.add("popup_show");
  popupOverlay.classList.add("popup_show");
}

let timerId = setTimeout(showModal, 15000);

popupButton.addEventListener("click", () => {
  popupWindow.classList.remove("popup_show");
  popupOverlay.classList.remove("popup_show");
  clearTimeout(timerId);
});

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (
    event.key === "Escape" &&
    popupWindow.classList.contains("popup_show") &&
    popupOverlay.classList.contains("popup_show")
  ) {
    popupWindow.classList.remove("popup_show");
    popupOverlay.classList.remove("popup_show");
  }
});
