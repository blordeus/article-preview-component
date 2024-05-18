const popUp = document.querySelector('.popup')

popUp.className = 'hidden'

popUp.classList.add('active')

popUp.addEventListener('click', togglePopUp)


function showPopUp() {
    popUp.classList.remove('hidden')
}

/**
 * Hides the popup by adding the 'hidden' class to the popUp element.
 *
 * @return {void} This function does not return anything.
 */
function hidePopUp() {
    popUp.classList.add('hidden')
}

function togglePopUp() {
    popUp.classList.toggle('hidden')
}

//add event listener to toggle popup






