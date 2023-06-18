// Get the necessary DOM elements
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

// Initialize the counter
let counter = 0;

// Function to update the counter and display the new value
function updateCounter() {
  counter++;
  counterElement.textContent = counter;
}

// Add a click event listener to the button
incrementButton.addEventListener('click', updateCounter);
