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
    const [v1, v2, v3] = lines[i].map(n => board[n] && board[n]%2);
    if (v1!==null && v1 === v2 && v1 === v3) {
      return v1;
    }
  }
  return null;
}


export function useTicTacToe() {
  const [turn, setTurn] = useState(0);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [displayTurn, setDisplayTurn] = useState(null);

  useEffect(() => {
    const newWinner = getWinner(board)
    newWinner!==winner && setWinner(newWinner);
  }, [board])

  console.log(turn, displayTurn, winner, board)

  function play(squareNb) {
    if (board[squareNb] === null) {
      const newBord = [...board];
      newBord[squareNb] = turn;
      setBoard(newBord);
      setTurn(turn+1);
    }
  }

  function showTurn(turnNb) {
    if (Number.isInteger(turnNb) && turnNb >= 0 && turnNb < turn) {
      setDisplayTurn(turnNb);
    }
    else {
      setDisplayTurn(null);
    }
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setTurn(0);
    setDisplayTurn(null);
  }

  return {
    board: board.map(v => displayTurn===null || v<displayTurn ? v : null),
    turn,
    winner,
    disabled: displayTurn!==null || turn===9 || winner !==null,
    play,
    showTurn,
    reset,
  };
}

export default useTicTacToe;
