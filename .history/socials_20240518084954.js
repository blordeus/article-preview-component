const popUp = document.querySelector('.popup')

popUp.className = 'hidden'

popUp.classList.add('active')

a.addEventListener('click', togglePopUp)


function showPopUp() {
    popUp.classList.remove('hidden')
}

function hidePopUp() {
    popUp.classList.add('hidden')
}

function togglePopUp() {
    popUp.classList.toggle('hidden')
}







