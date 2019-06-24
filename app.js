//link to game from landing page
function pageTwo() {
    location.replace("./gameplay.html")
}
//link back to landing page "start over"
function pageOne() {
    location.replace("index.html")
}
//array for keywords
const wordArrays =['boogeyman', 'ghosts', 'zombie', 'outbreak'];

let randomWord = [Math.floor(Math.random() * wordArrays.length)];
let exactWord = wordArrays[randomWord];
console.log(exactWord)

let answerArray = [];

let underScore = () => {
    for (let i = 0; i < exactWord.length; i++) {
        answerArray.push('_');
    } 
    return answerArray;
}
console.log(underScore());


// let wordArray = wordArrays.random;

// let userGuess = new Array(wordArray.length);

// let wrongAnswer = 0;

// for (var i = 0; i < userGuess.length; i++){
// 	userGuess[i] = "_ ";
// }

// function displayUserGuess(){
// 	for (var i = 0; i < userGuess.length; i++){
// 	let guessBox = document.getElementById("guessBox");
// 	let letterShow = document.createTextNode(userGuess[i]);
// 	userGuess.appendChild(letterShow);
// 	}
// }

// //checks if the the letter provided by the user matches one or more of the letters in the word
// let checkLetter = function(){
// 	let form  = document.entry; 
// 	let fill = form.elements["guessEntry"]; 
// 	let characters = fill.value; 
// 	characters = characters.toUpperCase();
// 	for (var i = 0; i < wordArray.length; i++){
// 		if(wordArray[i] === characters){
// 			userGuess[i] = characters + " ";
// 			let correct = true;
// 		}
// 	b.value = "";
// 	}}

// let guessBox = document.getElementById("guessBox");
// guessBox.innerHTML=""; 
// printUserGuess();

// //checks if all letters have been found
// let final = true;
// for (var i = 0; i < userGuess.length; i++){
//     if(userGuess[i] === "_ "){
//         final = false;
//     }
// }
// if(final){
//     window.alert("You win!");
// }

// if(final === 6){
//     window.alert("You have DIED.");
// }

// function init(){
// 	printUserGuess();
// }

// window.onload = init;