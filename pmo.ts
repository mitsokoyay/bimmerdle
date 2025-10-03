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
let day: number = 1;
const renderedCars: Car[] = [
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
    image: "bmwimages/3series/1.jpg",
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
  let carArr: Car[] = [bmw1, bmw2];
  const random = Math.floor(Math.random() * carArr.length);
  currentCar = carArr[random];
  const imgElement = document.getElementById("random-bmw") as HTMLImageElement;
  if (imgElement) {
    imgElement.src = currentCar.image;
    imgElement.alt = "Guess the BMW!";
  }
}
window.addEventListener("DOMContentLoaded", loadNewImage);

function showResult(isCorrect: boolean) {
  const messageElement = document.getElementById("correct-text") as HTMLElement;

  messageElement.className = "message-hidden";

  if (isCorrect) {
    messageElement.className = "message-correct";
    messageElement.textContent = "Correct!";
  } else {
    messageElement.className = "message-incorrect";
    messageElement.textContent = "Incorrect!";
  }
}

function checkGuess(): void {
  if (questionNum == 0) {
    checkModel();
  } else if ((questionNum = 1)) {
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
    showResult(true);
    guessNum++;
  } else {
    guessNum++;
    if (guessNum < 4) {
      zoom -= zoomReduce;
      updateZoom();
      showResult(false);
    } else {
      zoom = 0.15;
      updateZoom();
      showResult(false);
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
    showResult(true);
    guessNum++;
  } else {
    guessNum++;
    if (guessNum < 4) {
      showResult(false);
    } else {
      showResult(false);
    }
  }
}

function checkYear(): void {
  const yearInput = document.getElementById("guess-input") as HTMLInputElement;
  const yearCheck = yearInput.value.trim().toLowerCase();
  if (!currentCar) return;
  if (yearCheck == currentCar.year) {
    showResult(true);
    guessNum++;
  } else {
    guessNum++;
    if (guessNum < 4) {
    }
  }
}

//Rewriting a new function for every question, to make this easier to understand.
/*
function checkGuess(): void {
  if (!currentCar) {
    return;
  }
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

  if (modelCheckInput == currentCar.name.toLowerCase()) {
    modelResult.textContent = "Correct!";
    modelResult.style.color = "green";
  } else {
    modelResult.textContent = "Incorrect";
    modelResult.style.color = "red";
  }

  if (chassisCheckInput == currentCar.chassis.toLowerCase()) {
    chassisResult.textContent = "Correct!";
    chassisResult.style.color = "green";
  } else {
    chassisResult.textContent = "Incorrect";
    chassisResult.style.color = "red";
  }
}
*/
(window as any).checkGuess = checkGuess;
