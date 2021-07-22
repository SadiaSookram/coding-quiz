// Global Variables //

var quiz = document.getElementById("quiz-container");
var getResultsbutton = document.getElementById("get-results");
var timer  = document.getElementById("timer")
var score = 0;
var results = [];
var onQuestion = 0;
var answers = [randomNum];
var randomNum = Math.floor(Math.random()*5)
var timeLeft = "-"
// Quiz Questions //

var quizQuestions = [
    {
        question: "What is considered the (Skeleton) of every webpage ?",
        answers: ["CSS", "JAVASCRIPT", "GIT", "HTML"],
        correct: 4
        
    },
    {
        question: "What is the Title tag used for ?",
        answers: ["Write in Nav bar", "To copyright the page" , "As a comment in code", "Input page Title"],
        correct: 4
    },
    {
        question: "Where do you add button functions ?",
        answers: [ "JAVA","CSS", "HTML", "JAVASCRIPT"],
        correct: 4
    },
    {
        question: "What does the abbreviation DRY stand for ?",
        answers: ["Do Not Rewrite Yes", "Donuts R Yummy ", "Do Repeat Yourself", "Don't Repeat Yourself"],
        correct: 4
    },
    {
        question: "What styles a webpage ?",
        answers: ["GIT", "JAVASCRIPT", "HTML", "CSS"],
        correct: 4
    }
];

console.log(quizQuestions[0]);
console.log(quizQuestions[1]);
console.log(quizQuestions[2]);
console.log(quizQuestions[3]);
console.log(quizQuestions[4]);


// if the user selets next run the quiz 
var quiz = document.getElementById("quizcontent");
var next = document.getElementById("nextButton").addEventListener("click", quizExecute);

// Creating quiz function
function quizExecute () {

    timeLeft = 500;

     if  (onQuestion >= quizQuestions.length){
     window.alert("End of Quiz!");
     window.prompt("Please enter your initials !")
     return score 
    }else{
    
    console.log(onQuestion);
   // Display question from array
    document.getElementById("quizcontent").innerHTML
     = quizQuestions[onQuestion].question
    
   // Clear out dive once function is ran again
     document.getElementById("choices").innerHTML = ""
    
     // create buttons for answer choices
    for (var i =0; i < 4; i++){ 
    var choices = document.createElement("button");
    choices.setAttribute("answers", answers[i]);
    choices.innerText = quizQuestions[onQuestion].answers[i];
    choices.id = "answerChoice"
    document.getElementById("choices").appendChild(choices);
    choices.addEventListener("click" , function (){
        //Clear timer interval
        window.clearInterval(update);
        timeLeft= ""
}
 
)}};
    // Increment question to display next question
onQuestion++
};

choices.addEventListener("click",correctAnswers);
//Check answer Function
function correctAnswers () {
    var timeLeft = 500;
  if( answerChoice === [quizQuestions].correct){
     score++;
     console.log(score)
} else {
    timeLeft =- 0;
    timerSeconds.innerHTML = timeLeft;
    
    
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
       window.prompt ("Please Enter Your initials!");
    }
   
}
update = setInterval("quizTimer()" , 1000);



    
    
 







