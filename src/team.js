const teamFlipButton = document.getElementById("team-flip-button")

const teamFlip = document.getElementById("team-flip")

teamFlipButton.addEventListener('click', () => {
    teamFlip.classList.toggle("flipped")
})
