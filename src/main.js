const elements = document.querySelectorAll(".navbar>div")
const navbar = document.querySelector(".navbar")
const headline = document.querySelector(".headline")

const observer = new IntersectionObserver(entries => {
    const entry = entries[0]

    if (entry.isIntersecting) {
        elements.forEach(e => e.classList.remove('dark'))
        navbar.classList.remove('dark')
    }
    else {
        elements.forEach(e => e.classList.add('dark'))
        navbar.classList.add('dark')
    }

})

observer.observe(headline)

const hamburgerButton = document.getElementById("hamburger-button")

hamburgerButton.addEventListener('click', () => {
    navbar.classList.toggle('open')
    elements.forEach(e => e.classList.toggle('open'))
})
