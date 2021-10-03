document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset") {
                alert("reset");
            } else {
                let selection = this.getAttribute("data-type")
                alert (`you selected ${selection}`);
            }
        })
    }
});


function calcCPU() {
    let options = ["rock", "paper", "scissors", "lizard", "spock"]
    let rand = Math.floor(Math.random() * 6)
    return options[rand];

        
}
function calcWinner() {
    
}
function updateScore() {}
function playGame() {}
function reset() {}