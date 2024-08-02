function rollDice(){
    const diceNum = document.getElementById("diceNum").value;
    const result = document.getElementById("result");
    const diceImg = document.getElementById("diceImg");

    const values = [];
    const images = [];

    for(let i = 0; i < diceNum; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice/${value}.jpg" alt="Dice ${value}">`);
    }

    result.textContent = `dice: ${values.join(', ')}`;
    diceImg.innerHTML = images.join('');
}