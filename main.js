const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

// ~~~~~~~~~~~~~~~~~~~~~ TOGGLE MENU ~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~  MENU <SHOW> ~~~~~

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ~~~~  MENU HIDDEN ~~~~~~

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ~~~~ REMOVE MENU MOBILE ~~~

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

// ~~~~~~~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~~~~~~~~~~

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 350
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// ~~~~~~~~~~~~~~~~~~~~~ SCROLL SECTION ACTIVE LINK    ~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~ SHOW SCROLL UP  ~~~~~~~~~~~~~~~~~~~~~~~~

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// ~~~~~~~~~~~~~~~~~~~~~ DARK LIGHT THEME  ~~~~~~~~~~~~~~~~~~~~~~~~

const themeButton = document.getElementById("theme-button");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeButton.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  document.body.classList.add("dark-theme");
  themeButton.classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  document.body.classList.remove("dark-theme");
  themeButton.classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("mode", "light");
}

// ~~~~~~~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~~~~~~~~~~
