let btn = document.getElementById("btn");
let result = document.getElementById("result");
let guesses = document.getElementById("guesses");
let number = Math.floor(Math.random()*100)+1;
let guessNumber = 0;

btn.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  
  if(input<1 || input>100 || isNaN(input)){
    result.textContent = "Enter valid number in range"
  }
  else{
    guessNumber++;
    if(input < number){
      result.textContent = "Number guessed is low";
    }
    else if(input > number){
      result.textContent = "Number guessed is high";
    }
    else{
      result.textContent = "Congratulations! You guessed the number right";
      setTimeout(() => {
        guessNumber = 0;
        document.getElementById("input").value = "";
        document.getElementById("result").textContent = "";
        document.getElementById("guesses").textContent = "Number of guesses : 0";
        number = Math.floor(Math.random()*100)+1;
      }, 3000);
    }
    guesses.innerHTML = `Number of guesses : ${guessNumber}`;
  }
})