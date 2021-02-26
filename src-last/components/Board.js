import Row from './Row';
import Square from './Square';


function sliceArray(array, size){
  const res = [];
  for (let i=0; i<array.length; i+=size) {
    res.push(array.slice(i, i+size));
  }
  return res;
}

function Board({ board, onPlay, disabled }) {

  /*
  function handleClick(i) {
    if (board[i] === null) {
      onPlay && onPlay(i);
    }
  }
  */

//  const rows = sliceArray(board.map((v,i) => <Square key={"s"+i+"-"+v} value={v} onClick={() => onPlay(i)} disabled={disabled} />), 3);
  const rows = board.map((v,i) => <Square key={"s"+i+"-"+v} value={v} onClick={() => onPlay(i)} disabled={disabled} />);

  return (
    <div className="Board">
      {rows.map((row,i) => <Row key={i}>{row}</Row>)}
    </div>
  );
}

export default Board;
