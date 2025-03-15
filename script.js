let userScore = 0;
let compScore = 0;

// Select all elements with the class "choice"
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
// Function to generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const draw = () => {
    msg.innerText = "Draw";
    console.log("Game was a draw");
    msg.style.backgroundColor = "black";

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("User wins");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;  // Use backticks
        msg.style.backgroundColor = "green";
    } else {
        console.log("Computer wins");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer wins! ${compChoice} beats ${userChoice}`;  // Use backticks
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    if (userChoice === compChoice) {
        // Draw
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin ,userChoice , compChoice); // Moved inside the else block
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice); // Fixed incorrect variable name (choiceId -> userChoice)
        playGame(userChoice);
    });
});