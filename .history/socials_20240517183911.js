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

// display popup class attribute when clicking the share button with "share-desktop" id

// Add event listener to close-desktop and close-mobile to hide the popups
// Add event listener to popup-desktop to display popup when clicking the share button
let popupVisible = false;
shareDesktop.addEventListener('click', () => {
    if (!popupVisible) {
        popupDesktop.style.display = 'block';
        popupVisible = true;
    } else {
        popupDesktop.style.display = 'none';
        popupVisible = false;
    }
});