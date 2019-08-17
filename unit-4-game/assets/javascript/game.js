$( document ).ready(function(){

// Generate random number to guess
var randNum = Math.floor(Math.random()*102+19)

// Generate random number for each crystal
var num1 = Math.floor(Math.random()*12+1)
var num2 = Math.floor(Math.random()*12+1)
var num3 = Math.floor(Math.random()*12+1)
var num4 = Math.floor(Math.random()*12+1)

// Variables to keep track of wins, losses and player score
var playerScore= 0; 
var wins= 0;
var losses = 0;

// Display 0 wins, losses, player score at beginning of game
$('#wins').text(wins);
$('#losses').text(losses);
$('#totalScore').text(playerScore);

// Display random number
$('#scoreToMatch').text(randNum);

// Display wins
function winner(){
    alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
}

// Display losses
function loser(){
    alert ("You lost!");
    losses++;
    $('#losses').text(losses);
    reset()
}

// Reset Game
function reset(){
    randNum = Math.floor(Math.random()*102+19);
    $('#scoreToMatch').text(randNum);
    num1 = Math.floor(Math.random()*12+1);
    num2 = Math.floor(Math.random()*12+1);
    num3 = Math.floor(Math.random()*12+1);
    num4 = Math.floor(Math.random()*12+1);
    playerScore = 0;
    $('#totalScore').text(playerScore);
}

// Click on crystals
$('.red').on ('click', function(){
    playerScore = playerScore + num1;
    // Display player score
    $('#totalScore').text(playerScore); 
    if (playerScore == randNum){
    winner();
    }
    else if ( playerScore > randNum){
    loser();
    }      
})  

$('.blue').on ('click', function(){
    playerScore = playerScore + num2;
    // Display player score
    $('#totalScore').text(playerScore); 
    if (playerScore == randNum){
      winner();
    }
    else if ( playerScore > randNum){
      loser();
    } 
})  

$('.yellow').on ('click', function(){
    playerScore = playerScore + num3;
    // Display player score
    $('#totalScore').text(playerScore);
    if (playerScore == randNum){
      winner();
    }
    else if ( playerScore > randNum){
      loser();
    } 
})

$('.green').on ('click', function(){
    playerScore = playerScore + num4;
    // Display player score
    $('#totalScore').text(playerScore); 
    if (playerScore == randNum){
      winner();
    }
    else if ( playerScore > randNum){
      loser();
    }
});   

 

});
