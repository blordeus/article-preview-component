const popUp = document.querySelector('.popup')
const button = document.querySelector('a')

popUp.className = 'hidden'

popUp.classList.add('active')

a.addEventListener('click', function(e) {
    showPopUp(e);
    togglePopUp(e);
  });

function showPopUp() {
    popUp.classList.remove('hidden')
}

function togglePopUp() {
    popUp.classList.toggle('hidden')
}







