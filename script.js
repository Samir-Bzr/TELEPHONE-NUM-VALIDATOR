// Get elements
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

// Regex patterns for US phone number validation
const patterns = [
    /^1\s?\d{3}[-\s]\d{3}[-\s]\d{4}$/,      // 1 555-555-5555 or 1 555 555 5555
    /^1?\(\d{3}\)\s?\d{3}[-\s]\d{4}$/,       // 1(555)555-5555 or (555)555-5555
    /^1\s\(\d{3}\)\s\d{3}[-\s]\d{4}$/,       // 1 (555) 555-5555
    /^\d{10}$/,                              // 5555555555
    /^\d{3}[-\s]\d{3}[-\s]\d{4}$/            // 555-555-5555
];

// Validate phone number function
function validatePhoneNumber(phoneNumber) {
    for (let pattern of patterns) {
        if (pattern.test(phoneNumber)) {
            return true;
        }
    }
    return false;
}

// Check button click event
checkBtn.addEventListener('click', () => {
    const phoneNumber = userInput.value.trim();
    if (phoneNumber === '') {
        alert('Please provide a phone number');
        return;
    }

    const isValid = validatePhoneNumber(phoneNumber);

    if (isValid) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
        resultsDiv.style.color = 'green';
    } else {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
        resultsDiv.style.color = 'red';
    }
});

// Clear button click event
clearBtn.addEventListener('click', () => {
    userInput.value = '';
    resultsDiv.textContent = '';
});
