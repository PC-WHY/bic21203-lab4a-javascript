// 1. Select the paragraph and button elements
const messageParagraph = document.getElementById("message");
const changeButton = document.getElementById("changeBtn");

// 2. Define the function to update the paragraph text
function changeMessage() {
  messageParagraph.textContent = "Hello there!";
}

// 3. Attach the click event listener to the button
changeButton.addEventListener("click", changeMessage);