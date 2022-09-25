// HTML buttons stored into variables
const newNoteButton = document.querySelector("#new-note-button");
const submitButton = document.querySelector(".submit-button");
const closeButton = document.querySelector(".close-button");
const noteSection = document.querySelector(".note-section");
const inputTitle = document.querySelector(".input-title");
const inputNote = document.querySelector(".input-note");

// Blank HTML elements stored into variables
const articleElement = document.createElement("article");
const pTitleElement = document.createElement("p");
const pNoteElement = document.createElement("p");
const divLeft = document.createElement("div");
const divRight = document.createElement("div");
const div = document.createDocumentFragment("div")
const bold = document.createElement("button");
const underline = document.createElement("button");
const copy = document.createElement("button");
const footer = document.createElement("footer");


bold.innerHTML = "B";
underline.innerHTML = "U";
copy.innerHTML = "C";

console.log(bold);
console.log(underline);
console.log(copy);
console.log(articleElement);

// Click event listeners
newNoteButton.addEventListener("click", displayNoteForm);
closeButton.addEventListener("click", closeNoteForm);
submitButton.addEventListener("click", createNote);
inputTitle.addEventListener("change", newNoteTitle);
inputNote.addEventListener("change", newNoteContent);

// Add pre-built CSS classes to the blank new elements
(function addClasses() {
  articleElement.classList.add("note-box");
  pTitleElement.classList.add("note-headings");
  pNoteElement.classList.add("notes");
  divLeft.classList.add("left");
  divRight.classList.add("right");
  bold.classList.add("bold");
  underline.classList.add("underline");
  copy.classList.add("copy");
})();

// Add the title to the new note
function newNoteTitle(e) {
  pTitleElement.innerHTML = e.target.value;
}

// Add the main note content to the new note
function newNoteContent(e) {
  pNoteElement.innerHTML = e.target.value;
}

// Close the input form
function closeNoteForm(e) {
  e.preventDefault();
  document.querySelector(".input-form").style.display = "none";
}

// Display the input form
function displayNoteForm() {
  document.querySelector(".input-form").style.display = "flex";
}

// Create and render the new note on UI
function createNote(e) {
  e.preventDefault();
  console.log(noteSection);

  divLeft.appendChild(bold);
  divLeft.appendChild(underline);
  divRight.appendChild(copy);


  footer.appendChild(divLeft);
  footer.appendChild(divRight);

  div.appendChild(pTitleElement);
  div.appendChild(pNoteElement);
  articleElement.appendChild(div)
  articleElement.appendChild(footer)

  console.log(pNoteElement);

  console.log(bold);
  noteSection.appendChild(articleElement.cloneNode(true));
  
  console.log(footer)

  document.querySelector(".input-form").style.display = "none";
  inputTitle.value = "";
  inputNote.value = "";
}
