"use strict";
//Selections
const header = document.querySelector("header");
const navigation = document.querySelector(".navigation");
const btnLearnMore = document.querySelector(".button-learn");
const sectionFeature = document.querySelector(".features-section");
const aboutSection = document.querySelector(".about-section");
const navHeight = navigation.getBoundingClientRect().height;
const companyLogo = document.querySelector(".company-logo").firstElementChild;
const bodyLabel = document.querySelector("body");
const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close");
const navText = document.querySelector(".nav-texts");
// console.log(companyLogo);

//Universal mechanism

// Sticky navigation
const stickyNav = function (entries) {
  const [entry] = entries;

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
});
navigation.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target === openMenu || e.target === closeMenu) return;
  const id = e.target.getAttribute("href");
  console.log(id);
  document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
  if (closeMenu.classList.contains("active")) {
    openMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    navText.style.left = `100%`;
  }
});

//for media Queries

const mq = window.matchMedia("(max-width: 50.25em)");
if (mq.matches) {
  openMenu.classList.add("active");
  menu.addEventListener("click", function (e) {
    openMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    if (closeMenu.classList.contains("active")) {
      navText.style.left = 0;
    } else navText.style.left = `100%`;
  });
}
// function isOverflown(element) {
//   if (element.scrollHeight > element.clientHeight) return element;
//   else return "";
// }
// const arr = [...document.getElementsByTagName("div")];
// arr.forEach(function (el) {
//   console.log(isOverflown(el));
// });
// console.log();
// console.log(isOverflown(document.querySelector("main")));

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
