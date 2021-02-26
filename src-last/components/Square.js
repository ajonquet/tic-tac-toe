import Player from './Player';

function Square({ value, onClick, disabled }) {

  return (
    <button className="Square" onClick={onClick} disabled={disabled}>
      <Player value={value}/>
    </button>
  );
}

export default Square;
