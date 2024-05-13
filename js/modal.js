const popapWindow = document.querySelector(".popap");

const popapOverlay = document.querySelector(".popap_overlay");

const popapButton = document.querySelector(".popap_form-btn");

// открыть по таймеру 15сек 1 раз

function showModal() {
  popapWindow.classList.add("popap_show");
  popapOverlay.classList.add("popap_show");
}
setTimeout(showModal, 1000);

popapButton.addEventListener("click", () => {
  popapWindow.classList.remove("popap_show");
  popapOverlay.classList.remove("popap_show");
});
