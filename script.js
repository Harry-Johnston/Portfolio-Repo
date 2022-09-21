const scrollElements = document.querySelectorAll('.js-scroll')
const scrollOffset = 100
let throttleBool = false

scrollElements.forEach((element) => {
    element.style.opacity = 0
})

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset));
};

displayScrollElement = (element) => {
    element.classList.add('scrolled')
}

const handleScrollAnimation = () => {
    scrollElements.forEach((element) => {
        if(elementInView(element, scrollOffset)) {
            displayScrollElement(element)
        }
    })
}

const throttle = (callback, time) => {
    if (throttleBool) return
    throttleBool = true
    setTimeout(() => {
        callback()
        throttleBool = false
    }, time)
}

window.addEventListener('scroll', () => {
    throttle(handleScrollAnimation, 250)
})
