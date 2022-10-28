"use strict";
//Selections
const header = document.querySelector("header");
const navigation = document.querySelector(".navigation");
const btnLearnMore = document.querySelector(".button-learn");
const sectionFeature = document.querySelector(".features-section");
const aboutSection = document.querySelector(".about-section");
const navHeight = navigation.getBoundingClientRect().height;
const companyLogo = document.querySelector(".company-logo").firstElementChild;
// console.log(companyLogo);
console.log(navHeight);

//Sticky navigation
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    navigation.classList.add("sticky");
    companyLogo.setAttribute("src", "/img/whitelogoBbg.png");
  } else {
    companyLogo.setAttribute("src", "/img/heuristicslogo.png");
    navigation.classList.remove("sticky");
  }
};

const obs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
obs.observe(header);
// console.log(sectionFeature);
btnLearnMore.addEventListener("click", function (e) {
  sectionFeature.scrollIntoView({
    behavior: "smooth",
  });
  console.log("hello");
});
navigation.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  console.log(id);
  document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
});

// const bodylabel = document.querySelector("body");
// const mq = window.matchMedia("(max-width: 50.25em)");
// console.log(mq.matches);

// const mqTestFunction = function () {
//   if (mq.matches) {
//     console.log("entered if");
//     bodylabel.style.backgroundColor = "red";
//   } else {
//     bodylabel.style.backgroundColor = "green";
//   }
// };

// window.addEventListener("resize", mqTestFunction);

// mq.addEventListener("change", mqTestFunction(mq));
