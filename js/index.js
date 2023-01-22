/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".main-nav").style.top = "0";
  } else {
    document.querySelector(".main-nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
