/* Get reference to the navbar */
const navbar = document.querySelector(".main-nav");

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;

/* Get the current navbar scroll offset */
const navbarOffset = navbar.offsetTop;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > navbarOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  prevScrollpos = currentScrollPos;
};
