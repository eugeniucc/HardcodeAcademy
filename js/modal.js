const popapWindow = document.querySelector(".popap");

const popapOverlay = document.querySelector(".popap_overlay");

const popapButton = document.querySelector(".popap_form-btn");

// открыть по таймеру 15сек 1 раз

function showModal() {
  popapWindow.classList.remove("popap_hidden");
  popapOverlay.classList.remove("popap_hidden");
}
setTimeout(showModal, 5000);

popapButton.addEventListener("click", function (event) {
  event.stopPropagation();
  popapWindow.classList.toggle("popap_hidden");
  popapOverlay.classList.toggle("popap_hidden");
});

// document.addEventListener("keydown", function (event) {
//   if (event.key == "Escape" && !modalWindow.classList.contains("hidden")) {
//     overlay.classList.toggle("hidden");
//     modalWindow.classList.toggle("hidden");
//   }
// });
