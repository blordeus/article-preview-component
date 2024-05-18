// get popup-desktop element id
const popupDesktop = document.getElementById('popup-desktop');

// get popup-mobile element id
const popupMobile = document.getElementById('popup-mobile');

// get close-desktop element id
const closeDesktop = document.getElementById('close-desktop');

// get close-mobile element id
const closeMobile = document.getElementById('close-mobile');

// get share-desktop element id
const shareDesktop = document.getElementById('share-desktop');

// get share-mobile element id
const shareMobile = document.getElementById('share-mobile');

// display popup class attribute when clicking the share button with share-desktop" id


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
