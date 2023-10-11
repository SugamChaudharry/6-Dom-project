let randomNumber = parseInt((Math.random()*100+1));

const submitEl = document.querySelector("#subt");
const userInputEl = document.querySelector("#guessField");
const preGuessesEl = document.querySelector(".preGuesses");
const remGuessesEl = document.querySelector(".remGuesses");
const lowOrHiEl = document.querySelector(".lowOrHi");
const startOverEl = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submitEl.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInputEl.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("plz enter a valied number")
    }else if ( guess < 1) {
        alert("plz enter a valied number")
    } else if (guess > 100) {
        alert("plz enter a valied number")
    }else{
        prevGuess.push(guess)
        if (numGuess>10) {
            displayGuess(guess);
            displayMessage(`game Over. random number was ${randomNumber}`);
            endGame();
        }else{
            checkGuess(guess);
            displayGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`bulkul shahi pakde hai`)
    }else if (guess < randomNumber) {
        displayMessage(`our uper lodu`)        
    } else {
        displayMessage(`bhai tune very very bada number leliya bc`);   
    }
}

function displayGuess(guess) {
    userInputEl.value = ''
    preGuessesEl.innerHTML += `${guess} `
    numGuess++
    remGuessesEl.innerHTML = `${12 - numGuess}`
}

function displayMessage(message) {
    lowOrHiEl.innerHTML =  `<h2> ${message} <h2/>`;
}

function endGame(){
    userInputEl.setAttribute('disabled', '');
    submitEl.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML =  `<h2 class = "newGame"> Start new game <h2/>`
    startOverEl.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(params) {
    const newBtn = document.querySelector('.newGame')
    newBtn.addEventListener('click' , ()=>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    preGuessesEl.innerHTML = ''
    remGuessesEl.innerHTML = `${12 - numGuess -1}`;
    displayMessage(``);
    userInputEl.removeAttribute('disabled')
    startOverEl.removeChild(p);
    playGame = true;
    });

}
