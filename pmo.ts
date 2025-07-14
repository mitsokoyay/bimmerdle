   function checkGuess(): void{
        const firstInput = document.getElementById("guess-input") as HTMLInputElement;
        const result = document.getElementById("result-text") as HTMLParagraphElement;
        const modelInput = document.getElementById("model-input") as HTMLInputElement;
        const modelCheckInput = modelInput.value.trim().toLowerCase();
        const modelResult = document.getElementById("model-result") as HTMLParagraphElement;
        const chassisInput = document.getElementById("chassis-code") as HTMLInputElement;
        const chassisCheckInput = chassisInput.value.trim().toLowerCase();
        const chassisResult = document.getElementById("chassis-result") as HTMLParagraphElement;
        const car = {model: "3 Series", chassisCode: "E46", make: "BMW", }

        if(modelCheckInput == car.model.toLowerCase()){
          modelResult.textContent = "Correct!";
          modelResult.style.color = "green";
        }
        else{
          modelResult.textContent = "Incorrect";
          modelResult.style.color= "red";
        }

        if(chassisCheckInput == car.chassisCode.toLowerCase()){
          chassisResult.textContent = "Correct!";
          result.style.color = "green";

        }
        else{
          result.textContent = "Incorrect";
          result.style.color = "red";
        }
        
      }
      (window as any).checkGuess = checkGuess;
