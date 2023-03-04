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
  revealBackground()
};

const revealBackground = () => {
  // reference to items to be revealed
  const revealItems = document.querySelectorAll('.reveal')

  revealItems.forEach(revealItem => {
    // get window height according to the viewport
    const windowHeight = window.innerHeight

    // get how far the item is from the top
    const elementHeight = revealItem.getBoundingClientRect().top

    //set the height at which the element should be revealed
    const revealDistance = 200

    if (elementHeight < windowHeight - revealDistance) {
      revealItem.classList.add('active')
    } else {
      revealItem.classList.remove('active')
    }
  })
}


//reveal containers on page load
window.onload = () => {
  revealBackground()
  revealCoreInfoContainers()
}

const revealCoreInfoContainers = () => {
  const coreInfoContainers = document.querySelectorAll('.core-info-container-reveal')

  coreInfoContainers.forEach(coreInfoContainer => {
    //get ref to core into containers

    // get ref to the viewport width
    const windowWidth = window.innerWidth

    // set the distance required for reveal
    const revealDistance = 50

    //calculate left of container
    const leftOfContainer = coreInfoContainer.getBoundingClientRect().left
    if (leftOfContainer < windowWidth - revealDistance) {
      coreInfoContainer.classList.add('core-info-active')
    } else {
      coreInfoContainer.classList.remove('core-info-active')
    }
    
  })
}


window.onresize = (event) => {
  const width = event.target.innerWidth;
  const toggle = document.querySelector('.fa-bars')
  if (width <= 700) {
    toggle.classList.remove('hidden')
  } else {
    toggle.classList.add('hidden')
  }
  console.log(width)
}