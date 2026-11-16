// Select required DOM elements
const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultParagraph = document.getElementById("result");

// Define the validation function
function checkInput() {
  // Remove leading and trailing spaces
  const trimmedValue = userInput.value.trim();

  // Convert trimmed string to a number
  const numericValue = Number(trimmedValue);

  // Validate and compare against 10
  if (trimmedValue === "" || Number.isNaN(numericValue)) {
    resultParagraph.textContent = "Please enter a valid number!";
  } else if (numericValue < 10) {
    resultParagraph.textContent = "The number is lower than 10";
  } else if (numericValue > 10) {
    resultParagraph.textContent = "The number is higher than 10";
  } else {
    resultParagraph.textContent = "The number is equal to 10";
  }
}

// Register the click event listener
checkButton.addEventListener("click", checkInput);