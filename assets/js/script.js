/* jshint esversion:8 */

/*
 When content loads sort buttons by data-type
 if data type is reset the reset funtion runs
 if data type is one of the game buttons then the calcWinner function runs
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "reset") {
                reset();
            } else {
                let selection = this.getAttribute("data-type");
                calcWinner(selection);
            }
        });
    }
});

/**
 * Main game loop
 * Calculates the winner of each scenario
 */

function calcWinner(p1) {
    let feedback = document.querySelector("#feedback");
    let cpu = calcCPU();

    //Change fontaswesome
    document.querySelector("i").className = `fas fa-hand-${p1}`;
    document.querySelectorAll("i")[1].className = `fas fa-hand-${cpu}`;

    //Continues if game not a draw
    if (p1 !== cpu) {

        //Rock beats scissors & lizard
        if (p1 === "rock") {
            if (cpu === "scissors" || cpu === "lizard") {
                feedback.innerText = `${p1} beats ${cpu} | round won!`;
                p1Score();
            } else {
                feedback.innerText = `${p1} loses to ${cpu} | round lost!`;
                cpuScore();
            }
        }

        //Paper beats rock & spock
        else if (p1 === "paper") {
            if (cpu === "rock" || cpu === "spock") {
                feedback.innerText = `${p1} beats ${cpu} | round won!`;
                p1Score();
            } else {
                feedback.innerText = `${p1} loses to ${cpu} | round lost!`;
                cpuScore();
            }
        }

        //Scissors beats paper & lizard
        else if (p1 === "scissors") {
            if (cpu === "paper" || cpu === "lizard") {
                feedback.innerText = `${p1} beats ${cpu} | round won!`;
                p1Score();
            } else {
                feedback.innerText = `${p1} loses to ${cpu} - | round lost!`;
                cpuScore();
            }
        }

        // Lizard beats paper & spock
        else if (p1 === "lizard") {
            if (cpu === "paper" || cpu === "spock") {
                feedback.innerText = `${p1} beats ${cpu} | round won!`;
                p1Score();
            } else {
                feedback.innerText = `${p1} loses to ${cpu} | round lost!`;
                cpuScore();
            }
        }
        //Spock beats scissors $ rock
        else if (p1 === "spock") {
            if (cpu === "scissors" || cpu === "rock") {
                feedback.innerText = `${p1} beats ${cpu} | round won!`;
                p1Score();
            } else {
                feedback.innerText = `${p1} loses to ${cpu} | round lost!`;
                cpuScore();
            }
        }
    } else {
        feedback.innerText = `round is a draw!`;
    }

}

/**
 * Calculates what option the CPU is going to pick
 */

function calcCPU() {
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    let rand = Math.floor(Math.random() * 4);
    return options[rand];
}

/**
 * Number of games played
 */

let p1 = {
    score: 0
};
let cpu = {
    score: 0
};

let select = document.querySelector("#playto");
let limit = 3;

select.addEventListener('change', function () {
    limit = parseInt(this.value);
    reset()
});

/**
 * Checks whether a player has won or lost yet
 * Adds winner class if won
 * Adds loser class if lost
 * Disables relevant buttons when game is over
 */

function check() {

    if (p1.score === limit) {
        feedback.innerText = "Well done, you've won!";
        feedback.classList.add("winner");
        document.querySelector("p").classList.add("winner");
        document.querySelectorAll("p")[1].classList.add("loser");
        document.querySelector("#p1score").classList.add("winner");
        document.querySelector("#cpuscore").classList.add("loser");
        document.querySelectorAll(".btn").disabled = true;

    } else if (cpu.score === limit) {
        feedback.innerText = "You lost! Better luck next time.";
        feedback.classList.add("loser");
        document.querySelector("p").classList.add("loser");
        document.querySelectorAll("p")[1].classList.add("winner");
        document.querySelector("#cpuscore").classList.add("winner");
        document.querySelector("#p1score").classList.add("loser");
        document.querySelectorAll(".btn").disabled = true;
    }
}

/**
 * Increment payer score by 1
 */

function p1Score() {
    let oldScore = parseInt(document.querySelector("#p1score").innerText);
    document.querySelector("#p1score").innerText = ++oldScore;
    p1.score = oldScore++;
    check();
}

/**
 * Increment CPU score by 1
 */

function cpuScore() {
    let oldScore = parseInt(document.querySelector("#cpuscore").innerText);
    document.querySelector("#cpuscore").innerText = ++oldScore;
    cpu.score = oldScore++;
    check();
}

/**
 * Resets the scores
 */
function reset() {
    document.querySelector("#p1score").innerText = "0";
    document.querySelector("#cpuscore").innerText = "0";
    feedback.innerText = "click an option to play!";
    feedback.classList.remove("loser", "winner");
    p1.score = 0;
    cpu.score = 0;
    document.querySelector("p").classList.remove("loser", "winner");
    document.querySelectorAll("p")[1].classList.remove("loser", "winner");
    document.querySelector("#cpuscore").classList.remove("loser", "winner");
    document.querySelector("#p1score").classList.remove("loser", "winner");
    document.querySelectorAll(".btn").disabled = false;
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("instructions");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}