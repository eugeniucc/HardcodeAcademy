const popapWindow = document.querySelector(".popap");
const popapOverlay = document.querySelector(".popap_overlay");
const popapButton = document.querySelector(".popap_form-btn");

function showModal() {
  popapWindow.classList.add("popap_show");
  popapOverlay.classList.add("popap_show");
}

let timerId = setTimeout(showModal, 1000);

popapButton.addEventListener("click", () => {
  popapWindow.classList.remove("popap_show");
  popapOverlay.classList.remove("popap_show");
  clearTimeout(timerId);
});

popapOverlay.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    popapWindow.classList.contains("popap_show") &&
    popapOverlay.classList.contains("popap_show")
  ) {
    popapWindow.classList.remove("popap_show");
    popapOverlay.classList.remove("popap_show");
  }
});
