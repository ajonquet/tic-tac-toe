import Square from './Square';

function Board({ board, onPlay, disabled }) {

  function handleClick(i) {
    if (board[i] === null) {
      onPlay && onPlay(i);
    }
  }

  return (
    <div className="Board">
      {board.map((v,i) => <Square key={"s"+i+"-"+v} value={v} onClick={() => handleClick(i)} disabled={disabled} />)}
    </div>
  );
}

export default Board;
