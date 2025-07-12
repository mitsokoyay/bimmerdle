function checkGuess() {
    var input = document.getElementById("guess-input");
    var result = document.getElementById("result-text");
    var userGuest = input.value.trim().toLowerCase();
    var correctAnswer = "e46";
    if (correctAnswer == userGuest) {
        result.textContent = "Correct!";
        result.style.color = "green";
    }
    else {
        result.textContent = "Incorrect";
        result.style.color = "red";
    }
}
window.checkGuess = checkGuess;
