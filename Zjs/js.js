var card = Math.floor(Math.random() * 11);
card++;
var card1 = Math.floor(Math.random() * 11);
card1++;
var cards = card + card1;

var opcard = Math.floor(Math.random() * 11);
opcard++;
var opcard1 = Math.floor(Math.random() * 11);
opcard1++;
var opcards = opcard + opcard1;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.prompt(true);
newScreen();
hit();

function hit() {
    cards = cards + Math.floor(Math.random() * 12);
    if (cards>21) {
        console.log("you lose");
    }
}
function stand() {
    console.log(opcard1);
    console.log(opcards);
    if (cards>opcards) {
        console.log("\nYOU WIN!");
    }
    if (cards<opcards) {
        console.log("\nYOU LOSE");
    }
    if (cards===opcards) {
        console.log("\nTIE");
    }
}
function newScreen () {
    console.log("Your hand:\n"+card + " "+card1 + "\n"+cards);
    console.log("\nOther player's hand:\n"+opcard);
    hs();
}
function hs() {
    if (cards>21) {
        
    }
    rl.question("Hit or Stand ", (answer) => {
   if (answer === "hit") {
       hit();
       newScreen();
   }
   if (answer == "stand") {
       stand();
   }
});
}