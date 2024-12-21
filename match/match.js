const player1Name = localStorage.getItem("player1Name") || "Player 1";
const player2Name = localStorage.getItem("player2Name") || "Player 2";

const initialTime = Number(localStorage.getItem("initialTime")) || 180;

let player1Time = initialTime; 
let player2Time = initialTime; 

let activePlayer = "player1";
let interval;

const increment = Number(localStorage.getItem("increment")) || 0;

document.querySelector(".player1 span").textContent = player1Name;
document.querySelector(".player2 span").textContent = player2Name;


function initializeGame() {
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("time1").textContent = formatTime(player1Time);
    document.getElementById("time2").textContent = formatTime(player2Time);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function switchTurn(player) {
    if (interval) clearInterval(interval);

    if (activePlayer === "player1") {
        player1Time += increment;
        updateDisplay();
    } else {
        player2Time += increment;
        updateDisplay();
    }

    activePlayer = player;

    document.querySelectorAll(".timer").forEach(timer => timer.classList.remove("active"));
    document.querySelector(`.timer.${player}`).classList.add("active");

    interval = setInterval(() => {
        if (activePlayer === "player1" && player1Time > 0) {
            player1Time--;
        } else if (activePlayer === "player2" && player2Time > 0) {
            player2Time--;
        }
        updateDisplay();
        checkEndGame();
    }, 1000);
}

function checkEndGame() {
    if (player1Time === 0 || player2Time === 0) {
        clearInterval(interval);
        document.querySelectorAll(".timer").forEach(timer => timer.style.pointerEvents = "none"); // Desativa cliques
        alert(player1Time === 0 ? `${player2Name} venceu!` : `${player1Name} venceu!`);
    }
}

initializeGame();
updateDisplay();