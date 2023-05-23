// Splide
let slideAmount;

function checkWidth() {
  if (window.innerWidth > 1500) {
    slideAmount = 4;
  } else if (window.innerWidth > 1080) {
    slideAmount = 3;
  } else if (window.innerWidth > 850) {
    slideAmount = 2;
  } else {
    slideAmount = 1;
  }
  return slideAmount;
}

let splide = new Splide(".splide", {
  type: "loop",
  perPage: checkWidth(),
});

splide.mount();

// Header collapse
const logo = document.querySelector("nav img");
const header = document.querySelector("header");

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 500) {
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
      logo.style.width = "125px";
      logo.style.top = "60px";
    } else {
      header.style.top = "-40px";
      logo.style.width = "90px";
      logo.style.top = "55px";
    }
    prevScrollpos = currentScrollPos;
  }
};
