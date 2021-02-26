import { useState } from "react";
import Status from "./Status";
import Board from "./Board";


const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board) {
  for (let i=0; i<lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a]!==null && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}


function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);

  function handlePlay(i) {
    const newBoard = [...board];
    newBoard[i] = turn%2;
    setBoard(newBoard);
    setTurn(turn+1);
    setWinner(getWinner(newBoard));
  }

  return (
    <div className="TicTacToe">
      <Status turn={turn} winner={winner} />
      <Board board={board} disabled={turn===9 || winner!==null} onPlay={handlePlay} />
    </div>
  );
}

export default TicTacToe;
