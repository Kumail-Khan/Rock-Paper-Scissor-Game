let player1 = 0;
let player2 = 0;

const chocies = document.querySelectorAll(".choice");
const msgparah = document.querySelector('#msg')
const player1Score = document.querySelector("#player1-score")
const player2Score = document.querySelector("#player2-score")

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        player1++;
        player1Score.innerText = player1;
        msgparah.innerText = `You Win - ${userChoice} beats ${compChoice}`
        msgparah.style.backgroundColor = "#31572c"
    } else {
        player2++;
        player2Score.innerText = player2;
        console.log("you Lose")
        msgparah.innerText = `You Lose - ${userChoice} beats ${compChoice} `
        msgparah.style.backgroundColor = "#a4161a"
    }
}

const drawGame = () => {
    console.log("game was draw");
    msgparah.innerText = "Game was Draw  "
    msgparah.style.backgroundColor = "#4a4e69"
}

const playGame = (userChoice) => {
    // your choice

    // computer choice
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === rock) {
            // paper , scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === paper) {
            // rock , scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // rock , paper
            userWin = compChoice === "paper" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


chocies.forEach((chocie) => {
    chocie.addEventListener("click", () => {
        const userChoice = chocie.getAttribute("id");
        playGame(userChoice);
    })
})