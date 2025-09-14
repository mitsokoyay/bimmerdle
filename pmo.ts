interface Car {
  id: string;
  name: string;
  chassis: string;
  year: string;
  image: string;
}
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
    image: "bmwimages/3seires/1.jpg",
  },
];

interface Question {
  question: string;
  car: Car;
}

const model: Question = {
  question: "What model is this?",
  car: renderedCars[0].name, // TODO: add a way to correlate this to whatever the randomly selected car is
};

const chassis: Question = {
  question: "What chassis code does this car have?",
  car: renderedCars[0].chassis, // TODO: same as last instance
};

let currentCar: Car | null = null;

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
  const model: Question = {
    question: "What model is this?",
    car: bmw1, // TODO: add a way to correlate this to whatever the randomly selected car is
  };

  /*
  let questionsArr: Question[] = {model, chassis};
  return questionsArr[0];
  */
}
function loadNewImage(): void {
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
