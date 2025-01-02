// question bank for the game
const games = {
  bank: 0,
  question: [
    (q1 = {
      bank: "$0",
      cat1: {
        name: "Politics",
        question: "Who is Singapore's longest serving Prime minister?",
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
      bank: "$1000",
      cat1: {
        name: "Facts",
        question: "What color is the Singapore Citizen IC?",
        correctAns: "Pink",
        wrongAns1: "Blue",
        wrongAns2: "Yellow",
        wrongAns3: "Green",
      },
      cat2: {
        name: "Landmarks",
        question: "What is the name of Singapore's main airport?",
        correctAns: "Changi Airport",
        wrongAns1: "Seletar Airport",
        wrongAns2: "Tengah Airport",
        wrongAns3: "Tuas Airport",
      },
      cat3: {
        name: "Geography",
        question: "What is The Capital City of Singapore?",
        correctAns: "Singapore",
        wrongAns1: "Orchard",
        wrongAns2: "Raffles Place",
        wrongAns3: "Sentosa",
      },
      cat4: {
        name: "Icons",
        question: "What is Singapore's icon that has a lion head and a mermaid body called?",
        correctAns: "Merlion",
        wrongAns1: "Lion fish",
        wrongAns2: "Singamaid",
        wrongAns3: "Mersinga",
      },
    }),
    (q3 = {
      bank: "$2500",
      cat1: {
        name: "History",
        question: "Who was The British Administrator who Established Singapore as a British Colony in 1819?",
        correctAns: "Sir Stamford Raffles.",
        wrongAns1: "Sir William Farquhar",
        wrongAns2: "Robert Fullerton",
        wrongAns3: "Ronald Macpherson",
      },
      cat2: {
        name: "Symbols",
        question: "What does the red colour on our national flag represent?",
        correctAns: "Universal Brotherhood and Equality of Man",
        wrongAns1: "Progress and Prosperity",
        wrongAns2: "Everlasting Peace and Justice for Man",
        wrongAns3: "Young Nation on the rise",
      },
      cat3: {
        name: "Abbreviation",
        question: "What does MRT stand for?",
        correctAns: "Mass Rapid Transit",
        wrongAns1: "Mass Rapid Travel",
        wrongAns2: "Mass Rapid Transport",
        wrongAns3: "Mass Rail Transport",
      },
      cat4: {
        name: "Food",
        question: "What Fruit in Singapore is known as the King Of Fruits",
        correctAns: "Durian",
        wrongAns1: "Jackfruit",
        wrongAns2: "Mangosteen",
        wrongAns3: "Apple",
      },
    }),
    (q4 = {
      bank: "$5000",
      cat1: {
        name: "Language",
        question: "What is the official national language of Singapore?",
        correctAns: "Malay",
        wrongAns1: "Mandarin",
        wrongAns2: "English",
        wrongAns3: "Singlish",
      },
      cat2: {
        name: "History",
        question: "In which year did Singapore fall to the Japanese in World War Two?",
        correctAns: "1942",
        wrongAns1: "1943",
        wrongAns2: "1945",
        wrongAns3: "1947",
      },
      cat3: {
        name: "Sports",
        question: "Who is Singapore's first Olympian?",
        correctAns: "LLoyd Valberg (High Jump)",
        wrongAns1: "Tan Howe Liang (Weightlifting)",
        wrongAns2: "Feng Tianwei (Ping Pong)",
        wrongAns3: "Joseph Schooling (Swimming)",
      },
      cat4: {
        name: "Food",
        question: "What is the national drink of Singapore",
        correctAns: "The Singapore Sling",
        wrongAns1: "Tiger Beer",
        wrongAns2: "Pokka Green Tea",
        wrongAns3: "Kopi Peng",
      },
    }),
    (q5 = {
      bank: "$10000",
      cat1: {
        name: "Movies",
        question: "Which hawker centre was featured in the movie Crazy Rich Asians?",
        correctAns: "Newton Food Centre",
        wrongAns1: "Chomp Chomp",
        wrongAns2: "East Coast Lagoon",
        wrongAns3: "Maxwell Food Centre",
      },
      cat2: {
        name: "NDP",
        question: "What is the theme of Singapore NDP in 2023?",
        correctAns: "Onward As One",
        wrongAns1: "We Are Singapore",
        wrongAns2: "Together, Our Singapore Spirit",
        wrongAns3: "A Stronger Singapore",
      },
      cat3: {
        name: "Nature",
        question: "What is the name of Singapore's national flower?",
        correctAns: "Vanda Miss Joaquim",
        wrongAns1: "Rafflesia",
        wrongAns2: "Hibiscus",
        wrongAns3: "Malayan Ixora",
      },
      cat4: {
        name: "Transport",
        question: "Which MRT Station has the longest escalator?",
        correctAns: "Bras Basah",
        wrongAns1: "Stadium",
        wrongAns2: "Raffles Place",
        wrongAns3: "Redhill",
      },
    }),
    (q6 = {
      bank: "$25000",
      cat1: {
        name: "Locations",
        question: "Which of these streets in Singapore do not exist?",
        correctAns: "Punggol Street",
        wrongAns1: "Mandalay Street",
        wrongAns2: "China Street",
        wrongAns3: "Club Street",
      },
      cat2: {
        name: "Awards",
        question: "How many times has Singapore's Changi Airport been awarded the title of Skytrax's Best Airport in the World?",
        correctAns: "10",
        wrongAns1: "5",
        wrongAns2: "8",
        wrongAns3: "7",
      },
      cat3: {
        name: "Food",
        question: "Which is the oldest hawker centre in Singapore?",
        correctAns: "Lau Pa Sat",
        wrongAns1: "People's Park Food Centre",
        wrongAns2: "Maxwell Food Centre",
        wrongAns3: "Tekka Market",
      },
      cat4: {
        name: "Date",
        question: "In which year was the Istana built?",
        correctAns: "1869",
        wrongAns1: "1879",
        wrongAns2: "1868",
        wrongAns3: "1872",
      },
    }),
    (q7 = {
      bank: "$50000",
      cat1: {
        name: "Arts",
        question: "Which is the oldest Museum in Singapore?",
        correctAns: "The National Museum of Singapore",
        wrongAns1: "ArtScience Museum",
        wrongAns2: "Singapore Art Museum",
        wrongAns3: "National Gallery Singapore",
      },
      cat2: {
        name: "Politics",
        question: "Who was the first elected president of Singapore?",
        correctAns: "Ong Teng Cheong",
        wrongAns1: "Yusof Ishak",
        wrongAns2: "Wee Kim Wee",
        wrongAns3: "Benjamin Sheares",
      },
      cat3: {
        name: "Symbols",
        question: "The five stars on Singapore's flag represent?",
        correctAns: "Democracy, Peace, Progress, Justice, Equality",
        wrongAns1: "Democracy, Peace, Progress, Meritocracy, Equality",
        wrongAns2: "Democracy, Harmony, Progress, Justice, Equality",
        wrongAns3: "Democracy, Peace, Progress, Justice, Respect",
      },
      cat4: {
        name: "Culture",
        question: "How many UNESCO world heritage sites are there in Singapore?",
        correctAns: "1",
        wrongAns1: "5",
        wrongAns2: "8",
        wrongAns3: "3",
      },
    }),
    (q8 = {
      bank: "$100000",
      cat1: {
        name: "Population",
        question: "Which town in Singapore has the largest population in 2024?",
        correctAns: "Bedok",
        wrongAns1: "Sengkang",
        wrongAns2: "Jurong West",
        wrongAns3: "Tampines",
      },
      cat2: {
        name: "Landmarks",
        question: "Which is the oldest bridge in Singapore?",
        correctAns: "Cavenagh Bridge",
        wrongAns1: "Benjamin Sheares Bridge",
        wrongAns2: "Jiak Kim Bridge",
        wrongAns3: "Anderson Bridge",
      },
      cat3: {
        name: "Buildings",
        question: "What is the maximum height of skyscrapers allowed in Singapore?",
        correctAns: "280m",
        wrongAns1: "330m",
        wrongAns2: "420m",
        wrongAns3: "300m",
      },
      cat4: {
        name: "Sports",
        question: "In 2016 swimmer Joseph Schooling won Singapore's first Olympic Gold medal in which event?",
        correctAns: "100m Butterfly",
        wrongAns1: "200m Freestyle",
        wrongAns2: "200m Butterfly",
        wrongAns3: "50m Freestyle",
      },
    }),
    (q9 = {
      bank: "$250000",
      cat1: {
        name: "Buildings",
        question: "Which is the highest building in Singapore?",
        correctAns: "Tanjong Pagar Centre",
        wrongAns1: "One Raffles Place",
        wrongAns2: "Marina Bay Sands",
        wrongAns3: "100AM Mall",
      },
      cat2: {
        name: "Locations",
        question: "On which road can you find the National Gallery Singapore?",
        correctAns: "St. Andrews Road",
        wrongAns1: "Parliament Road",
        wrongAns2: "Stamford Road",
        wrongAns3: "Bayfront Avenue",
      },
      cat3: {
        name: "Bus",
        question: "Which public bus service has the longest route?",
        correctAns: "Bus No. 858",
        wrongAns1: "Bus No. 961",
        wrongAns2: "Bus No. 171",
        wrongAns3: "Bus No. 31",
      },
      cat4: {
        name: "School",
        question: "Which of these schools is the oldest girls' school in Singapore?",
        correctAns: "St. Margaret's School",
        wrongAns1: "Nanyang Girls School",
        wrongAns2: "Raffles Girls School",
        wrongAns3: "Singapore Chinese Girls School",
      },
    }),
    (q10 = {
      bank: "$500000",
      cat1: {
        name: "Sports",
        question: "What is The Name of The Singaporean Football Club that Has Won The Most Singapore Premier League Titles?",
        correctAns: "Albirex Niigata Singapore",
        wrongAns1: "Lion City Sailors",
        wrongAns2: "Tampines Rovers FC",
        wrongAns3: "Geylang United",
      },
      cat2: {
        name: "Transport",
        question: "Which MRT line is the longest in singapore?",
        correctAns: "East-West Line (Green)",
        wrongAns1: "Downtown Line (Blue)",
        wrongAns2: "Thomson-East Coast Line (Brown)",
        wrongAns3: "Circle Line (Yellow)",
      },
      cat3: {
        name: "Politics",
        question: "How many constituencies does Singapore have?",
        correctAns: "29",
        wrongAns1: "32",
        wrongAns2: "25",
        wrongAns3: "39",
      },
      cat4: {
        name: "cat10.4",
        question: "Which organisation did Singapore founded?",
        correctAns: "World Toilet Organization",
        wrongAns1: "World Customs Organization",
        wrongAns2: "Organization for Economic Co-operation and Development",
        wrongAns3: "International Coffee Organization",
      },
    }),
  ],
};
// question number tracker
let questionNumber = 0;
// button functions for the game
const buttonQuit = document.querySelector("#quit");
buttonQuit.addEventListener("click", quit);
const nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", next);
const continueButton = document.querySelector("#continue");
continueButton.addEventListener("click", continueBtn);
const winButton = document.querySelector("#winButton");
winButton.addEventListener('click', winBtn)
const button1 = document.querySelector("#answer1");
const button2 = document.querySelector("#answer2");
const button3 = document.querySelector("#answer3");
const button4 = document.querySelector("#answer4");
const answerButton = document.querySelectorAll(".answerButton");

for (i=0; i<answerButton.length; i++) {
  answerButton[i].addEventListener('click', clickFunction);
}

function clickFunction(event) {
  const button = event.target;
  console.log(button)
  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);

  if (event.target.classList[1] === 'correctAnswer') {
    correctAns(event);
  } else if (event.target.classList[1] ==='wrongAnswer') {
    wrongAns(event);
  }
}

function correctAns(event) {
   const button = event.target;
   const correctSound = new Audio('../assets/sound/Correct.mp3')
  setTimeout(function () {
    button.classList.add("correct");
    correctSound.play();
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
   
    loadingPageAnimation();
    gamePage.style.display = "none";
    correctAnsPage.style.display = "flex";
    const correctDisplayEl = document.querySelector("#correctDisplay");
    correctDisplayEl.textContent = `you have ${games.question[questionNumber].bank} in your bank now! do you wish to continue?`;
  }, 2000);
}
function wrongAns(event) {
  const button = event.target;
  const wrongSound = new Audio('../assets/sound/wrong.mp3')
  setTimeout(function () {
    button.classList.add("wrong");
    wrongSound.play();
  }, 1000);
  setTimeout(function () {
    for (i=0; i<answerButton.length; i++) {
      answerButton[i].classList.remove("wrong");
    }
    losingPage.style.display = "flex";
    gamePage.style.display = "none";
    questionNumber = 0;
    const losingDisplayEl = document.querySelector("#losingDisplay");
    losingDisplayEl.textContent =`Oh no, you have reached the end of the game, better luck next time! You have gotten $0!`;
  }, 2800);
}
function quit(event) {
  const button = event.target;
  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);
  setTimeout(function () {
    losingPage.style.display = "flex";
    correctAnsPage.style.display = "none";
    const losingDisplay = document.querySelector("#losingDisplay");
    losingDisplay.textContent = `Oh no, you have reached the end of the game, better luck next time! You have gotten ${games.question[questionNumber].bank}!`;
  }, 1000);
}
function continueBtn(event) {
  const button = event.target;
  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);
  setTimeout(function () {
    for (i=0; i<answerButton.length; i++) {
      answerButton[i].classList.remove("correctAnswer");
      answerButton[i].classList.remove("wrongAnswer");
      answerButton[i].classList.remove("correct");
      answerButton[i].classList.remove("wrong");
    }

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
    const winningSound = new Audio('../assets/sound/winner.mp3');
    winningSound.play();
    winningSound.loop = true;
    winningSound.volume=0.7;
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
function startGame(event) {
  const button = event.target;
  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);
  setTimeout(function () {
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
  }, 300);
  
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

function showInstructionPage(event) {
  const button = event.target;
  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);
  setTimeout(function () {
    if (instructionPage.style.display === "none") {
      instructionPage.style.display = "flex";
      homePage.style.display = "none";
    }
  }, 300);
 
}
function backToHome(event) {
  const button = event.target;
  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);
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
const backgroundMusic = new Audio('../assets/sound/BGM.mp3')
let soundOn = true;
backgroundMusic.play();
backgroundMusic.loop =true;
backgroundMusic.volume=0.4;
soundButtonEl.addEventListener("click", toggleSound);
function toggleSound() {
  if (soundOn) {
    soundOn = false;
    soundButtonEl.textContent = "Sound: Off";
    backgroundMusic.volume=0;
  } else {
    soundOn = true;
    soundButtonEl.textContent = "Sound: On";
    backgroundMusic.volume=0.4;
  }
}
// category button functions
const categoryButtonEl = document.querySelectorAll(".categoryButtons");
for (let i = 0; i < categoryButtonEl.length; i++) {
  categoryButtonEl[i].addEventListener("click", chooseCategory);
}

function chooseCategory(event) {
  
  let userCategoryChoice = event.target.id;
  const button = event.target;

  button.classList.add("choose");
  setTimeout(function () {
    button.classList.remove("choose");
  }, 100);

  setTimeout(function () {
    choosingCategoryPage.style.display = "none";
  loadingPage.style.display = "flex";
  loadingPageAnimation();
  }, 400);
  

  setTimeout(function () {
    const questionCategoryEl = document.querySelector("#questionCategory");
    const questionDisplayEl = document.querySelector("#questionDisplay");
    const bankDisplayEL = document.querySelector("#bank");
    const questionNumberEl =document.querySelector(".questionNumber")
    gamePage.style.display = "flex";
    loadingPage.style.display = "none";

    switch (userCategoryChoice) {
      case "cat1":
        bankDisplayEL.textContent = `Bank: ${games.question[questionNumber].bank}`;
        questionCategoryEl.textContent =`Category: ${games.question[questionNumber].cat1.name}`;
        questionDisplayEl.textContent =games.question[questionNumber].cat1.question;
        questionNumberEl.textContent=`Question number: ${questionNumber+1}`

        
        button1.textContent = games.question[questionNumber].cat1.wrongAns3;
        button1.classList.add("wrongAnswer");
        button2.textContent = games.question[questionNumber].cat1.wrongAns1;
        button2.classList.add("wrongAnswer");
        button3.textContent = games.question[questionNumber].cat1.wrongAns2;
        button3.classList.add("wrongAnswer");
        button4.textContent = games.question[questionNumber].cat1.correctAns;
        button4.classList.add("correctAnswer");
        break;

      case "cat2":
        bankDisplayEL.textContent = `Bank: ${games.question[questionNumber].bank}`;
        questionCategoryEl.textContent = `Category: ${games.question[questionNumber].cat2.name}`;
        questionDisplayEl.textContent = games.question[questionNumber].cat2.question;
        questionNumberEl.textContent=`Question number: ${questionNumber+1}`

          button1.textContent = games.question[questionNumber].cat2.correctAns;
          button1.classList.add("correctAnswer")
          button2.textContent = games.question[questionNumber].cat2.wrongAns1;
          button2.classList.add("wrongAnswer")
          button3.textContent = games.question[questionNumber].cat2.wrongAns2;
          button3.classList.add("wrongAnswer")
          button4.textContent = games.question[questionNumber].cat2.wrongAns3;
          button4.classList.add("wrongAnswer");
        break;

      case "cat3":
        bankDisplayEL.textContent = `Bank: ${games.question[questionNumber].bank}`;
        questionCategoryEl.textContent = `Category: ${games.question[questionNumber].cat3.name}`;
        questionDisplayEl.textContent = games.question[questionNumber].cat3.question;
        questionNumberEl.textContent=`Question number: ${questionNumber+1}`

          button1.textContent = games.question[questionNumber].cat3.wrongAns1;
          button1.classList.add("wrongAnswer")
          button2.textContent = games.question[questionNumber].cat3.correctAns;
          button2.classList.add("correctAnswer")
          button3.textContent = games.question[questionNumber].cat3.wrongAns2;
          button3.classList.add("wrongAnswer")
          button4.textContent = games.question[questionNumber].cat3.wrongAns3;
          button4.classList.add("wrongAnswer");
        break;

      case "cat4":
        bankDisplayEL.textContent = `Bank: ${games.question[questionNumber].bank}`;
        questionCategoryEl.textContent = `Category: ${games.question[questionNumber].cat4.name}`;
        questionDisplayEl.textContent = games.question[questionNumber].cat4.question;
        questionNumberEl.textContent=`Question number: ${questionNumber+1}`

          button1.textContent = games.question[questionNumber].cat4.wrongAns2;
          button1.classList.add("wrongAnswer")
          button2.textContent = games.question[questionNumber].cat4.wrongAns1;
          button2.classList.add("wrongAnswer")
          button3.textContent = games.question[questionNumber].cat4.correctAns;
          button3.classList.add("correctAnswer")
          button4.textContent = games.question[questionNumber].cat4.wrongAns3;
          button4.classList.add("wrongAnswer");
        break;
    }
  }, 2500);
}
