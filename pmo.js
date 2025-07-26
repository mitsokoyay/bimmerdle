var bmw1 = {
    id: "BMW 3 Series E46",
    name: "BMW 3 Series E46",
    chassis: "E46",
    year: "2004",
    image: "bmwimages/1.jpg"
};
var bmw2 = {
    id: "BMW 3 Series E30",
    name: "BMW 3 Series E30",
    chassis: "E30",
    year: "1980",
    image: "bmwimages/2.jpg"
};
var cars = [];
var correctCars = null;
/* async function loadCars(): Promise<void> {
  const response = await fetch("cars.json");
  const data: Car[] = await response.json();
  cars = data;

  correctCars = cars[Math.floor(Math.random() * cars.length)];
  console.log("Correct car: ", correctCars);
  console.log("Cars loaded:", cars);
  const imageContainer = document.getElementById("image-container");
  if (imageContainer && correctCars.image) {
    const img = imageContainer.querySelector("img");
    if (img) {
      img.src = correctCars.image;
      img.alt = "Guess this BMW!";
    }
  }
} */
function loadNewImage() {
    var carArr = [bmw1, bmw2];
    var random = Math.floor(Math.random() * carArr.length);
    var imgElement = document.getElementById('random-bmw');
    var imageSource = carArr[random].image;
    if (imgElement) {
        imgElement.src = imageSource;
    }
}
window.addEventListener('DOMContentLoaded', loadNewImage);
function checkGuess() {
    var firstInput = document.getElementById("guess-input");
    var result = document.getElementById("result-text");
    var modelInput = document.getElementById("model-input");
    var modelCheckInput = modelInput.value.trim().toLowerCase();
    var modelResult = document.getElementById("model-result");
    var chassisInput = document.getElementById("chassis-code");
    var chassisCheckInput = chassisInput.value.trim().toLowerCase();
    var chassisResult = document.getElementById("chassis-result");
    var car = { model: "3 Series", chassisCode: "E46", make: "BMW" };
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
        chassisResult.style.color = "green";
    }
    else {
        chassisResult.textContent = "Incorrect";
        chassisResult.style.color = "red";
    }
}
window.checkGuess = checkGuess;
