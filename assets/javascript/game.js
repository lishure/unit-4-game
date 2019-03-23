
//start wins/loss counter at 0 and display it
//set global variables
var wins = 0;
var losses = 0;
var userScore = 0; //This is the user's total score
var randomNumber = []; //This is the match number
//set var for crystals
var totalScore = 0;
var blueCrystal = Math.floor(Math.random() * 12) + 1;
var greenCrystal = Math.floor(Math.random() * 12) + 1;
var redCrystal = Math.floor(Math.random() * 12) + 1;
var purpleCrystal = Math.floor(Math.random() * 12) + 1;
// Create variables for the places in the HTML where we want to display things.
var winCountElement = document.getElementById("win-count");
var loseCountElement = document.getElementById("lose-count");
var randomNumberElement = document.getElementById("random-number");
var userScoreElement = document.getElementById("user-score");
//generate random number between 19-120 (use mathrandom)
//This function is used to log random number

//When crystals are clicked, generate and show random nuber 

var randomNumber = Math.floor(Math.random() * 102) + 19;
$("#random-number").text(randomNumber);
console.log(randomNumber);

//Need to start the random number at 19. 

//when game wins/lose,restarts game and resets random number/user counter
function startGame() {
   randomNumber =  Math.floor(Math.random() * 102) + 19;
   $("#random-number").text(randomNumber);
   userScore = 0;
   totalScore =0;
   blueCrystal = Math.floor(Math.random() * 12) + 1;
   greenCrystal = Math.floor(Math.random() * 12) + 1;
   redCrystal = Math.floor(Math.random() * 12) + 1;
   purpleCrystal = Math.floor(Math.random() * 12) + 1;
   

   //random Number reset
   //User score reset
   //Jewel values reset
};

//Random assign numbers to each jewel between 1-12, randoms each game (use math random)
//Need an array for valid numbers to be assigned to jewels


//put something in front of math random line
//Need to assign button ID to jewels in html
$("#blue-crystal").on("click", function () {
   totalScore += blueCrystal
   $("#user-score").text("User Score: " + totalScore);
   console.log(totalScore)
   if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(`<h3>${wins}</h3>`);
      console.log("yay");
      startGame();
   }
   else if (totalScore > randomNumber) {
      losses++;
      $("#lose-count").html(`${losses}`);
      console.log("loser");
      startGame();
   };

});

$("#green-crystal").on("click", function () {
   totalScore += greenCrystal
   $("#user-score").text("User Score: " + totalScore);
   console.log(totalScore)
   if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(`<h3>${wins}</h3>`);
      console.log("yay");
      startGame();
   }
   else if (totalScore > randomNumber) {
      losses++;
      $("#lose-count").html(`${losses}`);
      console.log("loser");
      startGame();
   }
});

$("#red-crystal").on("click", function () {
   totalScore += redCrystal
   $("#user-score").text("User Score: " + totalScore);
   console.log(totalScore)
   if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(`<h3>${wins}</h3>`);
      console.log("yay");
      startGame();
   }
   else if (totalScore > randomNumber) {
      losses++;
      $("#lose-count").html(`${losses}`);
      console.log("loser");
      startGame();

   }
});

$("#purple-crystal").on("click", function () {
   totalScore += purpleCrystal
   $("#user-score").text("User Score: " + totalScore);
   console.log(totalScore)
   if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(`<h3>${wins}</h3>`);
      console.log("yay");
      startGame();
   }
   else if (totalScore > randomNumber) {
      losses++;
      $("#lose-count").html(`${losses}`);
      console.log("loser");
      startGame();

   }
});

//The above should generate random number for the jewel button and logs win and losses

//when game wins/lose,restarts game and resets random number/user counter




   //track wins and loses and displays in html
   // winCountElement.textContent = `wins: ${wins}`;
   // loseCountElement.textContent = `losses: ${losses}`;
   // randomNumberElement.textContent = `Match: ${randomNumber}`;
    //userScoreElement.textContent = `Your Score: ${userScore}`;

