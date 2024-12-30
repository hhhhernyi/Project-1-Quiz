// question bank for the game 
const games = {
bank: 0,
question: {
  q1: {
    cat1:{name: 'cat1.1', question: 'question1.1', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat2:{name: 'cat1.2', question: 'question1.2', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat3:{name: 'cat1.3', question: 'question1.3', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat4:{name: 'cat1.4', question: 'question1.4', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
  },
  q2:{
    cat1:{name: 'cat2.1', question: 'question2.1', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat2:{name: 'cat2.2', question: 'question2.2', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat3:{name: 'cat2.3', question: 'question2.3', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat4:{name: 'cat2.4', question: 'question2.4', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
  },
  q3:{
    cat1:{name: 'cat3.1', question: 'question3.1', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat2:{name: 'cat3.2', question: 'question3.2', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat3:{name: 'cat3.3', question: 'question3.3', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat4:{name: 'cat3.4', question: 'question3.4', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
  },
  q4:{
    cat1:{name: 'cat4.1', question: 'question4.1', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat2:{name: 'cat4.2', question: 'question4.2', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat3:{name: 'cat4.3', question: 'question4.3', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
    cat4:{name: 'cat4.4', question: 'question4.4', correctAns: 'correct answer', wrongAns1:'wrong answer',wrongAns2:'wrong answer',wrongAns3:'wrong answer'},
  }
}
}

// button functions for the game
const button1 = document.querySelector("#answer1");
button1.addEventListener("click", clickFunction);
const button2 = document.querySelector("#answer2");
button2.addEventListener("click", clickFunction);
const button3 = document.querySelector("#answer3");
button3.addEventListener("click", clickFunction);
const button4 = document.querySelector("#answer4");
button4.addEventListener("click", clickFunction);
const buttonQuit = document.querySelector("#quit");
buttonQuit.addEventListener("click", clickFunction);

function clickFunction(event) {
  const button = event.target;
  //console.log(button.textContent);
  button.classList.add("choose");
  setTimeout(function () {
    //your code to be executed after 1 second
    button.classList.remove("choose");
  }, 100);

  console.log(`${button.textContent} is pressed`);
}

// once we press start, we want the home page gone and the game page to show
// once we press instructions, we want to go to the instructions page
// pressing the back button on instructions page brings us back to home page

const gamePage = document.querySelector("#gamePage");
const homePage = document.querySelector("#homePage");
const instructionPage = document.querySelector("#instructionsPage");

homePage.style.display = "flex";
gamePage.style.display = 'none';
instructionPage.style.display='none';

function showGamePage() {
  if (gamePage.style.display === "none") {
    gamePage.style.display = "flex";
    homePage.style.display = "none"
  }
}
function showInstructionPage() {
  if (instructionPage.style.display === "none") {
    instructionPage.style.display = "flex";
    homePage.style.display = "none"
  } 
}
function backToHome() {
  if (homePage.style.display === "none") {
    homePage.style.display = "flex"
    instructionPage.style.display = "none";
    
  }
}
const startButtonEl = document.querySelector('#startGame');
startButtonEl.addEventListener('click',showGamePage);
const instructionsButton = document.querySelector("#instructionsButton");
instructionsButton.addEventListener('click',showInstructionPage);
const backButtonEl=document.querySelector('#backToHome');
backButtonEl.addEventListener('click', backToHome);



// toggle the sound button on and off
const soundButtonEl = document.querySelector("#soundButton");
let soundOn=true;
soundButtonEl.addEventListener('click', toggleSound);
function toggleSound() {
  if (soundOn) {
    soundOn=false;
    soundButtonEl.textContent='Sound: Off'
  } else {
    soundOn=true;
    soundButtonEl.textContent='Sound: On'
  }
}


