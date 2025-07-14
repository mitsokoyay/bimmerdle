function checkGuess() {
    var firstInput = document.getElementById("guess-input");
    var result = document.getElementById("result-text");
    var modelInput = document.getElementById("model-input");
    var modelCheckInput = modelInput.value.trim().toLowerCase();
    var modelResult = document.getElementById("model-result");
    var chassisInput = document.getElementById("chassis-code");
    var chassisCheckInput = chassisInput.value.trim().toLowerCase();
    var chassisResult = document.getElementById("chassis-result");
    var car = { model: "3 Series", chassisCode: "E46", make: "BMW", };
    if (modelCheckInput == car.model.toLowerCase()) {
        modelResult.textContent = "Correct!";
        modelResult.style.color = "green";
    }
    else {
        modelResult.textContent = "Incorrect";
        modelResult.style.color = "red";
    }
    if (chassisCheckInput == car.chassisCode.toLowerCase()) {
        chassisResult.textContent = "Correct!";
        result.style.color = "green";
    }
    else {
        result.textContent = "Incorrect";
        result.style.color = "red";
    }
}
window.checkGuess = checkGuess;
