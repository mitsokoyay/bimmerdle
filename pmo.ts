interface Car {
  id: string;
  name: string;
  chassis: string;
  year: string;
  image: string;
}

const bmw1: Car = {
  id: "BMW 3 Series E46",
  name: "3 Series",
  chassis: "E46",
  year: "2004",
  image: "bmwimages/3series/1.jpg"
}

const bmw2: Car = {
  id: "BMW 3 Series E30",
  name: "3 Series",
  chassis: "E30",
  year: "1980",
  image: "bmwimages/3series/2.jpg"
} 
interface Question{
  question: string;
  car: Car;
}

const model: Question = {
  question: "What model is this?",
  car: bmw1 // TODO: add a way to correlate this to whatever the randomly selected car is
}

const chassis: Question = {
  question: "What chassis code does this car have?",
  car: bmw1 // TODO: same as last instance
}


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

function changeQuestion(): Question{ // i would want to start with an array of "question object"
  // the first index of the array would be the basic guess the model question
  // next up would be chassis code and so on so forth
  //
  // so current task is to figure out how to assign question attributes 
  // to an object
  //
  let questionsArr: Question[] = {model, chassis};
  return questionsArr[0];
  
}

function loadNewImage(): Car{
  let carArr: Car[] = [bmw1, bmw2];
  const random = Math.floor(Math.random() * carArr.length);
  const imgElement = document.getElementById('random-bmw') as HTMLImageElement;
  const modelName = document.getElementById('model-input') as HTMLInputElement;
  const chassisName = document.getElementById('chassis-code') as HTMLInputElement;
  const modelSource = carArr[random].name;
  const chassisSource = carArr[random].chassis;
  const imageSource = carArr[random].image;
  if(imgElement){
    imgElement.src = imageSource;
    modelName.src = modelSource;
    chassisName.src = chassisSource;
  }
  return carArr[random];
}

window.addEventListener('DOMContentLoaded', loadNewImage);

function checkGuess(): void {
  const selectedCar: Car = loadNewImage();
  const firstInput = document.getElementById("guess-input") as HTMLInputElement;
  const result = document.getElementById("result-text") as HTMLParagraphElement;
  const modelInput = document.getElementById("model-input") as HTMLInputElement;
  const modelCheckInput = modelInput.value.trim().toLowerCase();
  const modelResult = document.getElementById(
    "model-result",
  ) as HTMLParagraphElement;
  const chassisInput = document.getElementById(
    "chassis-code",
  ) as HTMLInputElement;
  const chassisCheckInput = chassisInput.value.trim().toLowerCase();
  const chassisResult = document.getElementById(
    "chassis-result",
  ) as HTMLParagraphElement;
  const car = { model: "3 series", chassisCode: "E46", make: "BMW" };

  if (modelCheckInput == selectedCar.name.toLowerCase()) {
    modelResult.textContent = "Correct!";
    modelResult.style.color = "green";
  } else {
    modelResult.textContent = "Incorrect";
    modelResult.style.color = "red";
  }

  if (chassisCheckInput == selectedCar.chassis.toLowerCase()) {
    chassisResult.textContent = "Correct!";
    chassisResult.style.color = "green";
  } else {
    chassisResult.textContent = "Incorrect";
    chassisResult.style.color = "red";
  }
}
(window as any).checkGuess = checkGuess;
