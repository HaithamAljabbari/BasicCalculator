// Variables
let displayValue = '';

// Function to append value to the display
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// Function to calculate the result
function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}
