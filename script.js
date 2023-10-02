// script.js

let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('tic-tac-toe-board').rows[row].cells[col].innerText = currentPlayer;
        
        if (checkWin()) {
            alert(currentPlayer + ' wins!');
            resetGame();
        } else if (checkDraw()) {
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    // Check rows, columns, diagonals
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) return true;
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) return true;
    }
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) return true;
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) return true;

    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') return false;
        }
    }
    return true;
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById('tic-tac-toe-board').rows[i].cells[j].innerText = '';
        }
    }
}
