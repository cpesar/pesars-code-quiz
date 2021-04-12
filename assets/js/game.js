//array of questions for the quiz
var quizQuestions = [
  {
  question: 'What are global scope variables?',
  answers: [
     'Variables declared inside of a function',
     'Variables declared outside of a function',
     'Variables that any function can access',
     'Both a & c'
  ],
  correctAnswer: 'Both a & c'
  },


  {
  question: 'What are local scope variables?',
  answers: [
     'Variables that can only be accessed within the scope of the function',
     'Variables that can be accessed outside of a function',
     'Variables that any function can access',
  ],
  correctAnswer: 'Variables that can only be accessed within the scope of the function'
  },


  {
  question: 'What does Math.floor() do?',
  answers: [
     'Rounds up',
     'Rounds down',
     'Rounds down to the nearest whole number',
     'Both a & c',
  ],
  correctAnswer: 'Both a & c'
  },


  {
  question: 'What does Math.random() do?',
  answers: [
    'Returns a random number',
    'Returns a random decimal number',
    'Returns a random decimal number between 0-1',
    'All of the above',
  ],
  correctAnswer: 'All of the above'
  },


  {
    question: 'What does Math.random() do?',
    answers: [
      'Returns a random number',
      'Returns a random decimal number',
      'Returns a random decimal number between 0-1',
      'All of the above',
  ],
    correctAnswer: 'All of the above'
  },
  

  {
    question: 'What does Math.max() do?',
      answers: [
        'Returns the smallest number',
        'Returns your name',
        'Returns your favorite baseball team',
        'Returns the largest number',
        ],
    correctAnswer: 'Returns the largest number'
  },


  {
    question: 'Consider the expression, var playerName = "Tony the Robot." What is playerName called?',
    answers: [
      'Value assigned to the variable',
      'Keyword',
      'Variable name',
      'None of the above',
    ],
    correctAnswer: 'variable name'
  },


  {
    question: 'What is an array?',
    answers: [
      'Stores data as a list',
      'Data can be numbers, strings, or booleans',
      'Variables that any function can access',
      'Both a & b',
    ],
    correctAnswer: 'both a & b'
  },


  {
    question: 'How do you find the last element in an array?',
    answers: [
      'variableName[variableName.length - 1]',
      'variableName[variableName.length] - 1',
      'variableName[variableName.Math.Random - 1]',
      'variableName(variableName.length - 1)'
    ],
    correctAnswer: 'variableName[variableName.length - 1]'
  },


  {
    question: 'In an array, where does the index position begin?',
    answers: [
      'One',
      'Zero',
      'One-hundred',
      'Five'
    ],
    correctAnswer: 'Zero'
  },

  {
    question: 'Consider the array [69, 62, -25, 103, 52]. What index position is 52',
    answers: [
      'One',
      'Zero',
      'Three',
      'Four'
    ],
    correctAnswer: 'Four'
  },


  {
    question: 'What does a for loop do',
    answers: [
      'Enable us to loop through an array, no matter the length',
      'Used whenever we need an operation done repetively',
      'Loops through a function',
      'Both a & b'
    ],
    correctAnswer: 'Both a & b'
  },


  {
    question: 'What does a for while loop do',
    answers: [
      'Enable us to loop through an array, no matter the length',
      'Loops repeatedly while a condition remains true',
      'Loops through a function',
      'Both a & b'
    ],
    correctAnswer: 'Loops repeatedly while a condition remains true'
  },


  {
    question: 'While loops and for loops are known as what',
    answers: [
      'Flow control statements',
      'Baseeball teams',
      'Loops through a function',
      'Both a & b'
    ],
    correctAnswer: 'Flow control statements'
  },


  {
    question: 'What are media queries',
    answers: [
      'Allow us to intruct some of the CSS styles only when a specific condition is met',
      'The styles will change when the webpage is viewed on different screen sizes',
      'Overrides the original rule stated',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },


  {
    question: 'What does break; do',
    answers: [
      'Allows us to exit the current loop',
      'Breaks the program',
      'Restarts the program',
      'All of the above'
    ],
    correctAnswer: 'Allows us to exit the current loop'
  },
];



//global variables

var timerState;
var time = quizQuestions.length*10;
var questionNumber = 0;

var questionsElement = document.getElementById("questions");
var timerElement = document.getElementById("time");
var choicesElement= document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtnElement = document.getElementById("start");
var initialsElement = document.getElementById("initials");
var feedbackElement = document.getElementById("feedback");


var scoreElement = document.getElementById('score');
var theScoresElement = document.getElementById('the-scores');
var scoresListElement = document.getElementById('scores-list');

var scores = [];
var score = 0;


//start timer function
function start(){
  var startScreen = document.getElementById('start-screen');

  startScreen.setAttribute('class', 'hide');
  questionsElement.removeAttribute('class');
  //update data state
  timerState = setInterval(function () {
    time --;
   //update user state
   timerElement.textContent = time;
    if (time === 0){
      quizEnd();
      console.log('Quiz is Over');
    }
  }, 1000);


  //update user state
  timerElement.textContent = time;

//call function that will grab question
showQuestion();

//set initial score to zero
setScore(0);
}


var showQuestion = function(){
  var currentQuestion = quizQuestions[questionNumber];

  var title = document.getElementById('question-title');
  title.textContent = currentQuestion.question

  choicesElement.innerHTML = '';

  currentQuestion.answers.forEach(function(option, index) {
    var choiceButton = document.createElement('button')
    choiceButton.setAttribute('value', option);
    choiceButton.setAttribute('class', 'choice');
    choiceButton.textContent = index + 1 + ':' + option;
    //check if question is right or wrong
    choiceButton.onclick = checkAnswer
    choicesElement.appendChild(choiceButton);

  });
};

function setScore(score) {
  scoreElement.innerText = score;
}



var checkAnswer =  function(){
  if (this.value !== quizQuestions[questionNumber].correctAnswer)
    {
      time = time - 10;
      timerElement.textContent = time;
      console.log('Wrong Answer!');
      
      //display in a feedback element textContent WRONG

    } else {
      score += 10;
      setScore(score);
      console.log('Correct!')
      
    }

    questionNumber++;

    if (questionNumber === quizQuestions.length){
      //quiz end function
      quizEnd();
      console.log('Quiz is over!');
    } else {
      showQuestion();
    }
};

// if(counter === quizQuestions.length){
  
// }



var quizEnd = function(){
  clearInterval(timerState);
  var showEndScreen = document.getElementById('end-screen');
  showEndScreen.removeAttribute('class');
  questionsElement.setAttribute('class', 'hide');
  getUserInitials();

}

startBtnElement.onclick = start;


//variables for localStorage function
var userInitialsSpan = document.querySelector('user-initials')

//localStorage function
var getUserInitials = function(){
  var lScores = localStorage.getItem('scores');

  if(lScores === null){
    return;
  }

  //set scores list to html
  scores = JSON.parse(localStorage.getItem('scores'));
  appendScores(scores);
  console.log('scores: ', scores);

};

var appendScores = function(scores){
  var lScoresList = '';
  scores.forEach((score) => {
    lScoresList += `
    <li>
      <h3>Initial: <span>${score.initials}</span></h3><h3>
      <h3>Score: <span>${score.score}</span></h3>
    </li>
    `;
  })
  theScoresElement.innerHTML = lScoresList;
}

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  if (initials === '') {
    alert('You must enter your initials!');
  } else {
    alert('Success!');
    scores.push({
      initials: initialsElement.value,
      score: score,
    });

  localStorage.setItem('scores', JSON.stringify(scores));
  appendScores(scores);

  }
});


