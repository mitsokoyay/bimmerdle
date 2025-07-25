interface Car {
  id: string;
  name: string;
  chassis: string;
  year: string;
  image: string;
}

let cars: Car[] = [];
let correctCars: Car | null = null;

async function loadCars(): Promise<void> {
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
}

console.log("Cars loaded: ", cars);
function checkGuess(): void {
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
  const car = { model: "3 Series", chassisCode: "E46", make: "BMW" };

  if (modelCheckInput == car.model.toLowerCase()) {
    modelResult.textContent = "Correct!";
    modelResult.style.color = "green";
  } else {
    modelResult.textContent = "Incorrect";
    modelResult.style.color = "red";
  }

  if (chassisCheckInput == car.chassisCode.toLowerCase()) {
    chassisResult.textContent = "Correct!";
    chassisResult.style.color = "green";
  } else {
    chassisResult.textContent = "Incorrect";
    chassisResult.style.color = "red";
  }
}
(window as any).checkGuess = checkGuess;
