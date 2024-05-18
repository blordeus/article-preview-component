// get popup-desktop element id
const popupDesktop = document.querySelector('#popup-desktop');

// get popup-mobile element id
const popupMobile = document.querySelector('#popup-mobile');

// get close-desktop element id
const closeDesktop = document.querySelector('#close-desktop');

// get close-mobile element id
const closeMobile = document.getElementById('#close-mobile');

// get share-desktop element id
const shareDesktop = document.querySelector('#share-desktop');

// get share-mobile element id
const shareMobile = document.getElementById('share-mobile');

// display popup when clicking the share button
shareDesktop.addEventListener('click', () => {
    popupDesktop.style.display = 'block';
    //toggle to display none when clicked again
    popupDesktop.addEventListener('click', () => {
        popupDesktop.style.display = 'none';
    });
});

// display popup when clicking the share button
shareMobile.addEventListener('click', () => {
    popupMobile.style.display = 'block';
});

// close popup when clicking the close button
closeDesktop.addEventListener('click', () => {
    popupDesktop.style.display = 'none';
});

// close popup when clicking the close button
closeMobile.addEventListener('click', () => {
    popupMobile.style.display = 'none';
});
