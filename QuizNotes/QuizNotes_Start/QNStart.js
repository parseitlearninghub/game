// let btn_homepage = document.getElementById("btn_homepage");

// let btn_multichoice_next = document.getElementById("submit_QnA_multichoice");


// btn_homepage.addEventListener("click", () => {
//     window.location.href = "../QuizNotes_Homepage/test.html";
//   });
  
// btn_multichoice_next.addEventListener("click", () => {
//   console.log("tstt");
//     window.location.href = "./QNmultichoice_questiondisplay.html";
//   });
const editQuestion = document.getElementById('edit_btn');
const startGame = document.getElementById('btn_start');

editQuestion.addEventListener('click', () => {
    window.location.href = "edit.html";
});
startGame.addEventListener('click', () => {
    window.location.href = "start.html";
});

const titleText = document.getElementById('title-text');
const titleInput = document.getElementById('title-input');
const editButton = document.getElementById('edit-button');
const charCounter = document.getElementById('char-counter');
const wews = document.getElementById('wews');

const maxChars = 35;

// Switch to edit mode
editButton.addEventListener('click', () => {
    titleInput.style.display = 'inline'; // Show the input
    charCounter.style.display = 'block';
    titleInput.value = titleText.textContent; // Populate input with the current title
    charCounter.textContent = `${titleInput.value.length}/${maxChars} characters`;
    titleText.style.display = 'none'; // Hide the span
    titleInput.focus(); // Focus on the input
    editButton.style.display = 'none';
});
titleText.addEventListener('click', () => {
    titleInput.style.display = 'inline'; // Show the input
    charCounter.style.display = 'block';
    titleInput.value = titleText.textContent; // Populate input with the current title
    charCounter.textContent = `${titleInput.value.length}/${maxChars} characters`;
    titleText.style.display = 'none'; // Hide the span
    titleInput.focus(); // Focus on the input
    editButton.style.display = 'none';
});
 titleInput.addEventListener('input', () => {
        if (titleInput.value.length > maxChars) {
            titleInput.value = titleInput.value.substring(0, maxChars);
        }
        charCounter.textContent = `${titleInput.value.length}/${maxChars} characters`;
    });
// Save changes when the input loses focus
titleInput.addEventListener('blur', () => {
    titleText.textContent = titleInput.value || "Untitled Quiz"; // Update the text
    titleInput.style.display = 'none'; // Hide the input
    charCounter.style.display = 'none';
    titleText.style.display = 'inline'; // Show the span
    editButton.style.display = 'inline';
});

// Save changes on Enter key press
titleInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        titleInput.blur(); // Trigger the blur event to save changes
    }
});
