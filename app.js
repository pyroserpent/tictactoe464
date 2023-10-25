import React, { useState } from 'react';

function App() {
    const [board, setBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);
    const [currentPlayer, setCurrentPlayer] = useState('X');

    const makeMove = (row, col) => {
        ...
    }

    const checkWin = () => {
        const lines = [
            ...
        ];
        // Check for winning lines
        ...
    }

    const checkDraw = () => {
        ...
    }

    const resetGame = () => {
        ...
    }

    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <div id="game-container">
                <h1 id="game-title">Tic Tac Toe by Ziaul Chowdhury</h1>
                <p>Current Turn: {currentPlayer}</p>
                <table id="tic-tac-toe-board">
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex} onClick={() => makeMove(rowIndex, colIndex)}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default App;
