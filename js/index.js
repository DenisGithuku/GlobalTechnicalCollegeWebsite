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
    const navbar = document.querySelector('.navbar')
    if (width <= 1000) {
        toggle.classList.remove('hidden')
        navbar.classList.add('hidden')
        document.querySelector('.fa-bars').addEventListener('click', toggleNavbar)
    } else {
        toggle.classList.add('hidden')
        navbar.classList.remove('hidden')
    }
    console.log(width)
}

const toggleNavbar = () => {
    const navbar = document.querySelector('.navbar')
    if (navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden')
    } else {
        navbar.classList.add('hidden')
    }
}

// document.querySelectorAll('.main-nav-link').forEach(navLink => {
//   navLink.addEventListener('click', toggleNavbar)
// })


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

const sliderContentIndex = 0
let currentSliderContent = 0
const setSlideAnimation = () => {
    const sliderContent = document.querySelectorAll('.slider-content')
    sliderContent.forEach((slider, index) => {
        if (currentSliderContent === sliderContent.length - 1) {
            currentSliderContent = 0
        } else {
            currentSliderContent++
        }
        slider.style.animationDelay = `${index * slideAnimationTimeout + 2000}s`
    })
}

setSlideAnimation()