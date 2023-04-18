/* Get reference to the navbar */
const navbar = document.querySelector(".main-nav");

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollPos = window.scrollY;

/* Get the current navbar scroll offset */
const navbarOffset = navbar.offsetTop;

window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > navbarOffset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
    prevScrollPos = currentScrollPos;
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

window.onresize = () => {
    if (window.innerWidth < 768) {
        const revealItem = document.querySelector('.background-info')
        revealItem.classList.toggle("reveal")
        revealItem.classList.toggle('active')
    }
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


const toggleNavbar = () => {
    document.querySelector('.navbar').classList.toggle('hidden')
}


const menuIcon = document.querySelector('.fa-bars')
menuIcon.addEventListener('click', () => {
    toggleNavbar()
})

document.querySelectorAll('.main-nav-link').forEach(navLink => {
    navLink.addEventListener('click', toggleNavbar)
})

document.querySelectorAll('.dropdown-item-link').forEach(dropDownLink => {
    dropDownLink.addEventListener('click', toggleNavbar)
})


let currentSlide = 0
const slides = document.querySelectorAll('.slide')
const maxSlide = slides.length
const slideAnimationTimeout = 8000

const goToSlide = (slideIndex) => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`
    })
    setTimeout(() => {
        if (currentSlide === maxSlide - 1) {
            currentSlide = 0
        } else {
            currentSlide++
        }
        goToSlide(currentSlide)
    }, slideAnimationTimeout)
}

goToSlide(0)