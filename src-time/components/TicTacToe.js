import Status from "./Status";
import Board from "./Board";
import Turns from "./Turns";
import useTicTacToe from "../hooks/useTicTacToe";


function TicTacToe() {
  const {board, turn, winner, disabled, changeTurn, play, reset} = useTicTacToe();

  return (
    <div className="TicTacToe">
      <Status turn={turn} winner={winner} />
      <div className="main">
        <Board board={board} disabled={disabled} onPlay={play} />
        <Turns turn={turn} onSelect={t => changeTurn(t)} />
      </div>
      {(winner!==null || turn===9) && <button onClick={reset}>restart</button>}
    </div>
  );
}

export default TicTacToe;
