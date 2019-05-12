var inquirer = require("inquirer");

function Solution(word, guesses) {
    this.word = word;
    this.guesses = guesses;
}
var vayne = new Solution("vayne", 10);

console.log(vayne.word.length);

inquirer.prompt([
    {
        type: "input",
        name: "letter",
        message: "Guess a letter!"
    }
]).then(function(response){

    console.log("You guessed " + response.letter + "!");
    var current = vayne.word;
    // var finalWord = current.replace(/[a-z]/g, "_");
    // console.log(finalWord);
    // console.log(vayne.word);
    for (var i = 0; i < vayne.word.length; i++) {
        if (response.letter === vayne.word[i]) {
            console.log("True mate it works");
            console.log(vayne.word)
        } else {
            console.log("Mate it dont work");
        }
    }
}) 