//array of questions for the quiz
  var quizQuestions = [
    {
    question1: 'What are global scope variables?',
    answers: {
      a: 'Variables declared inside of a function',
      b: 'Variables declared outside of a function',
      c: 'Variables that any function can access',
      d: 'Both a & c'
    },
    correctAnswer: 'd'
    },

    {
    question2: 'What are local scope variables?',
    answers: {
      a: 'Variables that can only be accessed within the scope of the function',
      b: 'Variables that can be accessed outside of a function',
      c: 'Variables that any function can access',
    },
    correctAnswer: 'a'
    },

    {
    question3: 'What does Math.floor() do?',
    answers: {
      a: 'Rounds up',
      b: 'Rounds down',
      c: 'Rounds down to the nearest whole number',
      d: 'Both a & c',
    },
    correctAnswer: 'd'
    },

    {
      question4: 'What does Math.random() do?',
      answers: {
        a: 'Returns a random number',
        b: 'Returns a random decimal number',
        c: 'Returns a random decimal number between 0-1',
        d: 'All of the above',
      },
      correctAnswer: 'd'
      },

    {
      question5: 'What does Math.max() do?',
      answers: {
        a: 'Returns the smallest number',
        b: 'Returns your name',
        c: 'Returns your favorite baseball team',
        d: 'Returns the largest number',
      },
      correctAnswer: 'd'
    },

    {
      question6: 'Consider the expression, var playerName = "Tony the Robot." What is playerName called?',
      answers: {
        a: 'Value assigned to the variable',
        b: 'Keyword',
        c: 'Variable name',
        d: 'None of the above',
      },
      correctAnswer: 'c'
    },

    {
      question7: 'What is an array?',
      answers: {
        a: 'Stores data as a list',
        b: 'Data can be numbers, strings, or booleans',
        c: 'Variables that any function can access',
        d: 'Both a & b',
      },
      correctAnswer: 'd'
    },

    {
      question8: 'How do you find the last element in an array?',
      answers: {
        a: 'variableName[variableName.length - 1]',
        b: 'variableName[variableName.length] - 1',
        c: 'variableName[variableName.Math.Random - 1]',
        d: 'variableName(variableName.length - 1)'
      },
      correctAnswer: 'a'
    },


    {
      question9: 'In an array, where does the index position begin?',
      answers: {
        a: '1',
        b: '0',
        c: '100',
        d: '-1'
      },
      correctAnswer: 'b'
    },


    {
      question10: 'Consider the array [69, 62, -25, 103, 52]. What index position is 52',
      answers: {
        a: '1',
        b: '0',
        c: '3',
        d: '4'
      },
      correctAnswer: 'd'
    },


    {
      question11: 'What does a for loop do',
      answers: {
        a: 'Enable us to loop through an array, no matter the length',
        b: 'Used whenever we need an operation done repetively',
        c: 'Loops through a function',
        d: 'Both a & b'
      },
      correctAnswer: 'd'
    },


    {
      question12: 'What does a for while loop do',
      answers: {
        a: 'Enable us to loop through an array, no matter the length',
        b: 'Loops repeatedly while a condition remains true',
        c: 'Loops through a function',
        d: 'Both a & b'
      },
      correctAnswer: 'b'
    },


    {
      question13: 'While loops and for loops are known as what',
      answers: {
        a: 'Flow control statements',
        b: 'Baseeball teams',
        c: 'Loops through a function',
        d: 'Both a & b'
      },
      correctAnswer: 'a'
    },


    {
      question14: 'What are media queries',
      answers: {
        a: 'Allow us to intruct some of the CSS styles only when a specific condition is met',
        b: 'The styles will change when the webpage is viewed on different screen sizes',
        c: 'Overrides the original rule stated',
        d: 'All of the above'
      },
      correctAnswer: 'd'
    },


    {
      question15: 'What does break; do',
      answers: {
        a: 'Allows us to exit the current loop',
        b: 'Breaks the program',
        c: 'Restarts the program',
        d: 'All of the above'
      },
      correctAnswer: 'a'
    },
  ];

  var showQuiz = function () {

  }


//timer that counts down from 120 seconds
function countdown () {
  var timeLeft = 240;
  var countdown = setInterval(function){
    document.getElementById('timer-display').innerHTML='00:' 
  }
}

