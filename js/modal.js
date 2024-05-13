const popupWindow = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup_overlay");
const popupButton = document.querySelector(".popup_form-btn");

function showModal() {
  popupWindow.classList.add("popup_show");
  popupOverlay.classList.add("popup_show");
}

let timerId = setTimeout(showModal, 1000);

popupButton.addEventListener("click", () => {
  popupWindow.classList.remove("popup_show");
  popupOverlay.classList.remove("popup_show");
  clearTimeout(timerId);
});

popupOverlay.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    popupWindow.classList.contains("popup_show") &&
    popupOverlay.classList.contains("popup_show")
  ) {
    popupWindow.classList.remove("popup_show");
    popupOverlay.classList.remove("popup_show");
  }
});
