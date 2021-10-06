document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset") {
                reset();   
            } else {
                let selection = this.getAttribute("data-type")
                calcWinner(selection);
            }
        })
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
    document.querySelector("i").className = `btn btn--${p1}`;
    document.querySelectorAll("i")[1].className = `btn btn--${cpu}`;

    //Continues if game not a draw
    if (p1 !== cpu) {

        //Rock beats scissors & lizard
        if (p1 === "rock") { 
            if (cpu === "scissors" || cpu === "lizard"){
            feedback.innerText =`${p1} beats ${cpu} - player 1 wins!`;
            p1Score();
            } else {
            feedback.innerText =`${p1} loses to ${cpu} - cpu wins!`;
            cpuScore();
            }
        }

        //Paper beats rock & spock
        else if (p1 === "paper") {
            if (cpu === "rock" || cpu === "spock"){
                feedback.innerText =`${p1} beats ${cpu} - player 1 wins!`;
                p1Score();
                } else {
                feedback.innerText =`${p1} loses to ${cpu} - cpu wins!`;
                cpuScore();
                }
        }

        //Scissors beats paper & lizard
        else if (p1 === "scissors") {
            if (cpu === "paper" || cpu === "lizard"){
                feedback.innerText =`${p1} beats ${cpu} - player 1 wins!`;
                p1Score();
                } else {
                feedback.innerText =`${p1} loses to ${cpu} - cpu wins!`;
                cpuScore();
                }
        }

        // Lizard beats paper & spock
        else if (p1 === "lizard") {
            if (cpu === "paper" || cpu === "spock"){
                feedback.innerText =`${p1} beats ${cpu} - player 1 wins!`;
                p1Score();
                } else {
                feedback.innerText =`${p1} loses to ${cpu} - cpu wins!`;
                cpuScore();
                }
        }
        //Spock beats scissors $ rock
        else if (p1 === "spock") {
            if (cpu === "scissors" || cpu === "rock"){
                feedback.innerText =`${p1} beats ${cpu} - player 1 wins!`;
                p1Score();
                } else {
                feedback.innerText =`${p1} loses to ${cpu} - cpu wins!`;
                cpuScore();
                }
        }        
    } else {
        feedback.innerText = `player 1 chose ${p1} cpu chose ${cpu} - draw!`;
    }

}

/**
 * Calculates what option the CPU is going to pick
 */

function calcCPU() {
    let options = ["rock", "paper", "scissors", "lizard", "spock"]
    let rand = Math.floor(Math.random() * 4)
    return options[rand];
}

/**
 * Increment payer score by 1
 */

function p1Score() {
    let oldScore = parseInt(document.querySelector("#p1score").innerText);
    document.querySelector("#p1score").innerText = ++oldScore;
}

/**
 * Increment CPU score by 1
 */

function cpuScore() {
    let oldScore = parseInt(document.querySelector("#cpuscore").innerText);
    document.querySelector("#cpuscore").innerText = ++oldScore;
}


/**
 * Resets the scores
 */
function reset() {
    document.querySelector("#p1score").innerText = "0";
    document.querySelector("#cpuscore").innerText = "0";
}

/**
 * 
 */

const winSelector = document.querySelector("#playto");
let winningScore= 3;
let isGameOver = false;

function updateScores(){}
