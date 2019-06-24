//link to game from landing page
function pageTwo() {
    location.replace("./gameplay.html")
}
//link back to landing page "start over"
function pageOne() {
    location.replace("index.html")
}
//array for alphabet
const wordArrays =[ ["B","O","O","G","E","Y","M","A","N"],
["G","H","O","S","T","S"],["Z","O","M","B","I","E","S"]]

let randomArray = Math.floor((Math.random()*(wordArrays.length-1)));

let wordArray = wordArrays[random];

let userGuess = new Array(wordArray.length);

let wrongAnswer = 0;

for (var i = 0; i < userGuess.length; i++){
	userGuess[i] = "_ ";
}

function displayUserGuess(){
	for (var i = 0; i < userGuess.length; i++){
	let guessBox = document.getElementById("guessBox");
	let letterShow = document.createTextNode(userGuess[i]);
	userGuess.appendChild(letterShow);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
let checkLetter = function(){
	let form  = document.entry; 
	let b = form.elements["guessSelect"]; 
	let characters = b.value; 
	characters = characters.toUpperCase();
	for (var i = 0; i < wordArray.length; i++){
		if(wordArray[i] === characters){
			userGuess[i] = characters + " ";
			let correct = true;
		}
	b.value = "";
	}}

//deletes the guessfield and replaces it with the new one 
let guessBox = document.getElementById("guessBox");
guessBox.innerHTML=""; 
printUserGuess();
