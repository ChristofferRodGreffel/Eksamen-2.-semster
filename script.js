// Splide

if (document.title === "Sportsrideklubben Silkeborg") {
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
}

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

// Burgermenu mobile

const burger = document.querySelector(".fa-bars");
const menu = document.querySelector("#burgermenu");
const category = document.querySelectorAll(".category");

category.forEach((cat) => {
  const catContent = cat.querySelector(".cat-content");
  catContent.addEventListener("click", (el) => {
    el.stopPropagation();
  });
  const catIcon = cat.querySelector("i");
  cat.addEventListener("click", (el) => {
    let catHeight = catContent.scrollHeight;
    let currentHeight = catContent.clientHeight;
    if (currentHeight == 0) {
      catContent.style.maxHeight = `${catHeight}px`;
    } else {
      catContent.style.maxHeight = `0px`;
    }
    let currentIcon = catIcon.getAttribute("class");
    if (currentIcon == "fa-solid fa-plus") {
      catIcon.setAttribute("class", "fa-solid fa-minus");
    } else {
      catIcon.setAttribute("class", "fa-solid fa-plus");
    }
  });
});

let isOpen = false;

burger.addEventListener("click", () => {
  if (!isOpen) {
    menu.style.transform = "translateY(0px)";
    isOpen = true;
  } else {
    let menuHeight = menu.clientHeight;
    menu.style.transform = `translateY(-${menuHeight}px)`;
    isOpen = false;
  }
});

// HOLD SIDE FILTRE KNAP

const filterKnap = document.querySelector("filter-knap");
const filterMenu = document.querySelector("filter-menu");
const filterCategory = document.querySelectorAll(".filter-category");

filterCategory.forEach((filterCat) => {
  const filterCatContent = filterCat.querySelector(".filter-cat-content");
  filterCatContent.addEventListener("click", (el) => {
    el.stopPropagation();
  });
  filterCat.addEventListener("click", (el) => {
    let catHeight = filterCatContent.scrollHeight;
    let currentHeight = filterCatContent.clientHeight;
    if (currentHeight == 0) {
      filterCatContent.style.maxHeight = `${catHeight}px`;
    } else {
      filterCatContent.style.maxHeight = `0px`;
    }
    let currentIcon = catIcon.getAttribute("class");
    if (currentIcon == "fa-solid fa-plus") {
      catIcon.setAttribute("class", "fa-solid fa-minus");
    } else {
      catIcon.setAttribute("class", "fa-solid fa-plus");
    }
  });
});

let filterisOpen = false;

filterKnap.addEventListener("click", () => {
  if (!isOpen) {
    filterMenu.style.transform = "translateY(0px)";
    isOpen = true;
  } else {
    let filterMenuHeight = filterMenu.clientHeight;
    filterMenu.style.transform = `translateY(-${filterMenuHeight}px)`;
    isOpen = false;
  }
});
