var bmw1 = {
    id: "BMW 3 Series E46",
    name: "3 Series",
    chassis: "E46",
    year: "2004",
    image: "bmwimages/3series/1.jpg"
};
var bmw2 = {
    id: "BMW 3 Series E30",
    name: "3 Series",
    chassis: "E30",
    year: "1980",
    image: "bmwimages/3series/2.jpg"
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
    var modelName = document.getElementById('model-input');
    var chassisName = document.getElementById('chassis-code');
    var modelSource = carArr[random].name;
    var chassisSource = carArr[random].chassis;
    var imageSource = carArr[random].image;
    if (imgElement) {
        imgElement.src = imageSource;
        modelName.src = modelSource;
        chassisName.src = chassisSource;
    }
    return carArr[random];
}
window.addEventListener('DOMContentLoaded', loadNewImage);
function checkGuess() {
    var selectedCar = loadNewImage();
    var firstInput = document.getElementById("guess-input");
    var result = document.getElementById("result-text");
    var modelInput = document.getElementById("model-input");
    var modelCheckInput = modelInput.value.trim().toLowerCase();
    var modelResult = document.getElementById("model-result");
    var chassisInput = document.getElementById("chassis-code");
    var chassisCheckInput = chassisInput.value.trim().toLowerCase();
    var chassisResult = document.getElementById("chassis-result");
    var car = { model: "3 series", chassisCode: "E46", make: "BMW" };
    if (modelCheckInput == selectedCar.name.toLowerCase()) {
        modelResult.textContent = "Correct!";
        modelResult.style.color = "green";
    }
    else {
        modelResult.textContent = "Incorrect";
        modelResult.style.color = "red";
    }
    if (chassisCheckInput == selectedCar.chassis.toLowerCase()) {
        chassisResult.textContent = "Correct!";
        chassisResult.style.color = "green";
    }
    else {
        chassisResult.textContent = "Incorrect";
        chassisResult.style.color = "red";
    }
}
window.checkGuess = checkGuess;
