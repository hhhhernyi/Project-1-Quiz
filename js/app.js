
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
  setTimeout(function() {
      //your code to be executed after 1 second
      button.classList.remove("choose");
    }, 100);

  console.log(`${button.textContent} is pressed`);

}
