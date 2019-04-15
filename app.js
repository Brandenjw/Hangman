//link to game from landing page
function pageTwo() {
    location.replace("./gameplay.html")
}
//link back to landing page "start over"
function pageOne() {
    location.replace("index.html")
}
//array for alphabet
const alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//creates a div for each letter typed and displays it on screen
for(var i = alphabetArray.length - 1; i >= 0; i--){
    $(".alphabetList").prepend("<div class='lettersType'>" + alphabetArray[i] + "</div>")
}
let word = ["b","o","o","g","e","y","m","a","n"]
let correctLetters = [] 
for(let i = 0 ; i < word.length; i++){
    correctLetters.push("-")
    // console.log(correctLetters)
}
console.log(correctLetters)
// $(".keyEntry").append(correctLetters)


$(".alphabetList").on("click", ".lettersType", ()=>{
    let value = $(event.target).html()
    
    //this allows for only letters in keyword to be typed

    // for(let i = 0 ; i < word.length; i++){

        if(value === word[i]){
            let splice = correctLetters.splice(`${i}, ${1}, ${value}`)
            correctLetters.push(splice)
            $(".keyEntry").append(splice)
            console.log(splice)
           console.log(value)


        // }
    //    else{
    //         console.log("wrong letter = " + value)
        }
    // }
    // console.log(correctLetters)
    $(".usedLets").append("<p class='wrongOnes'>" + value + "</p>")
    }
)
// replaceChildText(document.getElementsByClassName('correctWord'),'findText','replacement');

// const guessedWord = function (keyWords, userImput) {
//     // if(userImput)

//     var keyWords = ['b', 'o', 'g', 'e', 'y', 'm', 'a', 'n'];

//     for (let i = 0; i > keyWords.length; i++) {
//         var key = keyWords[i].toLowerCase();
// i
//     }

// }
// var rightAnswer = [];
// for (var i = 0; i < word.length; i++) {

//     rightAnswer[i] = "_";
// }
// console.log(rightAnswer)






// function ghostWords(){
//     onclick="document.getElementsbyId"('array').style.display='block';
// }
//this is array for letters incorrect and not in keyword
var usedLetters = [];
//this is array of words to be used in game
// var keyWords = ["banshee", "bogeyman", "ghost", "gargoyle", "mummy", "titan", "undead"]
//this allows for words to be chosen at random
// var randomWord = keyWords[Math.floor(Math.random() * keyWords.length)];
//this accounts for number of letters per word on screen
//displays guesses left
// var lettersLeft = randomWord.length;

// while(lettersLeft > 0){
// let heyYou = prompt("guess a type of monster");
// }
// if()
