const modalOpen = document.querySelector("#modalOpen");
const modalClose = document.querySelector(".modal__close");
const modalWrapper = document.querySelector(".modal__wrapper");
const burgerOpen = document.querySelector(".header__burger");
const burgerClose = document.querySelector(".burger__close");
const burgerMenu = document.querySelector(".burger__menu");
const burgerProduct = document.querySelector("#firstBurgerItem");
const productActive = document.querySelector(".burger__item-active");
const burgerProductClose = document.querySelector(".product__active");

modalClose.addEventListener("click", function (event) {
  if (event.target == modalOpen) {
    modalWrapper.classList.remove("hidden");
  } else {
    modalWrapper.classList.add("hidden");
  }
});

burgerOpen.addEventListener("click", function (event) {
  burgerMenu.classList.remove("hidden");
});
burgerClose.addEventListener("click", function (event) {
  burgerMenu.classList.add("hidden");
});
burgerProduct.addEventListener("click", function () {
  productActive.classList.remove("hidden");
  burgerProduct.classList.add("hidden");
});
burgerProductClose.addEventListener("click", function () {
  productActive.classList.add("hidden");
  burgerProduct.classList.remove("hidden");
});

gsap.registerPlugin(ScrollTrigger);

const timeLine = gsap.timeline({
  default: { duration: 1, ease: "elastic" },
});
timeLine
  .from("#greet__title", {
    opacity: 0,
    y: "100%",
  })
  .from("#greet__text", {
    opacity: 0,
    y: "100%",
  })
  .from("#greet__button", {
    opacity: 0,
    y: "100%",
  });

gsap.from(".journey__column p", {
  duration: 1,
  ease: "elastic",
  stagger: 0.5,
  y: "100%",
  scrollTrigger: ".journey__column",
  opacity: 0,
});
