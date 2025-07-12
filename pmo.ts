   function checkGuess(): void{
        const input = document.getElementById("guess-input") as HTMLInputElement;
        const result = document.getElementById("result-text") as HTMLInputElement;
        const userGuest = input.value.trim().toLowerCase();
        const correctAnswer = "e46";

        if(correctAnswer == userGuest){
          result.textContent = "Correct!";
          result.style.color = "green";
        }
        else{
          result.textContent = "Incorrect";
          result.style.color= "red";
        }
        
      }
      (window as any).checkGuess = checkGuess;
