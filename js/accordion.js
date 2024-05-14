const accordionButton = document.querySelectorAll(
  ".accordion_wrapper-item--btn"
);
const accordionContent = document.querySelector(".accordion_wrapper-content");

accordionButton.forEach((element) => {
  element.addEventListener("click", () => {
    accordionContent.classList.toggle("animateAccordion");
  });
});

console.log(accordionButton);
