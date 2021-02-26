import Status from "./Status";
import Board from "./Board";
import Turns from "./Turns";
import useTicTacToe from "../hooks/useTicTacToe";


function TicTacToe() {
  const {board, turn, winner, disabled, changeTurn, play, reset} = useTicTacToe();

  return (
    <div className="TicTacToe">
      <div className="main">
    {/*
        <Status turn={turn} winner={winner} />
    */}
        <Board board={board} disabled={disabled} onPlay={play} />
    {/*
        {(winner!==null || turn===9) && <button onClick={reset}>restart</button>}
    */}
      </div>
    {/*
      <Turns turn={turn} onSelect={t => changeTurn(t)} />
    */}
    </div>
  );
}

export default TicTacToe;