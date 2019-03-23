
//start wins/loss counter at 0 and display it
var wins = 0;
var losses = 0;
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
//Not sure if array is necessary?
var jewelNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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


             //Need to create add function for crystals

            //need if and else statements for wins/loses
            if (user-score === random-number) {
               wins++;
               $("#win-lose").html("<h2>Winner!</h2>");
               $("#wins").html(`<h3>${wins}</h3>`);
            }

            else {
               losses++;
               $("#win-lose").html("<h2>Loser!</h2>");
               $("#losses").html(`<h3>${losses}</h3>`);
               document.getElementById("losses").innerHTML = `<h3>${losses}</h3>`;
            };
  

   //track wins and loses
   winsCountElement.textContent = `wins: ${wins}`;
   loseCountElement.textContent = `losses: ${losses}`;

