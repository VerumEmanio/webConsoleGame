/* //////
Game Overview
/////
The console will prompt the user with a randomly selected question and track the number of answers that are correct.
When prompted to answer the question, the user must be able to exit the game by typing 'exit'. All of the code
should be private in case a developer wants to use this game as a plugin.
*/

(function() {
var Question = function(theQuestion, choices, correctAnswer) {
    this.theQuestion = theQuestion,
    this.choices = choices,
    this.correctAnswer = correctAnswer
}

var qOne = new Question("What's your favorite meal of the day?", ["red", "blue", "dinner"], 2);
var qTwo = new Question("What's my name?", ["John", "Mitchell", "Susan"], 1);
var qThree = new Question("Are you smart?", ["Yes", "No"], 0);
var playAgain = true;
var score = 0;
var availableQuestions = [qOne, qTwo, qThree];

while (playAgain) {
    var correctAnswer = chooseQuestion(availableQuestions);
    var userResponse = prompt("Please pick the right answer.");
    checkAnswer(userResponse);
};

function chooseQuestion(q) {
    var el = Math.floor(Math.random() * 3);
    var questionToLog = q[el].theQuestion;
    var options = q[el].choices;
    console.log(questionToLog);
    for (var i = 0; i < options.length; i++) {
        console.log(i + " " + options[i]);
    }
    return q[el].correctAnswer;
}

function checkAnswer(userResponse) {
    if (userResponse == correctAnswer) {
        console.log("You're right!");
        score += 1;
        displayScore();
    } else if (userResponse == "exit" || userResponse == null) {
        console.log("Thanks for playing!");
        displayScore();
        playAgain = false;
    } else {
        console.log("Sorry, you're wrong.");
        displayScore();
    }
}

function displayScore() {
    console.log("Your score is: " + score);
}
})();
