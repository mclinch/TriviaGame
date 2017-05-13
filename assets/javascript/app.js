$(document).ready(function() {


function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
};

initialScreen();

$("body").on("click", ".start-button", function(event){
	generateHTML();
	timerWrapper();
}); 

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		clearInterval(theClock);
		generateWin();
		
	} else {
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<h2 class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>";// + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<h2 class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>";// + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000); 
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<h2 class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>";// + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><h2 class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 20;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(twentySeconds, 1000);
	function twentySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<h2 class='text-center'>All done, here's how you did!" + "</p>" + "<h2 class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<h2>Wrong Answers: " + incorrectTally + "</p>" + "<h2>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 20;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 20;

var questionArray = [	"What is the 2nd highest mountain peak in the world?", 
						"What is the second longest river in the world?", 
						"Who was the second president of the United States of America?", 
						"What is the second largest United State by total area?", 
						"What is the second longest river in the United States of America?", 
						"Who is the second fastest man in the world?", 
						"What is the second most populated country in the world?", 
						"What is the second largest continent by total area?"
						];

var answerArray = [		["K2 (Mount Godwin-Austen)", "Mount Everest", "Kangchenjunga", "Lhotse"], 
						["Amazon River","Nile","Yangtze","Yellow River"], 
						["George Washington", "Thomas Jefferson", "John Adams", "James Madison"], 
						["Montana","Alaska","Texas","California"], 
						["Mississippi River", "Missouri River", "Yukon River", "Rio Grande"], 
						["Yohan Blake","Asafa Powell","Usain Bolt","Justin Gatlin"], 
						["China", "India", "United States", "Indonesia"], 
						["Asia","North America","South America","Africa"] 
						];
var correctAnswers = [	"A. K2 (Mount Godwin-Austen)", 
						"B. Nile", 
						"C. John Adams", 
						"C. Texas", 
						"A. Mississippi River", 
						"A. Yohan Blake", 
						"B. India", 
						"D. Africa"
						];

var questionCounter = 0;
var selectedAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;



	















