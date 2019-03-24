
//start wins/loss counter at 0 and display it
//set global variables
var wins = 0;
$("#win-count").text(wins);
var losses = 0;
$("#lose-count").text(losses);
var userScore = 0;
$("#user-score").text(userScore); //This is the user's total score
var totalScore = 0;

//getRandom is the global function for clean code to not have to keep rewriting.
let getRandom = function(x, y){
   return Math.floor(Math.random() * (y - x)) + x;
};
//set var for crystals
var blueCrystal = getRandom(1,12);
var greenCrystal = getRandom(1,12);
var redCrystal = getRandom(1,12);
var purpleCrystal = getRandom(1,12);
// Create variables for the places in the HTML where we want to display things.

//generate random number between 19-120 (use mathrandom)
//This function is used to log random number
//When crystals are clicked, generate and show random number 
var randomNumber = getRandom(19,120);
$("#random-number").text(randomNumber);
console.log(randomNumber);

//Need to start the random number at 19. 

//when game wins/lose,restarts game and resets random number/user counter
function startGame() {
   randomNumber = getRandom(19,120);
   $("#random-number").text(randomNumber);
   userScore = 0;
   $("#user-score").text(userScore);
   totalScore = 0;
   blueCrystal = getRandom(1,12);
   greenCrystal = getRandom(1,12);
   redCrystal = getRandom(1,12);
   purpleCrystal = getRandom(1,12); 
   //random Number reset
   //User score reset
   //Jewel values reset
};

//Random assign numbers to each jewel between 1-12, randoms each game (use math random)

//put something in front of math random line
//Need to assign button ID to jewels in html
$("#blue-crystal").on("click", function () {
   totalScore += blueCrystal
   $("#user-score").text(totalScore);
   console.log(totalScore)
   if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(`${wins}`);
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
   $("#user-score").text(totalScore);
   console.log(totalScore)
   if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(`${wins}`);
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
   $("#user-score").text(totalScore);
   console.log(totalScore)
   if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(`${wins}`);
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
   $("#user-score").text(totalScore);
   console.log(totalScore)
   if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(`${wins}`);
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

//above should include startgame(); when game wins/lose,restarts game and resets random number/user counter

