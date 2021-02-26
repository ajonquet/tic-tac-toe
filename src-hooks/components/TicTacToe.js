import Status from "./Status";
import Board from "./Board";
import useTicTacToe from "../hooks/useTicTacToe";


function TicTacToe() {
  const {board, turn, winner, disabled, changeTurn, play} = useTicTacToe();

  return (
    <div className="TicTacToe">
      <Status turn={turn} winner={winner} />
      <Board board={board} disabled={disabled} onPlay={play} />
    </div>
  );
}

export default TicTacToe;
