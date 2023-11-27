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

gsap.from("#works__title", {
  delay: 2,
  duration: 1,
  ease: "power1.out",
  opacity: 0,
  scrollTrigger: ".works__with-item",
});
gsap.from(".works__with-text", {
  delay: 1.5,
  duration: 1,
  ease: "power1.out",
  opacity: 0,
  y: "100%",
  scrollTrigger: ".works__with-item",
});
gsap.from("#works__item-3", {
  duration: 0.7,
  ease: "power1.out",
  x: "-100%",
  opacity: 0,
  scrollTrigger: ".works__with-item",
});
gsap.from("#works__item-4", {
  duration: 0.7,
  ease: "power1.out",
  x: "100%",
  opacity: 0,
  scrollTrigger: ".works__with-item",
});
gsap.from("#works__item-2", {
  delay: 0.5,
  duration: 0.7,
  ease: "power1.out",
  x: "-100%",
  opacity: 0,
  scrollTrigger: ".works__with-item",
});
gsap.from("#works__item-5", {
  delay: 0.5,
  duration: 0.7,
  ease: "power1.out",
  x: "100%",
  opacity: 0,
  scrollTrigger: ".works__with-item",
});
gsap.from("#works__item-1", {
  delay: 1,
  duration: 0.7,
  ease: "power1.out",
  x: "-100%",
  opacity: 0,
  scrollTrigger: ".works__with-item",
});
gsap.from("#works__item-6", {
  delay: 1,
  duration: 0.7,
  ease: "power1.out",
  x: "100%",
  opacity: 0,
  scrollTrigger: ".works__with-item",
});
gsap.from(".press__item", {
  duration: 1.5,
  stagger: 0.5,
  scale: 0,
  scrollTrigger: ".press__item",
});
// scrollTrigger после defaults

const newTimeLine = gsap.timeline({
  default: {
    duration: 1.5,
  },
  scrollTrigger: {
    trigger: "#podcasts__item-1",
  },
});
newTimeLine
  .from("#podcasts__item-1", {
    scale: 0,
  })
  .from("#podcasts__item-2", {
    scale: 0,
  })
  .from("#podcasts__item-3", {
    scale: 0,
  });

const anotherTimeLine = gsap.timeline({
  default: {
    duration: 1,
    ease: "power1.inOut",
  },
  scrollTrigger: {
    trigger: "#project__btn-1",
  },
});
anotherTimeLine
  .from("#project__btn-1", {
    delay: 1,
    opacity: 0,
    y: "-100%",
  })
  .from("#project__btn-2", {
    opacity: 0,
    y: "100%",
  })
  .from("#project__btn-3", {
    opacity: 0,
    y: "-100%",
  })
  .from("#project__btn-4", {
    opacity: 0,
    y: "100%",
  })
  .from("#project__btn-5", {
    opacity: 0,
    y: "-100%",
  })
  .from("#project__btn-6", {
    opacity: 0,
    y: "100%",
  })
  .from("#project__btn-7", {
    opacity: 0,
    y: "-100%",
  });
