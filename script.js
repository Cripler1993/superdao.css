const modalOpen = document.querySelector("#modalOpen");
const modalClose = document.querySelector(".modal__close");
const modalWrapper = document.querySelector(".modal__wrapper");

modalOpen.onclick = function () {
  modalWrapper.classList.remove("hidden");
};

modalClose.addEventListener("click", function () {
  modalWrapper.classList.add("hidden");
});
