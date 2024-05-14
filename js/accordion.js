const accordionButton = document.querySelectorAll(
  ".accordion_wrapper-item--btn"
);
const accordionContent = document.querySelector(".accordion_wrapper-content");

const accrodionList = document.querySelector(
  ".accordion_wrapper-content--list"
);

const accordionArrow = document.querySelector(".accordion_wrapper-item--span");

accordionButton.forEach((element) => {
  element.addEventListener("click", () => {
    accordionArrow.classList.toggle("animateAccordionRotate");
    accordionContent.classList.toggle("animateAccordionBg");
    accrodionList.classList.toggle("animateAccordionList");
  });
});
