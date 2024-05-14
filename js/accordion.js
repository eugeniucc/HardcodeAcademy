const accordionButton = document.querySelectorAll(
  ".accordion_wrapper-item--btn"
);
const accordionContent = document.querySelectorAll(
  ".accordion_wrapper-content"
);

const accrodionList = document.querySelectorAll(
  ".accordion_wrapper-content--list"
);

const accordionArrow = document.querySelectorAll(
  ".accordion_wrapper-item--span"
);

accordionButton.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    if (event.target === element || element.contains(event.target)) {
      accordionArrow[index].classList.toggle("animateAccordionRotate");
      accordionContent[index].classList.toggle("animateAccordionBg");
      accrodionList[index].classList.toggle("animateAccordionList");
      console.log(event.target);
    }
  });
});
