  // Pseudo-code
// When start button is clicked, remove welcome msg and append question 1
    // Add event listener
        // Activity 12
// Start timer
// User answer question
// Read chosen element, assess data value, compare to answer key
// For loop for the questions
    // If correct next question
    // If incorrect subtract 10 sec from timer
        // Activity
// End of quiz
// Add up user score
// Display input for my user to type their initials
// Second html and display user name and score
// Read object from local storage
    // Activity 24
// debugger

var timerEl = $("#timerEl");
var startButtonEl = $('#button-start');
var startingNumber = 60;
var answerEl = ["Michael", "Scranton", "Dwight", "Nard dog", "Colorado"];

var questionNumber = 0;

var questionsList = [
    {
        text: "who is the branch manager at dunder mifflin?",
        choices: ["Oscar", "Michael", "David", "Dwight"],
        correct: "Michael"
    },
    {
        text: "where does the office take place?",
        choices: ["New York City", "Scranton", "Austin", "Philadelphia"],
        correct: "Scranton"
    },
    {
        text: "who is the assistant to the regional manager?",
        choices: ["Dwight", "Jim", "Andy", "Ryan"],
        correct: "Dwight"
    },
    {
        text: "what is andys nickname?",
        choices: ["no nickname", "Tuna", "Nard dog", "Andy"],
        correct: "Nard dog"
    },
    {
        text: "What state did micahel and holly move to?",
        choices: ["New York", "Texas", "California", "Colorado"],
        correct: "Colorado"
    },
]


startButtonEl.on('click', letsPlay)
function letsPlay(){
    console.log("Button test");
    $("#Q").removeClass("d-none");
    timerStart();
    nextQuestion()
}

function timerStart(){
    setInterval(function () {
    if(startingNumber > 0){
    startingNumber = startingNumber -1
    timerEl.text(startingNumber);
    }
    }, 1000);
}

function nextQuestion() {
    $("#questionText").text(questionsList[questionNumber].text)
    $("#choice1").text(questionsList[questionNumber].choices[0])
    $("#choice2").text(questionsList[questionNumber].choices[1])
    $("#choice3").text(questionsList[questionNumber].choices[2])
    $("#choice4").text(questionsList[questionNumber].choices[3])
}
{
    $("#choice1").on("click", function() {
        questionNumber++;
        nextQuestion();
        console.log("choice1");
        if ("#choice1" === answerEl ){
            console.log('Correct');
        } else {
            console.log('Wrong');
            startingNumber = startingNumber -10;
        }
    })
    $("#choice2").on("click", function() {
        questionNumber++;
        nextQuestion();
        console.log("choice2");
        if ("#choice2" === answerEl [1]){
          
            console.log('Correct');
        } else {
         
            console.log('Wrong');
            startingNumber = startingNumber - 10;
        }
    })
    $("#choice3").on("click", function() {
        questionNumber++;
        nextQuestion();
        console.log("choice3");
        if ("#choice3" === answerEl [0]){
         
            console.log('Correct');
        } else {
          
            console.log('Wrong');
            startingNumber = startingNumber - 10;
        }
    })
    $("#choice4").on("click", function() {
        questionNumber++;
        nextQuestion();
        console.log("choice4");
        if ("#choice4" === answerEl){
       
            console.log('Correct');
        } else {
       
            console.log('Wrong');
            startingNumber = startingNumber - 10;
        }
    })
}