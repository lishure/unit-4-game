//Set at the start of the game
$(document).ready(function() {
	// random number loop starting at 19 up to 120
	var randNumber= [];
	for (var i = 19; i < 121; i++) {
		randNumber.push(i);
   }
   //random number loop for the crystals starting at 1 up to 12
	var jewels = [];
	for (var j = 1; j < 13; j++) {
		jewels.push(j);
	}
//start wins/loss counter at 0 and display it
//set global variables
var wins = 0;
var losses = 0;
var randomNumber = []; //This is the match number
//set var for crystals
var jewelNumbers = []; //This is the number values for the crystals
var green;
var blue;
var red;
var purple;
var userScore = 0; //This is the user's total score
// Create variables for the places in the HTML where we want to display things.
var winCountElement = document.getElementById("win-count");
var loseCountElement = document.getElementById("lose-count");
var randomNumberElement = document.getElementById("random-number");
var userScoreElement = document.getElementById("user-score");
//generate random number between 19-120 (use mathrandom)


//When crystals are clicked, generate and show random nuber 

$(".crystals").on("click", function () {
Math.floor(Math.random() * 121) + 19;
$("#random-number").text(random);
//Need to start the random number at 19. 

//hide random number until click event 

//Random assign numbers to each jewel between 1-12, randoms each game (use math random)
//Need an array for valid numbers to be assigned to jewels


//put something in front of math random line
//Need to assign button ID to jewels in html
$("#blue-crystal").on("click", function () {
   Math.floor(Math.random() * 13);
   $("#jewel-number").text(random);
});

   $("#green-crystal").on("click", function () {
      Math.floor(Math.random() * 13);
      $("#jewel-number").text(random);
   });

      $("#red-crystal").on("click", function () {
         Math.floor(Math.random() * 13);
         $("#jewel-number").text(random);
      });

         $("#purple-crystal").on("click", function () {
            Math.floor(Math.random() * 13);
            $("#jewel-number").text(random);
         });
            //The above should generate random number for the jewel button

            //when game wins/lose,restarts game and resets random number/user counter


             //Need to create add function for crystals and add to user score
             $("#blue-crystal").on("click", function() {

               userScore += c1;
               $("#user-score").html(userScore);
            });
      
            $("#green-crystal").on("click", function() {
      
               userScore += c2;
               $("#user-score").html(userScore);
            });
      
            $("#red-crystal").on("click", function() {
      
               userScore += c3;
               $("#user-score").html(userScore);
            });
      
            $("#purple-crystal").on("click", function() {
      
               userScore += c4;
               $("#user-score").html(userScore);
            });


            //need if and else statements for wins/loses
            //Need to restart game upon winning or losing
            if (userScore === randomNumber) {
               wins++;
               $("#scoreboard").html("<h2>Winner!</h2>");
               $("#wins").html(`<h3>${wins}</h3>`);
            }

            else {
               losses++;
               $("#scoreboard").html("<h2>Loser!</h2>");
               $("#losses").html(`<h3>${losses}</h3>`);
               document.getElementById("losses").innerHTML = `<h3>${losses}</h3>`;
            };
               //Create and if statement for when userscore is greater than random-number, user loses and game resets.
            

   //track wins and loses and displays in html
   winsCountElement.textContent = `wins: ${wins}`;
   loseCountElement.textContent = `losses: ${losses}`;
   randomNumberElement.textContent = `Match: ${randomNumber}`;
   userScoreElement.textContent = `Your Score: ${userScore}`;

