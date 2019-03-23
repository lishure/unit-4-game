    
   //start wins/loss counter at 0 and display it
   var wins = 0;
   var loses = 0;
 // Create variables for the places in the HTML where we want to display things.
   var winCountElement = document.getElementById("win-count");
   var loseCountElement = document.getElementById("lose-count");
   var randomNumberElement = document.getElementById("random-number");
   var userScoreElement = document.getElementById("user-score");
   //generate random number between 19-120 (use mathrandom)

   var randomNumber = Math.floor(Math.random() * 121) + 19;
   //Need to start the random number at 19. 

   //hide random number until click event 

   //Random assign numbers to each jewel between 1-12, randoms each game (use math random)
//Need an array for valid numbers to be assigned to jewels

   var jewelNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   //put something in front of math random line
   Math.floor(Math.random() * 13);

   //when game wins/lose,restarts game and resets random number/user counter

   //need if and else statements for wins/loses
   if (result === randomNumber) {
      wins++;
      $("#win-lose").html("<h2>Winner!</h2>");
      $("#wins").html(`<h3>${wins}</h3>`);
    }

    else {
      losses++;
      $("#win-lose").html("<h2>Loser!</h2>");
      $("#losses").html(`<h3>${losses}</h3>`);
      document.getElementById("losses").innerHTML = `<h3>${losses}</h3>`;
    }
   //Need to add function for crystals

   //track wins and loses

