const popUp = document.querySelector('.popup')

popUp.className = 'hidden'

popUp.classList.add('active')

popUp.addEventListener('click', togglePopUp)


function showPopUp() {
    popUp.classList.remove('hidden')
}

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
+/**
+ * Hides the popup by adding the 'hidden' class to the popUp element.
+ *
+ * @return {void} This function does not return anything.
+ */
<<<<<  bot-6ab914ac-a5cf-405d-9f74-b01b329b0079  >>>>>
function hidePopUp() {
    popUp.classList.add('hidden')
}

function togglePopUp() {
    popUp.classList.toggle('hidden')
}

//add event listener to toggle popup






