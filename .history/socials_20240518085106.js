const popUp = document.querySelector('.popup')
const button = document.querySelector('a')

popUp.className = 'hidden'

popUp.classList.add('active')

button.addEventListener('click', togglePopUp)


function showPopUp() {
    popUp.classList.remove('hidden')
}

function hidePopUp() {
    popUp.classList.add('hidden')
}

function togglePopUp() {
    popUp.classList.toggle('hidden')
}







