document.addEventListener("DOMContentLoaded", function () {
    const gameOptions = ["piedra", "papel", "tijera"];
    const roundResult = document.getElementById("round-result");
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    const winnerMessage = document.getElementById("winner-message");
    const restartButton = document.getElementById("restart-button");
    const startButton = document.getElementById("start-button"); // Botón para comenzar el juego
    const playerNameInput = document.getElementById("player-name");
    const greetingMessage = document.getElementById("greeting-message"); // Elemento para mostrar el saludo

    let playerWins = 0;
    let computerWins = 0;
    let roundsPlayed = 0;
    let playerName = "";

    function computerPlay() {
        const randomIndex = Math.floor(Math.random() * gameOptions.length);
        return gameOptions[randomIndex];
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "Empate";
        } else if (
            (playerSelection === "piedra" && computerSelection === "papel") ||
            (playerSelection === "papel" && computerSelection === "piedra") ||
            (playerSelection === "tijera" && computerSelection === "papel")
        ) {
            return "Jugador";
        } else {
            return "Computadora";
        }
    }

    function updateScore(result) {
        if (result === "Jugador") {
            playerWins++;
        } else if (result === "Computadora") {
            computerWins++;
        }
        playerScore.textContent = `Jugador: ${playerWins}`;
        computerScore.textContent = `Computadora: ${computerWins}`;
    }

    function displayWinner() {
        if (playerWins > computerWins) {
            winnerMessage.textContent = "¡Jugador gana el juego!";
        } else if (computerWins > playerWins) {
            winnerMessage.textContent = "¡Computadora gana el juego!";
        } else {
            winnerMessage.textContent = "¡Empate!";
        }
        restartButton.style.display = "block";
        startButton.style.display = "block"; // Mostrar el botón "Comenzar Juego" al reiniciar
    }

    function restartGame() {
        playerWins = 0;
        computerWins = 0;
        roundsPlayed = 0;
        playerScore.textContent = "Jugador: 0";
        computerScore.textContent = "Computadora: 0";
        roundResult.textContent = "";
        winnerMessage.textContent = "";
        restartButton.style.display = "none";
        playerName = "";
        playerNameInput.value = "";
        greetingMessage.textContent = ""; // Limpiar el saludo
    }

    // Evento para comenzar el juego
    startButton.addEventListener("click", function () {
        playerName = playerNameInput.value.trim();
        if (playerName === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        // Mostrar el saludo con el nombre ingresado
        greetingMessage.textContent = `¡Hola, ${playerName}! Comencemos el juego.`;

        // Ocultar el botón de inicio y habilitar las opciones del juego
        startButton.style.display = "none";
        document.querySelectorAll("#game-options img").forEach(option => {
            option.style.pointerEvents = "auto";
        });
    });

    // Evento para las opciones del juego
    document.querySelectorAll("#game-options img").forEach(option => {
        option.addEventListener("click", function () {
            if (roundsPlayed < 5) {
                const playerSelection = option.id;
                const computerSelection = computerPlay();
                const result = playRound(playerSelection, computerSelection);

                roundResult.textContent = `Jugador elige ${playerSelection}, Computadora elige ${computerSelection}. ${result}`;

                updateScore(result);

                roundsPlayed++;

                if (roundsPlayed === 5) {
                    displayWinner();
                }
            }
        });
    });

    // Evento para reiniciar el juego
    restartButton.addEventListener("click", restartGame);
});
