// question bank for the game
const games = {
  bank: 0,
  question: [
    (q1 = {
      bank: "$0",
      cat1: {
        name: "Politics",
        question: "Who is Singapore's longest serving Prime minister",
        correctAns: "Lee Kuan Yew",
        wrongAns1: "Goh Chok Tong",
        wrongAns2: "Lee Hsien Loong",
        wrongAns3: "Lawrence Wong",
      },
      cat2: {
        name: "History",
        question: "From which Country did Singapore Gain Independence in 1965?",
        correctAns: "Malaysia",
        wrongAns1: "Indonesia",
        wrongAns2: "Thailand",
        wrongAns3: "Myanmar",
      },
      cat3: {
        name: "Geography",
        question: "What is The Name of Singapore's Highest Point?",
        correctAns: "Bukit Timah Hill",
        wrongAns1: "West Coast Hill",
        wrongAns2: "Redhill",
        wrongAns3: "Mount Jurong",
      },
      cat4: {
        name: "Dates",
        question: "When is Singapore's national day?",
        correctAns: "August 9th",
        wrongAns1: "October 14th",
        wrongAns2: "June 1st",
        wrongAns3: "April 20th",
      },
    }),
    (q2 = {
      bank: "$10000",
      cat1: {
        name: "cat2.1",
        question: "question2.1",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat2: {
        name: "cat2.2",
        question: "question2.2",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat3: {
        name: "cat2.3",
        question: "question2.3",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat4: {
        name: "cat2.4",
        question: "question2.4",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
    }),
    (q3 = {
      bank: "$25000",
      cat1: {
        name: "cat3.1",
        question: "question3.1",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat2: {
        name: "cat3.2",
        question: "question3.2",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat3: {
        name: "cat3.3",
        question: "question3.3",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat4: {
        name: "cat3.4",
        question: "question3.4",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
    }),
    (q4 = {
      bank: "$50000",
      cat1: {
        name: "cat4.1",
        question: "question4.1",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat2: {
        name: "cat4.2",
        question: "question4.2",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat3: {
        name: "cat4.3",
        question: "question4.3",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat4: {
        name: "cat4.4",
        question: "question4.4",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
    }),
    (q5 = {
      bank: "$100000",
      cat1: {
        name: "cat5.1",
        question: "question5.1",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat2: {
        name: "cat5.2",
        question: "question5.2",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat3: {
        name: "cat5.3",
        question: "question5.3",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat4: {
        name: "cat5.4",
        question: "question5.4",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
    }),
    (q6 = {
      bank: "$200000",
      cat1: {
        name: "cat6.1",
        question: "question6.1",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat2: {
        name: "cat6.2",
        question: "question6.2",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat3: {
        name: "cat6.3",
        question: "question6.3",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat4: {
        name: "cat6.4",
        question: "question6.4",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
    }),
    (q7 = {
      bank: "$500000",
      cat1: {
        name: "cat7.1",
        question: "question7.1",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat2: {
        name: "cat7.2",
        question: "question7.2",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat3: {
        name: "cat7.3",
        question: "question7.3",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat4: {
        name: "cat7.4",
        question: "question7.4",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
    }),
    (q8 = {
      bank: "$750000",
      cat1: {
        name: "cat8.1",
        question: "question8.1",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat2: {
        name: "cat8.2",
        question: "question8.2",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat3: {
        name: "cat8.3",
        question: "question8.3",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat4: {
        name: "cat8.4",
        question: "question8.4",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
    }),
    (q9 = {
      bank: "$900000",
      cat1: {
        name: "cat9.1",
        question: "question9.1",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat2: {
        name: "cat9.2",
        question: "question9.2",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat3: {
        name: "cat9.3",
        question: "question9.3",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat4: {
        name: "cat9.4",
        question: "question9.4",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
    }),
    (q10 = {
      bank: "$1000000",
      cat1: {
        name: "cat10.1",
        question: "question10.1",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat2: {
        name: "cat4.2",
        question: "question10.2",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat3: {
        name: "cat4.3",
        question: "question10.3",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
      cat4: {
        name: "cat10.4",
        question: "question10.4",
        correctAns: "correct answer",
        wrongAns1: "wrong answer",
        wrongAns2: "wrong answer",
        wrongAns3: "wrong answer",
      },
    }),
  ],
};
//question number tracker
let questionNumber = 0;
// button functions for the game
const button1 = document.querySelector("#answer1");
button1.addEventListener("click", correctAns);
const button2 = document.querySelector("#answer2");
button2.addEventListener("click", wrongAns);
const button3 = document.querySelector("#answer3");
button3.addEventListener("click", wrongAns);
const button4 = document.querySelector("#answer4");
button4.addEventListener("click", wrongAns);
const buttonQuit = document.querySelector("#quit");
buttonQuit.addEventListener("click", quit);
const nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", next);
const continueButton = document.querySelector("#continue");
continueButton.addEventListener("click", continueBtn);
const winButton = document.querySelector("#winButton");
winButton.addEventListener('click', winBtn)

function correctAns(event) {
  const button = event.target;
  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);
  setTimeout(function () {
    button.classList.add("correct");
  }, 1000);
  questionNumber += 1;
  if (questionNumber<games.question.length) {
    // if this is not the last question
    
    setTimeout(function () {
      nextEl.style.display = "flex";
    }, 2000);
  } else {
    // if this is the last question
    setTimeout(function () {
      winEl.style.display = "flex";
    }, 2000);

  }
  
}
function next(event) {
  const button = event.target;
  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);
  setTimeout(function () {
    nextEl.style.display = "none";
    button1.classList.remove("correct");
    loadingPageAnimation();
    gamePage.style.display = "none";
    correctAnsPage.style.display = "flex";
    const correctDisplayEl = document.querySelector("#correctDisplay");
    correctDisplayEl.textContent = `you have ${games.question[questionNumber].bank} in your bank now! do you wish to continue?`;
  }, 2000);
}
function wrongAns(event) {
  const button = event.target;
  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);
  setTimeout(function () {
    button.classList.add("wrong");
  }, 1000);
  setTimeout(function () {
    button.classList.remove("wrong");
    losingPage.style.display = "flex";
    gamePage.style.display = "none";
    const losingDisplayEl = document.querySelector("#losingDisplay");
    losingDisplayEl.textContent =`Oh no, you have reached the end of the game, better luck next time! You have gotten $0!`;
  }, 2000);
}
function quit(event) {
  const button = event.target;
  //console.log(button.textContent);
  button.classList.add("choose");
  setTimeout(function () {
    //your code to be executed after 1 second
    button.classList.remove("choose");
  }, 100);
  setTimeout(function () {
    //your code to be executed after 1 second
    losingPage.style.display = "flex";
    correctAnsPage.style.display = "none";
    const losingDisplay = document.querySelector("#losingDisplay");
    losingDisplay.textContent = `Oh no, you have reached the end of the game, better luck next time! You have gotten ${games.question[questionNumber].bank}!`;
  }, 1000);
}
function continueBtn(event) {
  setTimeout(function () {
    //your code to be executed after 1 second
    choosingCategoryPage.style.display = "flex";
    correctAnsPage.style.display = "none";
    cat1ButtonEl.textContent = games.question[questionNumber].cat1.name;
    cat2ButtonEl.textContent = games.question[questionNumber].cat2.name;
    cat3ButtonEl.textContent = games.question[questionNumber].cat3.name;
    cat4ButtonEl.textContent = games.question[questionNumber].cat4.name;
  }, 1000);
}
function winBtn(event) {
  const button = event.target;
  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);
  setTimeout(function () {
    winEl.style.display = "none";
    button1.classList.remove("correct");
    loadingPageAnimation();
    gamePage.style.display = "none";
    winningPage.style.display = "flex";
  }, 2000);

}

// page elements
const gamePage = document.querySelector("#gamePage");
const homePage = document.querySelector("#homePage");
const instructionPage = document.querySelector("#instructionsPage");
const correctAnsPage = document.querySelector("#correctAnsPage");
const loadingPage = document.querySelector("#loadingPage");
const winningPage = document.querySelector("#winningPage");
const losingPage = document.querySelector("#losingPage");
const choosingCategoryPage = document.querySelector("#choosingCategoryPage");

// page displays
homePage.style.display = "flex";
gamePage.style.display = "none";
instructionPage.style.display = "none";
correctAnsPage.style.display = "none";
winningPage.style.display = "none";
losingPage.style.display = "none";
choosingCategoryPage.style.display = "none";
loadingPage.style.display = "none";
//button display
const nextEl = document.querySelector("#next");
nextEl.style.display = "none";
const winEl = document.querySelector("#win");
winEl.style.display='none';
// category buttons
const cat1ButtonEl = document.querySelector("#cat1");
const cat2ButtonEl = document.querySelector("#cat2");
const cat3ButtonEl = document.querySelector("#cat3");
const cat4ButtonEl = document.querySelector("#cat4");

// once we press start, we want the home page gone and the loading page to show
// after a while the loading page is gone and the choosing category page shows
// once we selected the category, we can proceed to the question
// once we press instructions, we want to go to the instructions page
// pressing the back button on instructions page brings us back to home page
function startGame() {
  if (
    gamePage.style.display === "none" &&
    loadingPage.style.display === "none"
  ) {
    loadingPageAnimation();
    loadingPage.style.display = "flex";
    homePage.style.display = "none";

    setTimeout(function () {
      //your code to be executed after 1 second
      choosingCategoryPage.style.display = "flex";
      loadingPage.style.display = "none";
      cat1ButtonEl.textContent = games.question[questionNumber].cat1.name;
      cat2ButtonEl.textContent = games.question[questionNumber].cat2.name;
      cat3ButtonEl.textContent = games.question[questionNumber].cat3.name;
      cat4ButtonEl.textContent = games.question[questionNumber].cat4.name;
    }, 2500);
  }
}

function loadingPageAnimation() {
  const loadingText = document.querySelector("#loadingText");
  if (loadingText.textContent === "loading.") {
    setTimeout(function () {
      //your code to be executed after 1 second
      loadingText.textContent = "loading..";
      setTimeout(function () {
        //your code to be executed after 1 second
        loadingText.textContent = "loading...";
        setTimeout(function () {
          //your code to be executed after 1 second
          loadingText.textContent = "loading....";
          setTimeout(function () {
            //your code to be executed after 1 second
            loadingText.textContent = "loading.";
            setTimeout(function () {
              //your code to be executed after 1 second
              loadingText.textContent = "loading..";
              setTimeout(function () {
                //your code to be executed after 1 second
                loadingText.textContent = "loading...";
                setTimeout(function () {
                  //your code to be executed after 1 second
                  loadingText.textContent = "loading....";
                  setTimeout(function () {
                    //your code to be executed after 1 second
                    loadingText.textContent = "loading.";
                    setTimeout(function () {
                      //your code to be executed after 1 second
                      loadingText.textContent = "loading..";
                      setTimeout(function () {
                        //your code to be executed after 1 second
                        loadingText.textContent = "loading...";
                        setTimeout(function () {
                          //your code to be executed after 1 second
                          loadingText.textContent = "loading....";
                          setTimeout(function () {
                            //your code to be executed after 1 second
                            loadingText.textContent = "loading.";
                            setTimeout(function () {
                              //your code to be executed after 1 second
                              loadingText.textContent = "loading..";
                              setTimeout(function () {
                                //your code to be executed after 1 second
                                loadingText.textContent = "loading...";
                                setTimeout(function () {
                                  //your code to be executed after 1 second
                                  loadingText.textContent = "loading....";
                                  setTimeout(function () {
                                    //your code to be executed after 1 second
                                    loadingText.textContent = "loading.";
                                  }, 150);
                                }, 150);
                              }, 150);
                            }, 150);
                          }, 150);
                        }, 150);
                      }, 150);
                    }, 150);
                  }, 150);
                }, 150);
              }, 150);
            }, 150);
          }, 150);
        }, 150);
      }, 150);
    }, 150);
  }
}

function showInstructionPage() {
  if (instructionPage.style.display === "none") {
    instructionPage.style.display = "flex";
    homePage.style.display = "none";
  }
}
function backToHome() {
  homePage.style.display = "flex";
  gamePage.style.display = "none";
  instructionPage.style.display = "none";
  correctAnsPage.style.display = "none";
  winningPage.style.display = "none";
  losingPage.style.display = "none";
  choosingCategoryPage.style.display = "none";
  loadingPage.style.display = "none";
}
const startButtonEl = document.querySelector("#startGame");
startButtonEl.addEventListener("click", startGame);

const instructionsButton = document.querySelector("#instructionsButton");
instructionsButton.addEventListener("click", showInstructionPage);

const backButtonEl = document.querySelectorAll(".backToHome");
console.log(backButtonEl)
for (let i = 0; i < backButtonEl.length; i++) {
  backButtonEl[i].addEventListener("click", backToHome);
}

// toggle the sound button on and off
const soundButtonEl = document.querySelector("#soundButton");
let soundOn = true;
soundButtonEl.addEventListener("click", toggleSound);
function toggleSound() {
  if (soundOn) {
    soundOn = false;
    soundButtonEl.textContent = "Sound: Off";
  } else {
    soundOn = true;
    soundButtonEl.textContent = "Sound: On";
  }
}
// playing the background music
var audio = new Audio('audio_file.mp3');
if (soundOn===true){
  audio.play();
} else {
  audio.play();
}

// category button functions
const categoryButtonEl = document.querySelectorAll(".categoryButtons");
for (let i = 0; i < categoryButtonEl.length; i++) {
  categoryButtonEl[i].addEventListener("click", chooseCategory);
}

function chooseCategory(event) {
  let userCategoryChoice = event.target.id;
  console.log(userCategoryChoice);
  choosingCategoryPage.style.display = "none";
  loadingPage.style.display = "flex";
  loadingPageAnimation();
  setTimeout(function () {
    const questionCategoryEl = document.querySelector("#questionCategory");
    const questionDisplayEl = document.querySelector("#questionDisplay");
    const bankDisplayEL = document.querySelector("#bank");
    gamePage.style.display = "flex";
    loadingPage.style.display = "none";

    switch (userCategoryChoice) {
      case "cat1":
        bankDisplayEL.textContent = `Bank: ${games.question[questionNumber].bank}`;
        questionCategoryEl.textContent =
          games.question[questionNumber].cat1.name;
        questionDisplayEl.textContent =
          games.question[questionNumber].cat1.question;
        button1.textContent = games.question[questionNumber].cat1.correctAns;
        button2.textContent = games.question[questionNumber].cat1.wrongAns1;
        button3.textContent = games.question[questionNumber].cat1.wrongAns2;
        button4.textContent = games.question[questionNumber].cat1.wrongAns3;

        break;
      case "cat2":
        bankDisplayEL.textContent = `Bank: ${games.question[questionNumber].bank}`;
        questionCategoryEl.textContent =
          games.question[questionNumber].cat2.name;
        questionDisplayEl.textContent =
          games.question[questionNumber].cat2.question;
        button1.textContent = games.question[questionNumber].cat2.correctAns;
        button2.textContent = games.question[questionNumber].cat2.wrongAns1;
        button3.textContent = games.question[questionNumber].cat2.wrongAns2;
        button4.textContent = games.question[questionNumber].cat2.wrongAns3;
        break;
      case "cat3":
        bankDisplayEL.textContent = `Bank: ${games.question[questionNumber].bank}`;
        questionCategoryEl.textContent =
          games.question[questionNumber].cat3.name;
        questionDisplayEl.textContent =
          games.question[questionNumber].cat3.question;
        button1.textContent = games.question[questionNumber].cat3.correctAns;
        button2.textContent = games.question[questionNumber].cat3.wrongAns1;
        button3.textContent = games.question[questionNumber].cat3.wrongAns2;
        button4.textContent = games.question[questionNumber].cat3.wrongAns3;
        break;
      case "cat4":
        bankDisplayEL.textContent = `Bank: ${games.question[questionNumber].bank}`;
        questionCategoryEl.textContent =
          games.question[questionNumber].cat4.name;
        questionDisplayEl.textContent =
          games.question[questionNumber].cat4.question;
        button1.textContent = games.question[questionNumber].cat4.correctAns;
        button2.textContent = games.question[questionNumber].cat4.wrongAns1;
        button3.textContent = games.question[questionNumber].cat4.wrongAns2;
        button4.textContent = games.question[questionNumber].cat4.wrongAns3;
        break;
    }
  }, 2500);
}
