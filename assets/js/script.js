// Global Variables //

var quiz = document.getElementById("quiz-container");
var getResultsbutton = document.getElementById("get-results");
var timer  = document.getElementById("timer")
var score = 0;
var results= [];
var onQuestion = 0;
var answers = [];
var timeLeft= 500;

// Quiz Questions //

var quizQuestions = [
    {
        question: "What is considered the (Skeleton) of every webpage ?",
        answers: ["CSS", "JAVASCRIPT", "HTML", "GIT"],
        correct: 3
        
    },
    {
        question: "What is the Title tag used for ?",
        answers: ["Write in Nav bar", "Input page Title", "As a comment in code", "To copyright the page"],
        correct: 2
    },
    {
        question: "Where do you add button functions ?",
        answers: [ "Jave","JavaScript", "HTML", "CSS"],
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

console.log(quizQuestions[0]);
console.log(quizQuestions[1]);
console.log(quizQuestions[2]);
console.log(quizQuestions[3]);
console.log(quizQuestions[4]);


// if the user selets next run the quiz 
var quiz = document.getElementById("quizcontent");
var next = document.getElementById("nextButton");


// Creating quiz function
function quizExecute () {
    if (onQuestion >= quizQuestions.length){
     window.alert("End of Quiz!")
     return score 
    }else{
    
    console.log(onQuestion);
   // Display question from array
    document.getElementById("quizcontent").innerHTML
     = quizQuestions[onQuestion].question
    
   // Clear out dive once function is ran again
     document.getElementById("choices").innerHTML = ""
    // create buttons for answer choices
    for (var i =0; i < 4 ; i++){
    var choices = document.createElement("button");
    choices.setAttribute("answers", answers[i]);
    choices.innerText = quizQuestions[onQuestion].answers[i];
    document.getElementById("choices").appendChild(choices);
}
    // Increment question to display next question
onQuestion++
}};

//Check answer Function
var correctAnswers = function() {
    if(choices.answer === quizQuestions[0,1,2,3,4].answer){
     score++;
} else {
    timeLeft -= 10;

} 
}
// Adding timer through quiz

function quizTimer() {
    
     timeLeft = timeLeft - 1;
    if (timeLeft < 500) {
        timerSeconds.innerHTML = timeLeft;
    }
    if (timeLeft < 1) {
       window.clearInterval(update);
       window.alert ("Times up !");
       
 }
};
update = setInterval("quizTimer()" , 1000)
    

     

    
 







