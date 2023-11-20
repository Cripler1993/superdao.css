const modalOpen = document.querySelector("#modalOpen");
const modalClose = document.querySelector(".modal__close");
const modalWrapper = document.querySelector(".modal__wrapper");
const burgerOpen = document.querySelector(".header__burger");
const burgerClose = document.querySelector(".burger__close");
const burgerMenu = document.querySelector(".burger__menu");

modalClose.addEventListener("click", function (event) {
  if (event.target == modalOpen) {
    modalWrapper.classList.remove("hidden");
  } else {
    modalWrapper.classList.add("hidden");
  }
});

// burgerOpen.onclick = function () {
//   burgerMenu.classList.remove("hidden");
// };

burgerOpen.addEventListener("click", function (event) {
  burgerMenu.classList.remove("hidden");
});
burgerClose.addEventListener("click", function (event) {
  burgerMenu.classList.add("hidden");
});

// eventlistner. event(на вход), event.target != modalOpen
