# Lab #4a: Client-Side Scripting (JavaScript)

* **Name:** PANG CHEW YUE
* **Student ID:** AI240178

## Overview
This repository contains the client-side JavaScript solutions for Lab #4a, demonstrating DOM selection, event handling with `addEventListener()`, input validation, conditional logic, loops, and dynamic element creation using safe `textContent` updates.

## Repository Structure
bic21203-lab4a-javascript/
├── README.md
├── q1/
│   ├── index.html
│   └── script.js
├── q2/
│   ├── index.html
│   └── script.js
└── q3/
    ├── index.html
    └── script.js

## Question 1
Selects the #message paragraph and #changeBtn button via DOM methods and registers a click listener for changeMessage(), updating the paragraph text from "Welcome to my website!" to "Hello there!".

**Output:**
1) On page load, the original message is displayed. 
<img width="393" height="195" alt="image" src="https://github.com/user-attachments/assets/89f9d67b-de75-4d56-89dc-c84c0821931f" />

2) When “Change Message” is clicked, the paragraph displays “Hello there!”.
<img width="392" height="227" alt="Screenshot 2026-11-16 094512" src="https://github.com/user-attachments/assets/a4210da2-4bdb-4359-a709-b60589c62e4e" />

## Question 2
Validates user input inside checkInput() by trimming whitespace and checking numeric validity before using an if...else if...else block to display whether the number is lower than, higher than, or equal to 10 in #result.

**Output:**
1) Tested with 5, the paragraph displays "The number is lower than 10".
<img width="431" height="220" alt="Screenshot 2026-11-16 091955" src="https://github.com/user-attachments/assets/3c77fabc-6a18-4ff5-8cb4-dad2dbc121dc" />

2) Tested with 10, the paragraph displays "The number is equal to 10".
<img width="446" height="208" alt="Screenshot 2026-11-16 091850" src="https://github.com/user-attachments/assets/1f08d80d-3721-4dc3-ae47-cdc7ed8397f8" />

3) Tested with 15, the paragraph displays "The number is higher than 10".
<img width="435" height="207" alt="image" src="https://github.com/user-attachments/assets/219a70f1-2639-482b-966b-2e8ef3a44cd9" />

4) Tested with 'abc', the paragraph displays "Please enter a valid number!".
<img width="448" height="196" alt="Screenshot 2026-11-16 091817" src="https://github.com/user-attachments/assets/b6243c5e-4875-457e-8cc5-d019bfbfa3bf" />

5) Tested with empty input, the paragraph displays "Please enter a valid number!".
   <img width="475" height="232" alt="Screenshot 2026-11-16 091717" src="https://github.com/user-attachments/assets/2b26a550-edcf-4783-a912-e5dbe84c1a39" />

## Question 3
Attaches generateNumbers() to #generateBtn. On click, it clears #numberList to prevent duplicates and runs a for loop from 1 to 5 using document.createElement("li") and textContent to display "The number is 1" through "The number is 5".

**Output:**
Attaches generateNumbers() to #generateBtn. On click, it clears #numberList to prevent duplicates and runs a for loop from 1 to 5 using document.createElement("li") and textContent to display "The number is 1" through "The number is 5".
<img width="403" height="295" alt="Screenshot 2026-11-16 092730" src="https://github.com/user-attachments/assets/946afb58-7d5d-4161-971b-46de9aada6eb" />



