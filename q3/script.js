// Select button and ordered list elements
const generateButton = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

// Define the list generation function
function generateNumbers() {
  // Clear any existing list items so repeated clicks do not duplicate items
  numberList.textContent = "";

  // Loop from 1 through 5
  for (let i = 1; i <= 5; i++) {
    // Create a new <li> element
    const listItem = document.createElement("li");

    // Set its text safely using textContent
    listItem.textContent = `The number is ${i}`;

    // Append the <li> to the <ol>
    numberList.appendChild(listItem);
  }
}

// Attach the function to the button click event
generateButton.addEventListener("click", generateNumbers);