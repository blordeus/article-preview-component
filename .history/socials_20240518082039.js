const popUp = document.querySelector('.popup')

const popUpText = document.querySelector('.popup-text')

const popupBtn = document.querySelector('.popup-btn')

popup.addEventListener('click', () => {

    popUp.classList.toggle('popup-active')

    if (popUp.classList.contains('popup-active')) {

        popUpText.textContent = 'Thanks for sharing!'

    } else {

        popUpText.textContent = 'Share'

    }

})

