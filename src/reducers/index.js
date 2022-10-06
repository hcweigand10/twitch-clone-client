import { combineReducers } from "redux";

export default combineReducers({
    replaceMe: () => 5
})

var options = ["r", "p", "s"]
var wins = 0
var losses = 0
var ties = 0

function init() {
    var play = confirm(`Would you like to play?
    Wins: ${wins}
    Ties: ${ties}
    Losses: ${losses}`)
    if (play) {
        startGame()
    } else {
        alert("goodbye")
    }
}

function startGame() {
    var userChoice = prompt("Enter R, P, or S:").toLowerCase()
    if (!options.includes(userChoice)) {
        alert("invalid choice")
        startGame()
        return
    }
    var randomInt = Math.floor(Math.random() * options.length)
    var compChoice = options[randomInt]
    console.log(userChoice, compChoice)
    compare(userChoice, compChoice)
    init()
}

function compare(userChoice, compChoice) {
    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");
    
      // Check every win condition for the player
      } else if (
        (userChoice === "R" && computerChoice === "S") || 
        (userChoice === "P" && computerChoice === "R") || 
        (userChoice === "S" && computerChoice === "P")
      ) {
        wins++;
        window.alert("You win!");
    
      // If above conditions failed, assume player lost
      } else {
        losses++;
        window.alert("You lost!");
      }
}

init()