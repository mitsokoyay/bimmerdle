   function checkGuess(): void{
        const firstInput = document.getElementById("guess-input") as HTMLInputElement;
        const result = document.getElementById("result-text") as HTMLParagraphElement;
        const modelExInput = document.getElementById("model-input") as HTMLInputElement;
        const modelInput = modelExInput.value.trim().toLowerCase();
        const car = {model: "3 Series", chassisCode: "E46", make: "BMW", }

        if(modelInput == car.model.toLowerCase()){
          result.textContent = "Correct!";
          result.style.color = "green";
        }
        else{
          result.textContent = "Incorrect";
          result.style.color= "red";
        }
        
      }
      (window as any).checkGuess = checkGuess;
