const popUp = document.querySelector('.popup')

popUp.classList.add('active')


popUp.addEventListener('click', togglePopUp)

popUp.addEventListener('click', hidePopUp)

function showPopUp() {
    popUp.classList.remove('hidden')
}

function hidePopUp() {
    popUp.classList.add('hidden')
}

function togglePopUp() {
    popUp.classList.toggle('hidden')
}

//add event listener to toggle popup






