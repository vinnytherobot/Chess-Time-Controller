const form = document.getElementById("settings-form");
const player1NameInput = document.getElementById("player1-name");
const player2NameInput = document.getElementById("player2-name");
const initialTimeInput = document.getElementById("initial-time");
const incrementInput = document.getElementById("increment");

document.addEventListener("DOMContentLoaded", () => {
    player1NameInput.value = localStorage.getItem("player1Name") || "";
    player2NameInput.value = localStorage.getItem("player2Name") || "";
    initialTimeInput.value = localStorage.getItem("initialTime") || "";
    incrementInput.value = localStorage.getItem("increment") || "";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const player1Name = player1NameInput.value.trim();
    const player2Name = player2NameInput.value.trim();
    const initialTime = Number(initialTimeInput.value.trim());
    const increment = Number(incrementInput.value.trim());

    if (player1Name && player2Name && initialTime && !isNaN(increment)) {
        localStorage.setItem("player1Name", player1Name);
        localStorage.setItem("player2Name", player2Name);
        localStorage.setItem("initialTime", initialTime);
        localStorage.setItem("increment", increment);

        alert("Settings saved successfully");
        window.location.href = "/match/index.html";
    } else {
        alert("Please fill in all fields correctly.");
    }
});