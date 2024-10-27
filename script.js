document.getElementById("check-btn").addEventListener("click", checkPalindrome);
document.getElementById("text-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkPalindrome();
    }
});

function checkPalindrome() {
    const inputText = document.getElementById("text-input").value.trim();
    const resultElement = document.getElementById("result");

    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const processedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isPalindrome = processedText === processedText.split('').reverse().join('');

    resultElement.textContent = `${inputText} is ${isPalindrome ? '' : 'not '}a palindrome`;
}