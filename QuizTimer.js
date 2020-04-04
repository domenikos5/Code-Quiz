var userName = document.querySelector("#userName");
var endMsg = document.querySelector("#endMsg");
var yourScore = document.querySelector("#yourScore");

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var submitBtn = document.querySelector("#submitNameScore");
var secondsLeft = 91;

function startTimer() {

  var interval = setInterval(function() {
    secondsLeft--;
    document.querySelector("#TimeLeftDisplay").innerHTML = secondsLeft;
    console.log(secondsLeft);
    
    
    if (secondsLeft === 0) {
      clearInterval(interval);
      document.querySelector("#boxTwo").setAttribute("style", "display: none");
      document.querySelector("#boxThree").setAttribute("style", "display: block");
      
    } else if (currentIndex === 5) {
    
      clearInterval(interval);
      document.querySelector("#boxTwo").setAttribute("style", "display: none");
      document.querySelector("#boxFour").setAttribute("style", "display: block");
      
      score = ((score)*(secondsLeft));
      
      if (isNaN(score)) {
        yourScore.innerHTML = "Your score is: 0";
      } else {
        endMsg.innerHTML = "You made it to the end!";
        yourScore.innerHTML = "Your score is: " + score;
      }
    }
  }, 1000); 
}



//sends data to the Leaderboard 
submitBtn.addEventListener("click", function(event) {
  event.stopPropagation();
  
  console.log("on submitBtn click print out score: " + score); 

  var finalScore = {
    initials, 
    score
  };

  console.log("finalScore" + finalScore);
  
  var initials = userName.value;
  console.log("initials" + initials);
  //localStorage
  highscores.push(finalScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  console.log(initials, score);
});
        