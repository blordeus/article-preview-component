const popUp = document.querySelector('.popup')
const button = document.querySelector('a')

popUp.className = 'hidden'

popUp.classList.add('active')

a.addEventListener('click', function(e) {
    showPopUp(e);
  });

function showPopUp() {
    popUp.classList.remove('hidden')
}

function hidePopUp() {
    popUp.classList.add('hidden')
}

function togglePopUp() {
    popUp.classList.toggle('hidden')
}







