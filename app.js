//link to game from landing page
function pageTwo() {
  location.replace("./gameplay.html");
}
//link back to landing page "start over"
function pageOne() {
  location.replace("index.html");
}
//array for keywords
const wordArrays = [ "ghost", "zombie", "outbreak", "fear", "run", "hide"];
let yes = [];
let no = [];
let answerArray = [];
let randomWord = [Math.floor(Math.random() * wordArrays.length)];
let exactWord = wordArrays[randomWord];
console.log(exactWord);

let letterDash = document.getElementsByClassName('under');
let correctWord = document.getElementsByClassName('correct');
let wrongWord = document.getElementsByClassName('wrong');



let underScore = () => {
  for (let i = 0; i < exactWord.length; i++) {
    answerArray.push("_");
    // letterDash[0].innerHTML = answerArray.join(' ');
  }
  return answerArray;
};
// console.log(underScore());

document.addEventListener("keypress", event => {
  // console.log(event);
  let key = event.keyCode;
  let letterPress = String.fromCharCode(key);
  // console.log(letterPress);
  if (exactWord.indexOf(letterPress) > -1) {
    // console.log(true);
    yes.push(letterPress);
    
    
    answerArray[exactWord.indexOf(letterPress)] = letterPress;
    letterDash[0].innerHTML = answerArray.join(' ');
    correctWord[0].innerHTML = yes;
    if(answerArray.join('') == exactWord) {
        alert('YOU WIN');
    }
}
else {
    no.push(letterPress);
    wrongWord[0].innerHTML = no;
    alert('YOU LOSE')
}
});

letterDash[0].innerHTML = underScore().join(' ');


