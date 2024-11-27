const openCreateNotes = document.getElementById("button_notes_design");
const openCategory = document.getElementById("popup_container");
const selectMultichoice = document.getElementById("btn_multichoice");
const selectIdentification = document.getElementById("identification");
const display_notes_btn = document.getElementById("display_notes_btn");

openCreateNotes.addEventListener("click", () => {
    openCategory.style.display = "flex";
  });

selectMultichoice.addEventListener("click", () => {
    window.location.href = "../QuizNotes_Create/QNCreate_multichoice.html";
    console.log("asdas");
  });
selectIdentification.addEventListener("click", () => {
    window.location.href = "../QuizNotes_Create/QNCreate_identification.html";
  });

display_notes_btn.addEventListener("click", () => {
    window.location.href = "../QuizNotes_Start/index.html";
  });