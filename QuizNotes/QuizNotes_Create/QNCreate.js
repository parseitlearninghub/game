const btn_homepage = document.getElementById("btn_homepage");

const btn_multichoice_next = document.getElementById("submit_QnA_multichoice");

// let btn_uploadnotes = document.getElementById("btn_upload");

btn_homepage.addEventListener("click", () => {
    window.location.href = "../QuizNotes_Homepage/test.html";
});
  
btn_multichoice_next.addEventListener("click", () => {
    window.location.href = "./QNmultichoice_questiondisplay.html";
});

// btn_uploadnotes.addEventListener("click", () => {
//     window.location.href = "./QNmultichoice_questiondisplay.html";
// });
// btn_addchoices.addEventListener("click", () => {
//   console.log("asdasd");
//   window.location.href = "./QNCreate_multichoice.html";
// });

