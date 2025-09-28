let currentCar: Car | null = null;
let zoom: number = 3;
const minZoom: number = 1;
const zoomReduce: number = 0.5;
interface Car {
  id: string;
  name: string;
  chassis: string;
  year: string;
  image: string;
}
let day: number = 0;
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
  car: renderedCars[0], // TODO: same as last instance
  answer: renderedCars[day].chassis,
};

let i: number = 0;
function changeQuestion(): void {
  // i would want to start with an array of "question object"
  // the first index of the array would be the basic guess the model question
  // next up would be chassis code and so on so forth
  //
  // so current task is to figure out how to assign question attributes
  // to an object
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
  updateZoom();
  /*
  let questionsArr: Question[] = {model, chassis};
  return questionsArr[0];
  */
}

function updateZoom(): void {
  const imgElement = document.getElementById("random-bmw") as HTMLImageElement;
  if (imgElement) {
    imgElement.style.transform = `translate(-50%, -50%) scale(${zoom})`;
    console.log("Zoom level set to: ${zoom}x");
  }
}

function loadNewImage(): void {
  zoom = 4;
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
(window as any).checkGuess = checkGuess;
