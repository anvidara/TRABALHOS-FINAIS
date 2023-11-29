/*ADIVINHAÇÂO*/
const minNumber = 1;
        const maxNumber = 100;
        let secretNumber = generateSecretNumber();
        let numberOfTries = 0;

        function generateSecretNumber() {
            return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        }

        function checkGuess() {
            const guessInput = document.getElementById("guess");
            const message = document.getElementById("message");

            const guess = parseInt(guessInput.value);
            if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
                message.textContent = "Digite um número válido entre 1 e 100.";
                return;
            }

            numberOfTries++;

            if (guess === secretNumber) {
                message.textContent = `Parabéns! Você acertou o número em ${numberOfTries} tentativas.`;
            } else if (guess < secretNumber) {
                message.textContent = "Tente um número maior.";
            } else {
                message.textContent = "Tente um número menor.";
            }
        }

        function resetGame() {
            secretNumber = generateSecretNumber();
            numberOfTries = 0;
            document.getElementById("message").textContent = "";
            document.getElementById("guess").value = "";
        }

/*JOGO DA VELHA*/
// Variáveis para controle do jogo
let currentPlayer = "🎃";
let isGameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

// Função para fazer a jogada
function makeMove(cellIndex) {
    if (isGameActive && board[cellIndex] === "") {
        board[cellIndex] = currentPlayer;
        document.getElementById("board").children[cellIndex].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            document.getElementById("winner").innerText = `Jogador ${currentPlayer} venceu!`;
            isGameActive = false;
        } else if (board.every(cell => cell !== "")) {
            document.getElementById("winner").innerText = "Empate!";
            isGameActive = false;
        } else {
            currentPlayer = currentPlayer === "🎃" ? "👻" : "🎃";
        }
    }
}

// Função para verificar se alguém venceu
function checkWin(player) {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winCombinations.some(combination =>
        combination.every(index => board[index] === player)
    );
}

// Função para reiniciar o jogo
function restGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("board").querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    document.getElementById("winner").innerText = "";
    currentPlayer = "🎃";
    isGameActive = true;
}
//Novo
let resposta = 'Halloween';
let enigma = document.getElementById('enigma');
let iniciarButton = document.getElementById('iniciar');
let reiniciarButton = document.getElementById('reiniciar');
let verificarButton = document.getElementById('verificar');
let mensagem = document.getElementById('mensagem');

iniciarButton.addEventListener('click', function() {
    enigma.style.opacity = '1';
    iniciarButton.style.display = 'none';
    verificarButton.style.display = 'inline-block';
});

reiniciarButton.addEventListener('click', function() {
    enigma.style.opacity = '0';
    iniciarButton.style.display = 'inline-block';
    reiniciarButton.style.display = 'none';
    verificarButton.style.display = 'none';
    mensagem.style.opacity = '0';
    mensagem.textContent = '';
    document.getElementById('resposta').value = '';
});

verificarButton.addEventListener('click', verificarResposta);

function verificarResposta() {
    let senha = document.getElementById('resposta').value;

    if (senha.toLowerCase() !== resposta.toLowerCase()) {
        mensagem.textContent = "Ops, tente novamente :(";
        mensagem.style.opacity = '1';
    } else {
        mensagem.textContent = "Parabéns, resposta correta!";
        mensagem.style.opacity = '1';
        reiniciarButton.style.display = 'inline-block';
        verificarButton.style.display = 'none';
    }
}