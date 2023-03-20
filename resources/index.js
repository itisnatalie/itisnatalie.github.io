var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add('scrolled');
  } else {
    document.getElementsByTagName("header")[0].classList.remove('scrolled');
  }
};
