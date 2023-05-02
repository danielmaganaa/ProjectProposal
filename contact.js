const toggleButton = document.getElementsByClassName('button')[0]
const navigationLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navigationLinks.classList.toggle('active')
});



