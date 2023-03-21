const header = document.querySelector("nav");
const sectionOne = document.querySelector(".hero");

// const sectionOneOptions = {
//     rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function(
//     entries,
//     sectionOneObserver) {

//      entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             header.classList.add("nav-scrolled");
//         } else {
//             header.classList.remove("nav-scrolled");
//         }
//      })
// }, sectionOneOptions)

// sectionOneObserver.observe(sectionOne);
var scrollTrigger = 175;
window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    header.classList.add("nav-scrolled");
    console.log("working");
  } else {
    header.classList.remove("nav-scrolled");
  }
};
