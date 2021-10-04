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
    
    // Continues if game not a draw
    if (p1 !== cpu) {

        //Rock beats scissors & lizard
        if (p1 === "rock") { 
            if (cpu === "scissors" || cpu === "lizard"){
            feedback.innerText =`${p1} beats ${cpu} player 1 wins!`;
            p1Score();
            } else {
            feedback.innerText =`${p1} loses to ${cpu} cpu wins!`;
            cpuScore();
            }
        }

        //Paper beats rock & spock
        else if (p1 === "paper") {}

        //Scissors beats paper & lizard
        else if (p1 === "scissors") {}

        // Lizard beats paper & spock
        else if (p1 === "lizard") {}
        //Spock beats scissors $ rock
        else if (p1 === "spock") {}        
    } else {
        feedback.innerText = "player and cpu draw";
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
    let oldScore = parseInt(document.querySelector(".p1score").innerText);
    document.querySelector(".p1score").innerText = ++oldScore;
}

/**
 * Increment CPU score by 1
 */

function cpuScore() {
    let oldScore = parseInt(document.querySelector(".cpuscore").innerText);
    document.querySelector(".cpuscore").innerText = ++oldScore;
}


/**
 * Resets the scores
 */
function reset() {
    document.querySelector(".p1score").innerText = "0";
    document.querySelector(".cpuscore").innerText = "0";
}