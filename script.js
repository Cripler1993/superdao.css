const modalOpen = document.querySelector("#modalOpen");
const modalClose = document.querySelector(".modal__close");
const modalWrapper = document.querySelector(".modal__wrapper");

// modalOpen.onclick = function () {
//   modalWrapper.classList.remove("hidden");
// };

modalClose.addEventListener("click", function (event) {
  if (event.target == modalOpen) {
    modalWrapper.classList.remove("hidden");
  } else {
    modalWrapper.classList.add("hidden");
  }
});

// eventlistner. event(на вход), event.target != modalOpen
