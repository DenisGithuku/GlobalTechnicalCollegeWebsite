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
  revealer()
};

const revealer = () => {
  // reference to items to be revealed
  const revealItems = document.querySelectorAll('.reveal')

  revealItems.forEach(revealItem => {
    // get window height according to the viewport
    const windowHeight = window.innerHeight

    // get how far the item is from the top
    const elementHeight = revealItem.getBoundingClientRect().top

    //set the height at which the element should be revealed
    const revealDistance = 50

    if (elementHeight < windowHeight - revealDistance) {
      revealItem.classList.add('active')
    } else {
      revealItem.classList.remove('active')
    }
  })
}

//check the scroll on page load
revealer()
