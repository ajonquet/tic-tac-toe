import { useState, useEffect } from 'react';

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

export function useTicTacToe() {
  const [boards, setBoards] = useState([Array(9).fill(null)]);
  const [winner, setWinner] = useState(null);
  const [turnId, setTurnId] = useState(null);
  const turn = boards.length-1;

  useEffect(() => {
    setWinner(getWinner(boards[turn]));
  }, [boards])

  function play(i) {
    const board = [...boards[turn]];
    if (board[i] === null) {
      board[i] = turn%2;
      setBoards([...boards, board]);
    }
  }

  function changeTurn(t) {
    if (boards[t] !== undefined) {
      setTurnId(t===turn ? null : t);
    }
  }

  function reset() {
    setBoards([Array(9).fill(null)]);
    setTurnId(null);
  }

  return {
    board: boards[turnId ?? turn],
    turn,
    winner,
    disabled: turnId!==null || turn===9 || winner !==null,
    changeTurn,
    play,
    reset,
  };
}

export default useTicTacToe;
