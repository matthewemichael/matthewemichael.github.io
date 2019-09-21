$( document ).ready(function() {

// Initial values
let counter = 30;
let currentQuestion = 0;
let wins = 0;
let losses = 0;
let unanswered = 0;
let timer;

// When time expires go to next question
function nextQuestion() {
    const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOver) {
        //
        displayResults();
        console.log("game over")
    }
    else {
        currentQuestion++;
        $('#game-running').prepend("<div class='col-sm-12' id='time'>");
        loadQuestion();
    }
}

// Stop timer
function timeUp() {
    clearInterval(timer);
    unanswered++;
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    
    $('#time').remove();
    $('#game').html(`
        <h2>Time is Up!</h2>
        <h4>The correct answer was ${correctAnswer} </h4>
    `);

    setTimeout(nextQuestion, 3000);
}

// Start a 30 second timer for each question
function countDown() {
    counter--;

    $('#time').html(`
        <h5>:${counter}</h5><p>
    `)
    if (counter === 0) {
        timeUp();
    }
}

// Display the question and answers in the browser
function loadQuestion() {
    counter = 30;
    timer = setInterval(countDown, 1000);

    const question = quizQuestions[currentQuestion].question; 
    const answers = quizQuestions[currentQuestion].answers; 

    $('#time').html(`
        <h5>:${counter}</h5><p>
    `)    
    $('#game').html(`
        <h4>${question}</h4><br>
        ${loadAnswers(answers)}
    `);
}

function loadAnswers(answers){
    let result = '';
    for (let i = 0; i < answers.length; i++) {
        result += `<p class="choice animated bounceInUp" data-answer="${answers[i]}">${answers[i]}</p>`
    }

    return result;
};

// Display wins, losses and unanswered question stats at the end of the game
function displayResults() {
    const result = `
        <h2 class="animated jackInTheBox">Game Summary</h2>
        <p>Out of ${quizQuestions.length} questions...</p>
        <p>You got ${wins} question(s) correct</p>
        <p>You incorrecty answered ${losses} question(s)<p>
        <p>You didn't answer ${unanswered} question(s)<p>
        <button class="btn btn-primary reset animated pulse">Play Again</button>
    `;
    $('#time').remove();
    $('#game').html(result);
}

// If right or wrong answer selected go to next question
$(document).on('click', '.choice', function() {
    clearInterval(timer);
    const selectedAnswer = $(this).attr('data-answer');
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    const correctImage = quizQuestions[currentQuestion].correctImage;

    if (correctAnswer === selectedAnswer) {
        wins++
        $('#time').remove();
        $('#game').html(`
            <h2 class="animated jackInTheBox">Correct!</h2>
            <img class="answerImg" src="${correctImage}" />
        `);
        
        setTimeout(nextQuestion, 3000); 
    }
    else {
        losses++
        $('#time').remove();
        // Display image and incorrect guess message
        $('#game').html(`
            <h2 class="animated jackInTheBox">Wrong!</h2>
            <h4>The correct answer was ${correctAnswer} </h4>
            <img class="wrongImg" src="assets/images/wrong.png" />
        `);

        setTimeout(nextQuestion, 3000)
    }
});

// Reset Game
$(document).on('click', '.reset', function() {
     counter = 30;
     currentQuestion = 0;
     wins = 0;
     losses = 0;
     unanswered = 0;
     timer = null;
     $('#game-running').prepend("<div class='col-sm-12' id='time'>");
     loadQuestion();
});

// Start Game
$('.start').click(function()  {
    $('#game-start').remove();
    $('.container').css("background-color", "white");
    $('.container').append("<div class='row' id='game-running'>");
    $('#game-running').append("<div class='col-sm-12' id='time'>", "<div class='col-sm-12' id='game'>");
    loadQuestion();
});



});