function checkGuess() {
    var firstInput = document.getElementById("guess-input");
    var result = document.getElementById("result-text");
    var modelExInput = document.getElementById("model-input");
    var modelInput = modelExInput.value.trim().toLowerCase();
    var car = { model: "3 Series", chassisCode: "E46", make: "BMW", };
    if (modelInput == car.model.toLowerCase()) {
        result.textContent = "Correct!";
        result.style.color = "green";
    }
    else {
        result.textContent = "Incorrect";
        result.style.color = "red";
    }
}
window.checkGuess = checkGuess;
