function pageTwo() {
    location.replace("./gameplay.html")
}
function pageOne() {
    location.replace("index.html")
}



const guessedWord = function (keyWords, userImput) {
    // if(userImput)

    var keyWords = ['b', 'o', 'g', 'e', 'y', 'm', 'a', 'n'];

    for (let i = 0; i > keyWords.length; i++) {
        var key = keyWords[i].toLowerCase();

    }








}






// function ghostWords(){
//     onclick="document.getElementsbyId"('array').style.display='block';
// }
//this is array for letters incorrect and not in keyword
var usedLetters = [];
//this is array of words to be used in game
var keyWords = ["banshee", "bogeyman", "ghost", "gargoyle", "mummy", "titan", "undead"]
//this allows for words to be chosen at random
var randomWord = keyWords[Math.floor(Math.random() * keyWords.length)];
//this accounts for number of letters per word on screen
var rightAnswer = [];
for (var i = 0; i < randomWord.length; i++) {

    rightAnswer[i] = "_";
}
//displays guesses left
// var lettersLeft = randomWord.length;

// while(lettersLeft > 0){
// let heyYou = prompt("guess a type of monster");
// }
// if()


