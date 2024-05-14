const accordionButton = document.querySelectorAll(
  ".accordion_wrapper-item--btn"
);
const accordionContent = document.querySelector(".accordion_wrapper-content");

const accrodionList = document.querySelector(
  ".accordion_wrapper-content--list"
);

accordionButton.forEach((element) => {
  element.addEventListener("click", () => {
    accordionContent.classList.toggle("animateAccordion");
    accrodionList.classList.toggle("animateAccordion");
  });
  element.addEventListener("click", () => {
    accordionContent.classList.toggle("animateAccordion");
  });
});

console.log(accordionButton);
