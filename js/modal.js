const popupWindow = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup_overlay");
const popupButton = document.querySelector(".popup_form-btn");
const popupForm = document.querySelector(".popup_form");
const userName = document.getElementById("name");
const userTel = document.getElementById("tel");
const userEmail = document.getElementById("email");

const sendUserData = document.querySelector(".popup_form-wrapper--btn");

const regex = /[\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

const regexTel = /^\d+$/;

const regEmail =
  /^[\w-]+(\.[\w-]+)*@(gmail\.com|yandex\.ru|mail\.ru|ukr\.net)$/;

popupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    !regex.test(userName.value) &&
    regexTel.test(userTel.value) &&
    regEmail.test(userEmail.value)
  ) {
    sendUserData.textContent = "Отправлено";
    setTimeout(() => {
      sendUserData.textContent = "Отправить";
    }, 2000);
    userName.value = "";
    userName.classList.remove("error");
    userTel.value = "";
    userTel.classList.remove("error");
    userEmail.value = "";
    userEmail.classList.remove("error");
  } else {
    userName.value = "";
    userName.classList.add("error");
    userName.setAttribute(
      "placeholder",
      "Поле должно быть заполнено корректно"
    );
    userTel.value = "";
    userTel.classList.add("error");
    userTel.setAttribute("placeholder", "Поле должно содержать только цифры");
    userEmail.value = "";
    userEmail.classList.add("error");
    userEmail.setAttribute("placeholder", "Введите корректный email");
  }
});

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
