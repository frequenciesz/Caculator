document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('.calculator button');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'AC') {
                // Clear the input
                currentInput = '';
            } else if (value === 'DE') {
                // Delete the last character
                currentInput = currentInput.slice(0, -1);
            } else if (value === '=') {
                try {
                    // Evaluate the expression
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = 'Error';
                }
            } else {
                // Append the value to the current input
                currentInput += value;
            }

            // Update the display
            inputBox.value = currentInput;
        });
    });
});
