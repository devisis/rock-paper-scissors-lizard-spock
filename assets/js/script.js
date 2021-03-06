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
            } else if (this.getAttribute("data-type") === "help") {
                modalOpen();
            } else {
                let p1 = this.getAttribute("data-type");
                calcWinner(p1);
            }
        });
    }
});

let feedback = document.querySelector("#feedback");

/**
 ** Main game loop
 ** Calculates the winner of each scenario
 */

function calcWinner(p1) {
    let cpu = calcCPU();

    //Change fontaswesome
    let p1Hand = document.getElementById("player-hand");
    p1Hand.className = `fas fa-hand-${p1}`;
    let cpuHand = document.getElementById("cpu-hand");
    cpuHand.className = `fas fa-hand-${cpu}`;

    //Clear all classes
    feedback.classList.remove("winner", "loser");
    p1Hand.classList.remove("winner", "loser");
    cpuHand.classList.remove("winner", "loser");

    //Continues if game not a draw
    if (p1 === cpu) {
        feedback.innerText = "Round drawn!";
    } else {
        //Rock beats scissors & lizard
        if (p1 === "rock" && (cpu === "scissors" || cpu === "lizard")) {
            feedback.innerText = "Round won!";
            feedback.classList.add("winner");
            p1Hand.classList.add("winner");
            cpuHand.classList.add("loser");
            p1Score();
        }
        //Paper beats rock & spock
        else if (p1 === "paper" && (cpu === "rock" || cpu === "spock")) {
            feedback.innerText = "Round won!";
            feedback.classList.add("winner");
            p1Hand.classList.add("winner");
            cpuHand.classList.add("loser");
            p1Score();
        }
        //Scissors beats paper & lizard
        else if (p1 === "scissors" && (cpu === "paper" || cpu === "lizard")) {
            feedback.innerText = "Round won!";
            feedback.classList.add("winner");
            p1Hand.classList.add("winner");
            cpuHand.classList.add("loser");
            p1Score();
        }
        // Lizard beats paper & spock
        else if (p1 === "lizard" && (cpu === "paper" || cpu === "spock")) {
            feedback.innerText = "Round won!";
            feedback.classList.add("winner");
            p1Hand.classList.add("winner");
            cpuHand.classList.add("loser");
            p1Score();
        }
        //Spock beats scissors & rock
        else if (p1 === "spock" && (cpu === "scissors" || cpu === "rock")) {
            feedback.innerText = "Round won!";
            feedback.classList.add("winner");
            p1Hand.classList.add("winner");
            cpuHand.classList.add("loser");
            p1Score();

        } else {
            feedback.innerText = "Round lost!";
            feedback.classList.add("loser");
            p1Hand.classList.add("loser");
            cpuHand.classList.add("winner");
            cpuScore();
        }
    }
}
/** Calculates what option the CPU is going to pick */

function calcCPU() {
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    let rand = Math.floor(Math.random() * 4);
    return options[rand];
}

/** Number of games played */

let p1Stats = {
    score: 0
};
let cpuStats = {
    score: 0
};

let select = document.querySelector("#playto");
let limit = 10;

select.addEventListener('change', function () {
    limit = parseInt(this.value);
    reset();
});

/**
 ** Checks whether a player has won or lost yet
 ** Adds winner class if won
 ** Adds loser class if lost
 ** Disables relevant buttons when game is over
 */

function check() {
    if (p1Stats.score === limit) {
        feedback.innerText = "Well done, you've won!";
        feedback.classList.add("winner");
        document.querySelector("#p1-display").classList.add("winner");
        document.querySelector("#cpu-display").classList.add("loser");
        document.querySelector("#p1score").classList.add("winner");
        document.querySelector("#cpuscore").classList.add("loser");
        disButton(true);
    } else if (cpuStats.score === limit) {
        feedback.innerText = "You lost! Better luck next time.";
        feedback.classList.add("loser");
        document.querySelector("#p1-display").classList.add("loser");
        document.querySelector("#cpu-display").classList.add("winner");
        document.querySelector("#cpuscore").classList.add("winner");
        document.querySelector("#p1score").classList.add("loser");
        disButton(true);
    }
}

/** Disables buttons */

function disButton(bool) {
    let btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
        btn.disabled = bool;
    });
}

/** Increment payer score by 1*/

function p1Score() {
    let oldScore = parseInt(document.querySelector("#p1score").innerText);
    document.querySelector("#p1score").innerText = ++oldScore;
    p1Stats.score = oldScore++;
    check();
}

/** Increment CPU score by 1*/

function cpuScore() {
    let oldScore = parseInt(document.querySelector("#cpuscore").innerText);
    document.querySelector("#cpuscore").innerText = ++oldScore;
    cpuStats.score = oldScore++;
    check();
}

/** Resets the scores */
function reset() {
    document.querySelector("#p1score").innerText = "0";
    document.querySelector("#cpuscore").innerText = "0";
    feedback.innerText = "click an option to play!";
    feedback.classList.remove("loser", "winner");
    p1Stats.score = 0;
    cpuStats.score = 0;
    document.querySelector("#p1-display").classList.remove("loser", "winner");
    document.querySelector("#cpu-display").classList.remove("loser", "winner");
    document.querySelector("#cpuscore").classList.remove("loser", "winner");
    document.querySelector("#p1score").classList.remove("loser", "winner");
    disButton(false);
    document.querySelector("#player-hand").className = `fas fa-ghost`;
    document.querySelector("#cpu-hand").className = `fas fa-ghost`;
}

/** Model that opens when help button is clicked and closes when close or the outside window is clicked */
function modalOpen() {
    let modal = document.getElementById("modal");
    let close = document.getElementById("close");
    console.log(modal.style.display);
    // display model on click if its not already showing
    if (modal.style.display == "" || modal.style.display == "none") {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    close.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

}