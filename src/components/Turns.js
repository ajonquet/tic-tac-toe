
function Turns({ turn, onSelect }) {
  const turns = [];
  for (let t=0; t<=turn; t++) {
    turns.push(<div key={t} onClick={() => onSelect(t)}>{ t===0 ? "Start" : "Turn "+t }</div>);
  }
  return (
    <div className="Turns">
      {turns}
    </div>
  );
}

export default Turns;
