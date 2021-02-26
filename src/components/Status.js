import Player from './Player';

function getStatus(turn, winner) {
  if (Number.isInteger(winner)) {
    return <>Winner is <Player value={winner} /></>;
  }
  if (turn === 9) {
    return "Tie!";
  }
  return <>Player <Player value={turn} /></>;
}

function Status({ turn, winner }) {
  return (
    <div className="Status" >
      {getStatus(turn, winner)}
    </div>
  );
}

export default Status;
