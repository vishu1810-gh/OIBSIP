// Get the display element
let display = document.getElementById("display");

// Append numbers/operators to the display
function appendValue(value) {
    display.value += value;
}

// Clear all text in the display
function clearDisplay() {
    display.value = "";
}

// Delete last character (backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid expression");
    }
}
