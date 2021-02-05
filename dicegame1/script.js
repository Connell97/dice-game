//fuctions: roll, change image, add up score, restart
const score = document.querySelector("#score");
const diceImg = document.querySelector("#dice-img");
const rollBtn = document.querySelector("#roll-btn");

function rollDice() {
    let roll = Math.ceil(Math.random()*6);
    console.log(roll);
    diceImg.src = (`img/dice${roll}.png`);
};

rollBtn.addEventListener("click", () => {
    rollDice();
});