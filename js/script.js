var myQuestions = [
	{
		question: "Who is the first president of Indonesia?",
		answers: {
			a: 'Jokowi',
			b: 'Soeharto',
			c: 'Soekarno',
            d: 'B J Habibie'
		},
		correctAnswer: 'c'
	},
	{
		question: "Biggest continent in the world?",
		answers: {
			a: 'North America',
			b: 'South America',
			c: 'Asia',
            d: 'Europe'
		},
		correctAnswer: 'c'
	},
	{
		question: "Who invented telephone?",
		answers: {
			a: 'Graham Bell',
			b: 'Wright Brothers',
			c: 'Nicola Tesla',
            d: 'Albert Einstein'
		},
		correctAnswer: 'a'
	},
    {
		question: "Longest river in the world?",
		answers: {
			a: 'Mississippi River',
			b: 'Amazon River',
			c: 'Yangtze River',
            d: 'Nil River'
		},
		correctAnswer: 'd'
	},
    {
		question: "Biggest animal in the world?",
		answers: {
			a: 'Elephant',
			b: 'Blue Whale',
			c: 'Giraffe',
            d: 'Rhinoceros'
		},
		correctAnswer: 'b'
	},
    {
		question: "Biggest island in the world?",
		answers: {
			a: 'Kalimantan',
			b: 'Greenland',
			c: 'Sumatra',
            d: 'Jawa'
		},
		correctAnswer: 'b'
	},
    {
		question: "Capital city of Indonesia?",
		answers: {
			a: 'Jakarta',
			b: 'Surabaya',
			c: 'Bandung',
            d: 'Depok'
		},
		correctAnswer: 'a'
	},
    {
		question: "Smartest animal in the world?",
		answers: {
			a: 'Monkey',
			b: 'Dog',
			c: 'Dolphin',
            d: 'Chimpanzee'
		},
		correctAnswer: 'a'
	},
    {
		question: "Number of province in Indonesia?",
		answers: {
			a: '31',
			b: '32',
			c: '33',
            d: '34'
		},
		correctAnswer: 'd'
	},
    {
		question: "Current president of Indonesia?",
		answers: {
			a: 'Soekarno',
			b: 'Soeharto',
			c: 'Megawati',
            d: 'Jokowo'
		},
		correctAnswer: 'd'
	}
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        var output = [];
        var answers;
    
        for(var i=0; i<questions.length; i++){
            
            answers = [];
    
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + " " + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    showQuestions(questions, quizContainer);

	function showResults(questions, quizContainer, resultsContainer){
	
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;;
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = 'You got ' + numCorrect + ' out of ' + questions.length +
        ' question correct<br>'+'Click <a href="">here</a> to retake the quiz';
    }

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);