import Player from './Player';

function Status({ turn, winner }) {

  let status = (<>Player <Player value={turn%2} /></>);
  if (winner !== null) {
    status = (<>Winner is <Player value={turn%2} /></>);
  }
  if (turn === 9) {
    status = "Tie!";
  }

  return (
    <div className="Status" >
      {status}
    </div>
  );
}

export default Status;
