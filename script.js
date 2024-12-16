let time1 = 180; //3 minutes in seconds
let time2 = 180; //3 minutes in seconds
let activePlayer = "player1"; // default player
let interval;

function updateDisplay() {
    document.getElementById("time1").textContent = formatTime(time1);
    document.getElementById("time2").textContent = formatTime(time2);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function switchTurn(player) {
    if (interval) clearInterval(interval); 

    if (activePlayer === player) return;

    activePlayer = player;
    document.querySelectorAll(".timer").forEach(timer => timer.classList.remove("active"));
    document.querySelector(`.timer.${player}`).classList.add("active");

    interval = setInterval(() => {
        if (activePlayer === "player1") {
            if (time1 > 0) time1--;
        } else {
            if (time2 > 0) time2--;
        }
        updateDisplay();
        checkEndGame();
    }, 1000);
}

function checkEndGame() {
    if (time1 === 0 || time2 === 0) {
        clearInterval(interval);
        alert(time1 === 0 ? "Player 2 won" : "Player 1 won");
    }
}

updateDisplay();