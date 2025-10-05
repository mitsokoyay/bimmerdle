let currentCar: Car | null = null;
let zoom: number = 2;
let guessNum: number = 0;
let questionNum: number = 0;
const minZoom: number = 0.15;
const zoomReduce: number = 0.5;
interface Car {
  id: string;
  name: string;
  chassis: string;
  year: string;
  image: string;
}
let day: number = 0;
let renderedCars: Car[] = [
  {
    id: "BMW 3 Series",
    name: "3 Series",
    chassis: "E46",
    year: "2004",
    image: "bmwimages/3series/1.jpg",
  },
  {
    id: "BMW 3 Series",
    name: "3 Series",
    chassis: "E30",
    year: "1980",
    image: "bmwimages/3series/2.jpg",
  },
];

const bmw1 = renderedCars[0];
const bmw2 = renderedCars[1];

interface Question {
  question: string;
  answer: string;
  car: Car;
}

const model: Question = {
  question: "What model is this?",
  car: renderedCars[day],
  answer: renderedCars[day].name,
};

const chassis: Question = {
  question: "What chassis code does this car have?",
  car: renderedCars[day], // TODO: same as last instance
  answer: renderedCars[day].chassis,
};
/*
async function loadCars() {
  try {
    const response = await fetch("cars.json");
    const carsData = await response.json();
    renderedCars = carsData;
    if (renderedCars.length > 0) {
      loadNewImage();
    } else {
      console.error("Error: cars unable to be loaded");
    }
  } catch (error) {
    console.error("Error loading: ", error);
  }
}

window.addEventListener("DOMContentLoaded", loadNewImage);
window.addEventListener("DOMContentLoaded", loadCars);
*/
let i: number = 0;
function changeQuestion(): void {
  const inputBox = document.getElementById("model-input") as HTMLInputElement;
  let prompts: string[] = [
    "Guess the model...",
    "Guess the Chassis Code...",
    "Guess the Year...",
    "Guess the Designer...",
  ];
  if (inputBox && prompts[i] != null) {
    inputBox.placeholder = prompts[i];
    i++;
  }
}

function updateZoom(): void {
  const imgElement = document.getElementById("random-bmw") as HTMLImageElement;
  if (imgElement) {
    imgElement.style.transform = `translate(-50%,-50%) scale(${zoom})`;
  }
}

function loadNewImage(): void {
  const origElement = document.getElementById("random-bmw") as HTMLImageElement;
  origElement.style.transform = `translate(-50%, -50%) scale(${zoom})`;
  if (day >= 0 && day < renderedCars.length) {
    currentCar = renderedCars[day];
  }
  const imgElement = document.getElementById("random-bmw") as HTMLImageElement;
  if (imgElement && currentCar) {
    imgElement.src = currentCar.image;
    imgElement.alt = "Guess the BMW!";
  }
}
window.addEventListener("DOMContentLoaded", loadNewImage);

function showModelName(currentCar: Car, show: boolean) {
  const modelElement = document.getElementById("model-name") as HTMLElement;

  modelElement.className = "model-name-hidden";

  if (show) {
    modelElement.className = "model-name-shown";
    modelElement.textContent = currentCar.name;
  }
}

function showResult(currentCar: Car, isCorrect: boolean) {
  const messageElement = document.getElementById("correct-text") as HTMLElement;
  const nextQuesElement = document.getElementById(
    "next-question",
  ) as HTMLButtonElement;
  nextQuesElement.className = "next-question-hidden";
  messageElement.className = "message-hidden";

  if (isCorrect) {
    messageElement.className = "message-correct";
    messageElement.textContent = "Correct!";
    showModelName(currentCar, true);
  } else {
    messageElement.className = "message-incorrect";
    messageElement.textContent = "Incorrect!";
  }
}

function checkGuess(): void {
  if (questionNum == 0) {
    checkModel();
  } else if (questionNum == 1) {
    checkChassis();
  } else {
    checkYear();
  }
}

function checkModel(): void {
  const modelInput = document.getElementById("guess-input") as HTMLInputElement;
  const modelCheck = modelInput.value.trim().toLowerCase();
  if (!currentCar) return;
  if (modelCheck == currentCar.name.toLowerCase()) {
    zoom = minZoom;
    updateZoom();
    showResult(currentCar, true);
    guessNum++;
  } else {
    guessNum++;
    if (guessNum < 4) {
      zoom -= zoomReduce;
      updateZoom();
      showResult(currentCar, false);
    } else {
      zoom = minZoom;
      updateZoom();
      showResult(currentCar, false);
      showModelName(currentCar, true);
    }
  }
}

function checkChassis(): void {
  const chassisInput = document.getElementById(
    "guess-input",
  ) as HTMLInputElement;
  const chassisCheck = chassisInput.value.trim().toLowerCase();
  if (!currentCar) return;
  if (chassisCheck == currentCar.chassis.toLowerCase()) {
    showResult(currentCar, true);
    guessNum++;
  } else {
    guessNum++;
    if (guessNum < 4) {
      showResult(currentCar, false);
    } else {
      showResult(currentCar, false);
    }
  }
}

function checkYear(): void {
  const yearInput = document.getElementById("guess-input") as HTMLInputElement;
  const yearCheck = yearInput.value.trim().toLowerCase();
  if (!currentCar) return;
  if (yearCheck == currentCar.year) {
    showResult(currentCar, true);
    guessNum++;
  } else {
    guessNum++;
    if (guessNum < 4) {
      showResult(currentCar, false);
    }
  }
}
(window as any).checkGuess = checkGuess;
