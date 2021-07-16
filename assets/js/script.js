// Global Variables //

var quiz = document.getElementById("quiz-container");
var results = [];
var getResultsbutton = document.getElementById("get-results");
var onQuestion = 0;
var timer;
var slideshows = document.querySelector

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


