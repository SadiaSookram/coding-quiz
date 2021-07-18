// Global Variables //

var quiz = document.getElementById("quiz-container");
var getResultsbutton = document.getElementById("get-results");
var onQuestion = 0;
var timer  = document.getElementById("timer")
var timeLeft = 500;
var score = 0;
var results= [];

// Quiz Questions //

var quizQuestions = [
    {
        question: "What is considered the (Skeleton) of every webpage ?",
        answers: ["CSS", "JAVASCRIPT", "HTML", "GIT"],
        correct: 3
    },
    {
        question: "What is the <Title> tag used for ?",
        answers: ["Write in Nav bar", "Input page Title", "As a comment in code", "To copyright the page"],
        correct: 2
    },
    {
        question: "Which is the correct closing tag for this <div> tag ?",
        answers: ["</div>", "<div/>", "<div>/", "/<div>"],
        correct: 1
    },
    {
        question: "What does the abbreviation DRY stand for ?",
        answers: ["Do Not Rewrite Yes", "Donuts R Yummy ", "Don't Repeat Yourself", "Do Repeat Yourself"],
        correct: 3
    },
    {
        question: "What styles a webpage ?",
        answers: ["CSS", "JAVASCRIPT", "HTML", "GIT"],
        correct: 1
    }
];

// Adding timer through quiz

function quizTimer() {
    timeLeft = timeLeft - 1;
    if (timeLeft < 500) {
        timerSeconds.innerHTML = timeLeft;
    }
    if (timeLeft < 1) {
       timerSecondswindow.clearInterval(update);
 }
}
update = setInterval("quizTimer()" , 1000)

// if the user selets next run the quiz 
var quiz = document.getElementById("heading");

// For loop through questions 
 for(var i=0; i < quizQuestions.length; i++ ) {
 

}
     

    
 







