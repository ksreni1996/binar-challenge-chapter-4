const playerBatu = document.getElementById("playerBatu");
const playerKertas = document.getElementById("playerKertas");
const playerGunting = document.getElementById("playerGunting");

const computerBatu = document.getElementById("computerBatu");
const computerKertas = document.getElementById("computerKertas");
const computerGunting = document.getElementById("computerGunting");

const resultText = document.getElementById("resultText");

const allGameImg = document.querySelectorAll('img');

const selections = {
    Batu: { name:'Batu' , defeat:'Gunting'},
    Kertas: { name:'Kertas' , defeat:'Batu'},
    Gunting: { name:'Gunting' , defeat:'Kertas'}
};

let computerSelect = '';

function updateScore(playerSelect){
    console.log(playerSelect, computerSelect);
    const select = selections[playerSelect]
    if(playerSelect === computerSelect){
        resultText.textContent = "Draw";
        document.getElementById("resultText").style.backgroundColor = "#035b0c";
    }
    else if(select.defeat.indexOf(computerSelect) > -1){
        resultText.textContent = "PLAYER 1 WIN";
        document.getElementById("resultText").style.backgroundColor = "4c9653";
    }
    else{
        resultText.textContent = "COM WIN";
        document.getElementById("resultText").style.backgroundColor = "#4c9653";
    }
}

function computerRandomSelect() {
    const computerSelectNumber = Math.random();
   
    if (computerSelectNumber < 0.4) {
        computerSelect = 'Batu';
    }
    else if (computerSelectNumber >= 0.4 && computerSelectNumber < 0.7) {
        computerSelect = 'Gunting';
    }
    else {
        computerSelect = 'Kertas';
    }
    displayComputerSelect(computerSelect);
}

function displayComputerSelect(computerSelect){
    switch (computerSelect) {
        case 'Batu':
            computerBatu.classList.add('selected');
            break;
        case 'Kertas':
            computerKertas.classList.add('selected');
            break;
        case 'Gunting':
            computerGunting.classList.add('selected');
            break;
        default:
            break;
    }
}

function resetSelected() {
    allGameImg.forEach((img) => {
        img.classList.remove('selected')
    })
}

function select(playerSelect) {
    resetSelected()
    console.log(playerSelect);
    switch (playerSelect) {
        case 'Batu':
            playerBatu.classList.add('selected');
            break;
        case 'Kertas':
            playerKertas.classList.add('selected');
            break;
        case 'Gunting':
            playerGunting.classList.add('selected');
            break;
        default:
            break;
    }

    computerRandomSelect();
    updateScore(playerSelect);
}